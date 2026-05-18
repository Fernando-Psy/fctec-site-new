import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    serverTimestamp,
    updateDoc,
    where,
} from 'firebase/firestore';
import { db, hasFirebaseConfig } from '../lib/firebase';

const CATEGORIES_COLLECTION = 'serviceCategories';
const SERVICES_COLLECTION = 'services';

const assertFirebase = () => {
    if (!hasFirebaseConfig || !db) {
        throw new Error(
            'Firebase não configurado. Defina as variáveis VITE_FIREBASE_* antes de usar o painel de serviços.'
        );
    }
};

const normalizeCategory = (snapshot) => {
    const data = snapshot.data();
    return {
        id: snapshot.id,
        name: data.name || '',
        slug: data.slug || '',
        description: data.description || '',
        order: data.order ?? 0,
        active: Boolean(data.active),
    };
};

const normalizeService = (snapshot) => {
    const data = snapshot.data();
    return {
        id: snapshot.id,
        categoryId: data.categoryId || '',
        title: data.title || '',
        slug: data.slug || '',
        description: data.description || '',
        detailedDescription: data.detailedDescription || '',
        features: Array.isArray(data.features) ? data.features : [],
        icon: data.icon || '',
        image: data.image || '',
        imagePublicId: data.imagePublicId || '',
        whatsappLink: data.whatsappLink || '',
        order: data.order ?? 0,
        active: Boolean(data.active),
    };
};

// ─── Categorias ─────────────────────────────────────────────────────────────

const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);

export const fetchAllCategories = async () => {
    assertFirebase();
    const snap = await getDocs(collection(db, CATEGORIES_COLLECTION));
    return snap.docs.map(normalizeCategory).sort(byOrder);
};

export const fetchActiveCategories = async () => {
    assertFirebase();
    const q = query(
        collection(db, CATEGORIES_COLLECTION),
        where('active', '==', true)
    );
    const snap = await getDocs(q);
    return snap.docs.map(normalizeCategory).sort(byOrder);
};

export const saveCategory = async (data) => {
    assertFirebase();
    const { id, ...rest } = data;
    const payload = { ...rest, updatedAt: serverTimestamp() };

    if (id) {
        await updateDoc(doc(db, CATEGORIES_COLLECTION, id), payload);
        return id;
    }

    const ref = await addDoc(collection(db, CATEGORIES_COLLECTION), {
        ...payload,
        createdAt: serverTimestamp(),
    });
    return ref.id;
};

export const deleteCategory = async (id) => {
    assertFirebase();
    await deleteDoc(doc(db, CATEGORIES_COLLECTION, id));
};

// ─── Serviços ────────────────────────────────────────────────────────────────

export const fetchAllServices = async () => {
    assertFirebase();
    const snap = await getDocs(collection(db, SERVICES_COLLECTION));
    return snap.docs.map(normalizeService).sort(byOrder);
};

export const fetchActiveServices = async () => {
    assertFirebase();
    const q = query(
        collection(db, SERVICES_COLLECTION),
        where('active', '==', true)
    );
    const snap = await getDocs(q);
    return snap.docs.map(normalizeService).sort(byOrder);
};

export const fetchServiceBySlug = async (slug) => {
    assertFirebase();
    const q = query(
        collection(db, SERVICES_COLLECTION),
        where('slug', '==', slug)
    );
    const snap = await getDocs(q);
    if (snap.empty) return null;
    return normalizeService(snap.docs[0]);
};

export const saveService = async (data) => {
    assertFirebase();
    const { id, ...rest } = data;
    const payload = { ...rest, updatedAt: serverTimestamp() };

    if (id) {
        await updateDoc(doc(db, SERVICES_COLLECTION, id), payload);
        return id;
    }

    const ref = await addDoc(collection(db, SERVICES_COLLECTION), {
        ...payload,
        createdAt: serverTimestamp(),
    });
    return ref.id;
};

export const deleteService = async (id) => {
    assertFirebase();
    await deleteDoc(doc(db, SERVICES_COLLECTION, id));
};
