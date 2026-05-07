import { useEffect, useMemo, useRef, useState } from 'react';
import './AdminBlog.css';
import { hasFirebaseConfig } from '../../lib/firebase';
import {
  deleteBlogPostWithAssets,
  fetchAllPosts,
  loginAdmin,
  logoutAdmin,
  removeCoverImage,
  saveBlogPost,
  slugify,
  subscribeToAdminAuth,
  uploadCoverImage,
} from '../../services/firebaseBlog';
import { editorSnippets, renderRichText } from '../../utils/renderRichText';

const emptyForm = {
  id: '',
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  coverImage: '',
  coverImagePath: '',
  author: '',
  published: false,
  publishedAt: null,
};

const formatDate = (date) => {
  if (!date) {
    return 'Sem data';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const AdminBlog = () => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [busy, setBusy] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [loadError, setLoadError] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const editorRef = useRef(null);

  const formTitle = useMemo(
    () => (form.id ? 'Editar artigo' : 'Novo artigo'),
    [form.id]
  );

  const loadPosts = async () => {
    try {
      setLoadError('');
      const allPosts = await fetchAllPosts();
      setPosts(allPosts);
    } catch (error) {
      setLoadError(error.message || 'Nao foi possivel carregar os posts.');
    }
  };

  useEffect(() => {
    if (!hasFirebaseConfig) {
      setAuthReady(true);
      return undefined;
    }

    const unsubscribe = subscribeToAdminAuth((nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }

    loadPosts();
  }, [user]);

  const resetForm = () => {
    setForm(emptyForm);
    setStatusMessage('');
  };

  const applySnippet = (snippet) => {
    const textarea = editorRef.current;

    setForm((current) => {
      const currentValue = current.content;

      if (!textarea) {
        return {
          ...current,
          content: currentValue ? `${currentValue}\n\n${snippet}` : snippet,
        };
      }

      const { selectionStart, selectionEnd } = textarea;
      const selectedText = currentValue.slice(selectionStart, selectionEnd);
      const insertedText = selectedText || snippet;
      const nextContent =
        currentValue.slice(0, selectionStart) +
        insertedText +
        currentValue.slice(selectionEnd);

      requestAnimationFrame(() => {
        textarea.focus();
        const cursorPosition = selectionStart + insertedText.length;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
      });

      return {
        ...current,
        content: nextContent,
      };
    });
  };

  const handleLoginChange = ({ target }) => {
    const { name, value } = target;
    setLoginData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleFormChange = ({ target }) => {
    const { name, value, type, checked } = target;

    setForm((current) => {
      const nextValue = type === 'checkbox' ? checked : value;
      const nextForm = {
        ...current,
        [name]: nextValue,
      };

      if (name === 'title' && !current.id && !current.slug) {
        nextForm.slug = slugify(value);
      }

      return nextForm;
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setBusy(true);
    setLoginError('');

    try {
      await loginAdmin(loginData.email, loginData.password);
    } catch (error) {
      setLoginError('Login invalido. Confirme email e senha cadastrados no Firebase Auth.');
    } finally {
      setBusy(false);
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();

    if (!form.title.trim() || !form.content.trim()) {
      setStatusMessage('Preencha titulo e conteudo antes de salvar.');
      return;
    }

    setBusy(true);
    setStatusMessage('');

    try {
      await saveBlogPost(form);
      await loadPosts();
      resetForm();
      setStatusMessage('Artigo salvo com sucesso.');
    } catch (error) {
      setStatusMessage(error.message || 'Nao foi possivel salvar o artigo.');
    } finally {
      setBusy(false);
    }
  };

  const handleEdit = (post) => {
    setForm({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      coverImagePath: post.coverImagePath || '',
      author: post.author,
      published: post.published,
      publishedAt: post.publishedAt,
    });
    setStatusMessage('');
  };

  const handleDelete = async (post) => {
    const confirmed = window.confirm(`Excluir o artigo "${post.title}"?`);

    if (!confirmed) {
      return;
    }

    setBusy(true);
    setStatusMessage('');

    try {
      await deleteBlogPostWithAssets(post);
      await loadPosts();

      if (form.id === post.id) {
        resetForm();
      }

      setStatusMessage('Artigo excluido com sucesso.');
    } catch (error) {
      setStatusMessage(error.message || 'Nao foi possivel excluir o artigo.');
    } finally {
      setBusy(false);
    }
  };

  const handleCoverUpload = async ({ target }) => {
    const [file] = target.files || [];

    if (!file) {
      return;
    }

    setUploadingImage(true);
    setStatusMessage('');

    try {
      const uploaded = await uploadCoverImage(file, form.coverImagePath);
      setForm((current) => ({
        ...current,
        coverImage: uploaded.url,
        coverImagePath: uploaded.path,
      }));
      setStatusMessage('Imagem de capa enviada com sucesso.');
    } catch (error) {
      setStatusMessage(error.message || 'Nao foi possivel enviar a imagem.');
    } finally {
      target.value = '';
      setUploadingImage(false);
    }
  };

  const handleRemoveCover = async () => {
    if (!form.coverImage && !form.coverImagePath) {
      return;
    }

    setUploadingImage(true);
    setStatusMessage('');

    try {
      if (form.coverImagePath) {
        await removeCoverImage(form.coverImagePath);
      }

      setForm((current) => ({
        ...current,
        coverImage: '',
        coverImagePath: '',
      }));
      setStatusMessage('Imagem de capa removida. Salve o artigo para persistir a troca.');
    } catch (error) {
      setStatusMessage(error.message || 'Nao foi possivel remover a imagem.');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleLogout = async () => {
    setBusy(true);
    try {
      await logoutAdmin();
      resetForm();
      setPosts([]);
    } finally {
      setBusy(false);
    }
  };

  if (!hasFirebaseConfig) {
    return (
      <section className="admin-blog-page">
        <div className="admin-blog-panel admin-blog-empty-state">
          <p className="admin-blog-eyebrow">Configuracao pendente</p>
          <h1>Painel admin do blog</h1>
          <p>
            Para ativar o painel, copie as variaveis de .env.example para um
            arquivo .env e preencha as credenciais do seu projeto Firebase.
          </p>
          <p>
            Depois disso, habilite Email/Senha em Authentication e crie a
            colecao blogPosts no Firestore.
          </p>
          <p>Se quiser upload de imagens, ative tambem o Firebase Storage.</p>
        </div>
      </section>
    );
  }

  if (!authReady) {
    return (
      <section className="admin-blog-page">
        <div className="admin-blog-panel admin-blog-empty-state">
          <p>Verificando autenticacao...</p>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="admin-blog-page">
        <div className="admin-blog-auth-card">
          <p className="admin-blog-eyebrow">Area restrita</p>
          <h1>Entrar no painel do blog</h1>
          <p>Use um usuario criado no Firebase Authentication.</p>

          <form className="admin-blog-auth-form" onSubmit={handleLogin}>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="admin@empresa.com"
                autoComplete="email"
                required
              />
            </label>

            <label>
              Senha
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Sua senha"
                autoComplete="current-password"
                required
              />
            </label>

            {loginError ? <p className="admin-blog-error">{loginError}</p> : null}

            <button type="submit" className="admin-blog-primary-button" disabled={busy}>
              {busy ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-blog-page">
      <div className="admin-blog-shell">
        <aside className="admin-blog-sidebar">
          <div>
            <p className="admin-blog-eyebrow">Painel admin</p>
            <h1>Blog com Firebase</h1>
            <p className="admin-blog-muted">
              Logado como {user.email}. Crie, edite e publique artigos sem depender de embeds externos.
            </p>
          </div>

          <div className="admin-blog-sidebar-actions">
            <button type="button" className="admin-blog-secondary-button" onClick={resetForm}>
              Novo artigo
            </button>
            <button
              type="button"
              className="admin-blog-secondary-button"
              onClick={handleLogout}
              disabled={busy}
            >
              Sair
            </button>
          </div>

          <div className="admin-blog-list-header">
            <h2>Posts salvos</h2>
            <span>{posts.length}</span>
          </div>

          {loadError ? <p className="admin-blog-error">{loadError}</p> : null}

          <div className="admin-blog-post-list">
            {posts.map((post) => (
              <article key={post.id} className="admin-blog-post-item">
                <div>
                  <p className="admin-blog-post-status">
                    {post.published ? 'Publicado' : 'Rascunho'}
                  </p>
                  <h3>{post.title}</h3>
                  <p className="admin-blog-muted">/{post.slug}</p>
                  <p className="admin-blog-muted">
                    Atualizado em {formatDate(post.updatedAt || post.createdAt)}
                  </p>
                </div>

                <div className="admin-blog-post-actions">
                  <button type="button" onClick={() => handleEdit(post)}>
                    Editar
                  </button>
                  <button type="button" onClick={() => handleDelete(post)} disabled={busy}>
                    Excluir
                  </button>
                </div>
              </article>
            ))}

            {!posts.length ? (
              <div className="admin-blog-empty-list">
                Nenhum artigo salvo ainda.
              </div>
            ) : null}
          </div>
        </aside>

        <div className="admin-blog-panel">
          <div className="admin-blog-panel-header">
            <div>
              <p className="admin-blog-eyebrow">Editor</p>
              <h2>{formTitle}</h2>
            </div>

            <a href="/blog" target="_blank" rel="noreferrer" className="admin-blog-text-link">
              Ver blog publico
            </a>
          </div>

          <form className="admin-blog-form" onSubmit={handleSave}>
            <label>
              Titulo
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleFormChange}
                placeholder="Ex.: Como usar seu site para gerar mais vendas"
                required
              />
            </label>

            <div className="admin-blog-grid-fields">
              <label>
                Slug
                <input
                  type="text"
                  name="slug"
                  value={form.slug}
                  onChange={handleFormChange}
                  placeholder="como-usar-seu-site-para-gerar-mais-vendas"
                />
              </label>

              <label>
                Autor
                <input
                  type="text"
                  name="author"
                  value={form.author}
                  onChange={handleFormChange}
                  placeholder="Equipe FCBJ"
                />
              </label>
            </div>

            <label>
              Resumo
              <textarea
                name="excerpt"
                value={form.excerpt}
                onChange={handleFormChange}
                placeholder="Se deixar vazio, o sistema gera um resumo a partir do conteudo."
                rows="3"
              />
            </label>

            <label>
              URL da imagem de capa
              <input
                type="url"
                name="coverImage"
                value={form.coverImage}
                onChange={handleFormChange}
                placeholder="https://..."
              />
            </label>

            <div className="admin-blog-cover-upload">
              <label className="admin-blog-file-label">
                Enviar imagem de capa
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverUpload}
                  disabled={uploadingImage || busy}
                />
              </label>

              <div className="admin-blog-cover-actions">
                <button
                  type="button"
                  className="admin-blog-secondary-button"
                  onClick={handleRemoveCover}
                  disabled={uploadingImage || busy || (!form.coverImage && !form.coverImagePath)}
                >
                  Remover capa
                </button>
                <span className="admin-blog-muted">
                  {uploadingImage ? 'Enviando imagem...' : 'JPG, PNG ou WEBP'}
                </span>
              </div>
            </div>

            {form.coverImage ? (
              <div className="admin-blog-cover-preview">
                <img src={form.coverImage} alt={form.title || 'Preview da capa'} />
              </div>
            ) : null}

            <label>
              Conteudo
              <div className="admin-blog-editor-toolbar">
                <button type="button" onClick={() => applySnippet(editorSnippets.heading)}>
                  Titulo
                </button>
                <button type="button" onClick={() => applySnippet(editorSnippets.bold)}>
                  Negrito
                </button>
                <button type="button" onClick={() => applySnippet(editorSnippets.list)}>
                  Lista
                </button>
                <button type="button" onClick={() => applySnippet(editorSnippets.orderedList)}>
                  Passos
                </button>
                <button type="button" onClick={() => applySnippet(editorSnippets.quote)}>
                  Citacao
                </button>
                <button type="button" onClick={() => applySnippet(editorSnippets.link)}>
                  Link
                </button>
              </div>
              <textarea
                ref={editorRef}
                name="content"
                value={form.content}
                onChange={handleFormChange}
                placeholder="Escreva em Markdown simples. Use linhas em branco para separar paragrafos."
                rows="16"
                required
              />
            </label>

            <div className="admin-blog-preview-panel">
              <div className="admin-blog-preview-header">
                <p className="admin-blog-eyebrow">Preview</p>
                <span className="admin-blog-muted">Como o artigo sera exibido no blog</span>
              </div>
              <div className="admin-blog-preview-body">
                {form.content.trim() ? (
                  renderRichText(form.content)
                ) : (
                  <p className="admin-blog-muted">O preview aparece assim que voce comecar a escrever.</p>
                )}
              </div>
            </div>

            <label className="admin-blog-checkbox">
              <input
                type="checkbox"
                name="published"
                checked={form.published}
                onChange={handleFormChange}
              />
              Publicar imediatamente
            </label>

            {statusMessage ? <p className="admin-blog-status">{statusMessage}</p> : null}

            <div className="admin-blog-form-actions">
              <button type="submit" className="admin-blog-primary-button" disabled={busy}>
                {busy ? 'Salvando...' : 'Salvar artigo'}
              </button>
              <button type="button" className="admin-blog-secondary-button" onClick={resetForm}>
                Limpar formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminBlog;
