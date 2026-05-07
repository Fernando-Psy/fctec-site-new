import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    limit,
    query,
    serverTimestamp,
    updateDoc,
    where,
} from 'firebase/firestore';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from 'firebase/storage';
import { auth, db, hasFirebaseConfig, storage } from '../lib/firebase';

const BLOG_COLLECTION = import.meta.env.VITE_FIREBASE_BLOG_COLLECTION || 'blogPosts';
const STORAGE_BLOG_PATH = import.meta.env.VITE_FIREBASE_STORAGE_BLOG_PATH || 'blog-covers';

const assertFirebase = () => {
    if (!hasFirebaseConfig || !db || !auth) {
        throw new Error(
            'Firebase nao configurado. Defina as variaveis VITE_FIREBASE_* antes de usar o blog admin.'
        );
    }
};

const assertStorage = () => {
    assertFirebase();

    if (!storage) {
        throw new Error(
            'Firebase Storage nao esta disponivel neste projeto. Use uma URL manual para a capa ou habilite o Storage.'
        );
    }
};

const normalizeDate = (value) => {
    if (!value) {
        return null;
    }

    if (value instanceof Date) {
        return value;
    }

    if (typeof value.toDate === 'function') {
        return value.toDate();
    }

    return null;
};

const normalizePost = (snapshot) => {
    const data = snapshot.data();

    return {
        id: snapshot.id,
        title: data.title || '',
        slug: data.slug || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        coverImage: data.coverImage || '',
        coverImagePath: data.coverImagePath || '',
        author: data.author || '',
        published: Boolean(data.published),
        createdAt: normalizeDate(data.createdAt),
        updatedAt: normalizeDate(data.updatedAt),
        publishedAt: normalizeDate(data.publishedAt),
    };
};

const sortByNewest = (posts) =>
    [...posts].sort((first, second) => {
        const firstDate =
            first.publishedAt || first.updatedAt || first.createdAt || new Date(0);
        const secondDate =
            second.publishedAt || second.updatedAt || second.createdAt || new Date(0);

        return secondDate.getTime() - firstDate.getTime();
    });

export const slugify = (value) =>
    value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

const buildExcerpt = (content) => content.replace(/\s+/g, ' ').trim().slice(0, 180);

export const fetchPublishedPosts = async () => {
    assertFirebase();

    const postsQuery = query(
        collection(db, BLOG_COLLECTION),
        where('published', '==', true)
    );
    const snapshot = await getDocs(postsQuery);

    return sortByNewest(snapshot.docs.map(normalizePost));
};

export const fetchPostBySlug = async (slug) => {
    assertFirebase();

    const postQuery = query(
        collection(db, BLOG_COLLECTION),
        where('slug', '==', slug),
        limit(1)
    );
    const snapshot = await getDocs(postQuery);
    const [post] = snapshot.docs.map(normalizePost);

    if (!post || !post.published) {
        return null;
    }

    return post;
};

export const fetchAllPosts = async () => {
    assertFirebase();

    const snapshot = await getDocs(collection(db, BLOG_COLLECTION));
    return sortByNewest(snapshot.docs.map(normalizePost));
};

export const saveBlogPost = async (post) => {
    assertFirebase();

    const cleanedTitle = post.title.trim();
    const cleanedContent = post.content.trim();
    const cleanedSlug = slugify(post.slug || cleanedTitle);

    const payload = {
        title: cleanedTitle,
        slug: cleanedSlug,
        excerpt: (post.excerpt || buildExcerpt(cleanedContent)).trim(),
        content: cleanedContent,
        coverImage: post.coverImage.trim(),
        coverImagePath: post.coverImagePath?.trim() || '',
        author: post.author.trim(),
        published: Boolean(post.published),
        updatedAt: serverTimestamp(),
    };

    if (post.published && !post.publishedAt) {
        payload.publishedAt = serverTimestamp();
    }

    if (!post.id) {
        payload.createdAt = serverTimestamp();
        if (post.published) {
            payload.publishedAt = serverTimestamp();
        }

        await addDoc(collection(db, BLOG_COLLECTION), payload);
        return;
    }

    const docRef = doc(db, BLOG_COLLECTION, post.id);
    await updateDoc(docRef, payload);
};

export const deleteBlogPost = async (id) => {
    assertFirebase();

    await deleteDoc(doc(db, BLOG_COLLECTION, id));
};

export const uploadCoverImage = async (file, currentPath = '') => {
    assertStorage();

    if (!file) {
        throw new Error('Selecione uma imagem antes de enviar.');
    }

    if (currentPath) {
        try {
            await deleteObject(ref(storage, currentPath));
        } catch {
            // Ignora imagem antiga ausente para nao bloquear a troca da capa.
        }
    }

    const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]+/g, '-');
    const filePath = `${STORAGE_BLOG_PATH}/${Date.now()}-${sanitizedName}`;
    const storageRef = ref(storage, filePath);

    await uploadBytes(storageRef, file, {
        contentType: file.type || 'image/jpeg',
    });

    const downloadURL = await getDownloadURL(storageRef);

    return {
        url: downloadURL,
        path: filePath,
    };
};

export const removeCoverImage = async (filePath) => {
    assertStorage();

    if (!filePath) {
        return;
    }

    await deleteObject(ref(storage, filePath));
};

export const deleteBlogPostWithAssets = async (post) => {
    assertFirebase();

    if (post.coverImagePath) {
        try {
            await removeCoverImage(post.coverImagePath);
        } catch {
            // Se a imagem nao existir mais, a exclusao do post continua.
        }
    }

    await deleteBlogPost(post.id);
};

export const loginAdmin = async (email, password) => {
    assertFirebase();
    return signInWithEmailAndPassword(auth, email, password);
};

export const logoutAdmin = async () => {
    assertFirebase();
    return signOut(auth);
};

export const subscribeToAdminAuth = (callback) => {
    assertFirebase();
    return onAuthStateChanged(auth, callback);
};
