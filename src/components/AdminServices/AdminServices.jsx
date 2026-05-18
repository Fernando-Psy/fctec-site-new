import { useEffect, useMemo, useState } from 'react';
import '../AdminBlog/AdminBlog.css';
import './AdminServices.css';
import {
  deleteCategory,
  deleteService,
  fetchAllCategories,
  fetchAllServices,
  saveCategory,
  saveService,
} from '../../services/firebaseServices';
import { uploadToCloudinary, hasCloudinaryConfig } from '../../services/cloudinary';
import { slugify } from '../../services/firebaseBlog';

const emptyCategory = {
  id: '',
  name: '',
  slug: '',
  description: '',
  order: 0,
  active: true,
};

const emptyService = {
  id: '',
  categoryId: '',
  title: '',
  slug: '',
  description: '',
  detailedDescription: '',
  featuresText: '',
  icon: '',
  image: '',
  imagePublicId: '',
  whatsappLink: '',
  order: 0,
  active: true,
};

const serviceToForm = (s) => ({
  ...s,
  featuresText: (s.features || []).join('\n'),
});

const AdminServices = ({ user, onLogout }) => {
  const [panel, setPanel] = useState('categories'); // 'categories' | 'services'
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [catForm, setCatForm] = useState(emptyCategory);
  const [svcForm, setSvcForm] = useState(emptyService);
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState('');
  const [loadError, setLoadError] = useState('');

  const catFormTitle = useMemo(
    () => (catForm.id ? 'Editar categoria' : 'Nova categoria'),
    [catForm.id]
  );
  const svcFormTitle = useMemo(
    () => (svcForm.id ? 'Editar serviço' : 'Novo serviço'),
    [svcForm.id]
  );

  const loadData = async () => {
    try {
      setLoadError('');
      const [cats, svcs] = await Promise.all([
        fetchAllCategories(),
        fetchAllServices(),
      ]);
      setCategories(cats);
      setServices(svcs);
    } catch (err) {
      setLoadError(err.message || 'Não foi possível carregar os dados.');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ── Categorias ──────────────────────────────────────────────────────────

  const resetCatForm = () => {
    setCatForm(emptyCategory);
    setStatus('');
  };

  const handleCatChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setCatForm((prev) => {
      const next = { ...prev, [name]: type === 'checkbox' ? checked : value };
      if (name === 'name' && !prev.id) next.slug = slugify(value);
      return next;
    });
  };

  const handleCatSave = async (e) => {
    e.preventDefault();
    if (!catForm.name.trim()) {
      setStatus('Preencha o nome da categoria.');
      return;
    }
    setBusy(true);
    setStatus('');
    try {
      await saveCategory(catForm);
      await loadData();
      resetCatForm();
      setStatus('Categoria salva com sucesso.');
    } catch (err) {
      setStatus(err.message || 'Não foi possível salvar a categoria.');
    } finally {
      setBusy(false);
    }
  };

  const handleCatEdit = (cat) => {
    setCatForm(cat);
    setStatus('');
  };

  const handleCatDelete = async (cat) => {
    if (!window.confirm(`Excluir a categoria "${cat.name}"? Os serviços vinculados não serão excluídos.`)) return;
    setBusy(true);
    setStatus('');
    try {
      await deleteCategory(cat.id);
      await loadData();
      if (catForm.id === cat.id) resetCatForm();
      setStatus('Categoria excluída.');
    } catch (err) {
      setStatus(err.message || 'Não foi possível excluir a categoria.');
    } finally {
      setBusy(false);
    }
  };

  // ── Serviços ────────────────────────────────────────────────────────────

  const resetSvcForm = () => {
    setSvcForm(emptyService);
    setStatus('');
  };

  const handleSvcChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setSvcForm((prev) => {
      const next = { ...prev, [name]: type === 'checkbox' ? checked : value };
      if (name === 'title' && !prev.id) next.slug = slugify(value);
      return next;
    });
  };

  const handleSvcImageUpload = async ({ target }) => {
    const [file] = target.files || [];
    if (!file) return;
    setUploading(true);
    setStatus('');
    try {
      const { url, publicId } = await uploadToCloudinary(file, 'services');
      setSvcForm((prev) => ({ ...prev, image: url, imagePublicId: publicId }));
      setStatus('Imagem enviada para o Cloudinary.');
    } catch (err) {
      setStatus(err.message || 'Não foi possível enviar a imagem.');
    } finally {
      target.value = '';
      setUploading(false);
    }
  };

  const handleSvcSave = async (e) => {
    e.preventDefault();
    if (!svcForm.title.trim() || !svcForm.categoryId) {
      setStatus('Preencha título e categoria antes de salvar.');
      return;
    }
    setBusy(true);
    setStatus('');
    try {
      const features = svcForm.featuresText
        .split('\n')
        .map((f) => f.trim())
        .filter(Boolean);
      await saveService({ ...svcForm, features });
      await loadData();
      resetSvcForm();
      setStatus('Serviço salvo com sucesso.');
    } catch (err) {
      setStatus(err.message || 'Não foi possível salvar o serviço.');
    } finally {
      setBusy(false);
    }
  };

  const handleSvcEdit = (svc) => {
    setSvcForm(serviceToForm(svc));
    setStatus('');
  };

  const handleSvcDelete = async (svc) => {
    if (!window.confirm(`Excluir o serviço "${svc.title}"?`)) return;
    setBusy(true);
    setStatus('');
    try {
      await deleteService(svc.id);
      await loadData();
      if (svcForm.id === svc.id) resetSvcForm();
      setStatus('Serviço excluído.');
    } catch (err) {
      setStatus(err.message || 'Não foi possível excluir o serviço.');
    } finally {
      setBusy(false);
    }
  };

  const categoryName = (id) =>
    categories.find((c) => c.id === id)?.name || '—';

  // ── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="admin-blog-shell">
      {/* Sidebar */}
      <aside className="admin-blog-sidebar">
        <div>
          <p className="admin-blog-eyebrow">Painel admin</p>
          <h1>Serviços</h1>
          <p className="admin-blog-muted">Logado como {user.email}.</p>
        </div>

        {/* Sub-tabs: Categorias | Serviços */}
        <div className="admin-svc-tabs">
          <button
            className={`admin-svc-tab${panel === 'categories' ? ' active' : ''}`}
            onClick={() => { setPanel('categories'); resetCatForm(); resetSvcForm(); }}
            type="button"
          >
            Categorias
          </button>
          <button
            className={`admin-svc-tab${panel === 'services' ? ' active' : ''}`}
            onClick={() => { setPanel('services'); resetCatForm(); resetSvcForm(); }}
            type="button"
          >
            Serviços
          </button>
        </div>

        {/* Botão novo item */}
        <div className="admin-blog-sidebar-actions">
          <button
            type="button"
            className="admin-blog-secondary-button"
            onClick={panel === 'categories' ? resetCatForm : resetSvcForm}
          >
            {panel === 'categories' ? 'Nova categoria' : 'Novo serviço'}
          </button>
          <button
            type="button"
            className="admin-blog-secondary-button"
            onClick={onLogout}
            disabled={busy}
          >
            Sair
          </button>
        </div>

        {/* Lista */}
        <div className="admin-blog-list-header">
          <h2>{panel === 'categories' ? 'Categorias' : 'Serviços'}</h2>
          <span>{panel === 'categories' ? categories.length : services.length}</span>
        </div>

        {loadError && <p className="admin-blog-error">{loadError}</p>}

        <div className="admin-blog-post-list">
          {panel === 'categories' &&
            categories.map((cat) => (
              <article key={cat.id} className="admin-blog-post-item">
                <div>
                  <p className="admin-blog-post-status">
                    {cat.active ? 'Ativo' : 'Inativo'}
                  </p>
                  <h3>{cat.name}</h3>
                  <p className="admin-blog-muted">/{cat.slug} · ordem {cat.order}</p>
                </div>
                <div className="admin-blog-post-actions">
                  <button type="button" onClick={() => handleCatEdit(cat)}>
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCatDelete(cat)}
                    disabled={busy}
                  >
                    Excluir
                  </button>
                </div>
              </article>
            ))}

          {panel === 'services' &&
            services.map((svc) => (
              <article key={svc.id} className="admin-blog-post-item">
                <div>
                  <p className="admin-blog-post-status">
                    {svc.active ? 'Ativo' : 'Inativo'}
                  </p>
                  <h3>{svc.title}</h3>
                  <p className="admin-blog-muted">
                    {categoryName(svc.categoryId)} · ordem {svc.order}
                  </p>
                </div>
                <div className="admin-blog-post-actions">
                  <button type="button" onClick={() => handleSvcEdit(svc)}>
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSvcDelete(svc)}
                    disabled={busy}
                  >
                    Excluir
                  </button>
                </div>
              </article>
            ))}

          {panel === 'categories' && !categories.length && (
            <div className="admin-blog-empty-list">Nenhuma categoria cadastrada.</div>
          )}
          {panel === 'services' && !services.length && (
            <div className="admin-blog-empty-list">Nenhum serviço cadastrado.</div>
          )}
        </div>
      </aside>

      {/* Painel de edição */}
      <div className="admin-blog-panel">
        <div className="admin-blog-panel-header">
          <div>
            <p className="admin-blog-eyebrow">Editor</p>
            <h2>{panel === 'categories' ? catFormTitle : svcFormTitle}</h2>
          </div>
          <a href="/#products" target="_blank" rel="noreferrer" className="admin-blog-text-link">
            Ver serviços no site
          </a>
        </div>

        {/* ── Formulário de Categoria ── */}
        {panel === 'categories' && (
          <form className="admin-blog-form" onSubmit={handleCatSave}>
            <label>
              Nome
              <input
                type="text"
                name="name"
                value={catForm.name}
                onChange={handleCatChange}
                placeholder="Ex.: Desenvolvimento Web"
                required
              />
            </label>

            <div className="admin-blog-grid-fields">
              <label>
                Slug
                <input
                  type="text"
                  name="slug"
                  value={catForm.slug}
                  onChange={handleCatChange}
                  placeholder="desenvolvimento-web"
                />
              </label>
              <label>
                Ordem
                <input
                  type="number"
                  name="order"
                  value={catForm.order}
                  onChange={handleCatChange}
                  min="0"
                />
              </label>
            </div>

            <label>
              Descrição (opcional)
              <textarea
                name="description"
                value={catForm.description}
                onChange={handleCatChange}
                rows="3"
                placeholder="Breve descrição da categoria..."
              />
            </label>

            <label className="admin-blog-checkbox">
              <input
                type="checkbox"
                name="active"
                checked={catForm.active}
                onChange={handleCatChange}
              />
              Categoria ativa (visível no site)
            </label>

            {status && (
              <p className={status.includes('sucesso') ? 'admin-svc-success' : 'admin-blog-error'}>
                {status}
              </p>
            )}

            <div className="admin-blog-form-actions">
              <button
                type="submit"
                className="admin-blog-primary-button"
                disabled={busy}
              >
                {busy ? 'Salvando...' : 'Salvar categoria'}
              </button>
              {catForm.id && (
                <button
                  type="button"
                  className="admin-blog-secondary-button"
                  onClick={resetCatForm}
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        )}

        {/* ── Formulário de Serviço ── */}
        {panel === 'services' && (
          <form className="admin-blog-form" onSubmit={handleSvcSave}>
            <div className="admin-blog-grid-fields">
              <label>
                Categoria *
                <select
                  name="categoryId"
                  value={svcForm.categoryId}
                  onChange={handleSvcChange}
                  required
                  className="admin-svc-select"
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Ícone (emoji)
                <input
                  type="text"
                  name="icon"
                  value={svcForm.icon}
                  onChange={handleSvcChange}
                  placeholder="🌐"
                  maxLength="4"
                />
              </label>
            </div>

            <label>
              Título *
              <input
                type="text"
                name="title"
                value={svcForm.title}
                onChange={handleSvcChange}
                placeholder="Ex.: Site Institucional com CMS"
                required
              />
            </label>

            <div className="admin-blog-grid-fields">
              <label>
                Slug
                <input
                  type="text"
                  name="slug"
                  value={svcForm.slug}
                  onChange={handleSvcChange}
                  placeholder="site-institucional-com-cms"
                />
              </label>
              <label>
                Ordem
                <input
                  type="number"
                  name="order"
                  value={svcForm.order}
                  onChange={handleSvcChange}
                  min="0"
                />
              </label>
            </div>

            <label>
              Descrição curta (card)
              <textarea
                name="description"
                value={svcForm.description}
                onChange={handleSvcChange}
                rows="2"
                placeholder="Texto exibido no card de serviço..."
              />
            </label>

            <label>
              Descrição detalhada (página do serviço)
              <textarea
                name="detailedDescription"
                value={svcForm.detailedDescription}
                onChange={handleSvcChange}
                rows="4"
                placeholder="Texto completo exibido na página de detalhes..."
              />
            </label>

            <label>
              Recursos / Features
              <span className="admin-svc-hint">Um item por linha</span>
              <textarea
                name="featuresText"
                value={svcForm.featuresText}
                onChange={handleSvcChange}
                rows="6"
                placeholder={"Design responsivo\nOtimização SEO\nFormulário de contato"}
              />
            </label>

            <label>
              Link WhatsApp
              <input
                type="url"
                name="whatsappLink"
                value={svcForm.whatsappLink}
                onChange={handleSvcChange}
                placeholder="https://wa.me/55219..."
              />
            </label>

            {/* Imagem via Cloudinary */}
            <div className="admin-blog-cover-upload">
              <p style={{ margin: 0, fontWeight: 600, color: '#cbd5e1' }}>
                Imagem do serviço
              </p>

              {/* Botão de upload — sempre visível */}
              <div className="admin-blog-cover-actions" style={{ marginTop: '12px' }}>
                <label
                  className={`admin-blog-secondary-button${!hasCloudinaryConfig || uploading ? ' admin-svc-btn-disabled' : ''}`}
                  style={{ cursor: hasCloudinaryConfig && !uploading ? 'pointer' : 'not-allowed', display: 'inline-block' }}
                  title={!hasCloudinaryConfig ? 'Configure VITE_CLOUDINARY_CLOUD_NAME e VITE_CLOUDINARY_UPLOAD_PRESET no .env' : ''}
                >
                  {uploading ? 'Enviando…' : '📁 Selecionar do computador'}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSvcImageUpload}
                    disabled={!hasCloudinaryConfig || uploading}
                    style={{ display: 'none' }}
                  />
                </label>
                {svcForm.image && (
                  <button
                    type="button"
                    className="admin-blog-secondary-button"
                    onClick={() => setSvcForm((p) => ({ ...p, image: '', imagePublicId: '' }))}
                  >
                    Remover
                  </button>
                )}
              </div>

              {!hasCloudinaryConfig && (
                <p className="admin-svc-cloudinary-notice">
                  ⚙️ Para habilitar o upload, adicione no <code>.env</code>:<br />
                  <code>VITE_CLOUDINARY_CLOUD_NAME</code> e <code>VITE_CLOUDINARY_UPLOAD_PRESET</code>
                </p>
              )}

              {svcForm.image && (
                <div className="admin-blog-cover-preview" style={{ marginTop: '12px' }}>
                  <img src={svcForm.image} alt="Preview do serviço" />
                </div>
              )}

              <label style={{ marginTop: '12px' }}>
                Ou cole uma URL diretamente
                <input
                  type="url"
                  name="image"
                  value={svcForm.image}
                  onChange={handleSvcChange}
                  placeholder="https://res.cloudinary.com/..."
                />
              </label>
            </div>

            <label className="admin-blog-checkbox">
              <input
                type="checkbox"
                name="active"
                checked={svcForm.active}
                onChange={handleSvcChange}
              />
              Serviço ativo (visível no site)
            </label>

            {status && (
              <p className={status.includes('sucesso') ? 'admin-svc-success' : 'admin-blog-error'}>
                {status}
              </p>
            )}

            <div className="admin-blog-form-actions">
              <button
                type="submit"
                className="admin-blog-primary-button"
                disabled={busy || uploading}
              >
                {busy ? 'Salvando...' : 'Salvar serviço'}
              </button>
              {svcForm.id && (
                <button
                  type="button"
                  className="admin-blog-secondary-button"
                  onClick={resetSvcForm}
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminServices;
