import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SoroBlog.css';
import { hasFirebaseConfig } from '../../lib/firebase';
import { fetchPostBySlug, fetchPublishedPosts } from '../../services/firebaseBlog';
import { renderRichText } from '../../utils/renderRichText';

const formatDate = (date) => {
  if (!date) {
    return 'Rascunho';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

const SoroBlog = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const isDetailPage = Boolean(slug);
  const headerText = useMemo(
    () => ({
      eyebrow: isDetailPage ? 'Artigo' : 'Conteudo pratico para negocios locais',
      title: isDetailPage ? selectedPost?.title || 'Carregando artigo' : 'Blog da FCBJ',
      subtitle: isDetailPage
        ? selectedPost?.excerpt ||
          'Insights sobre site, Google e operacao comercial para negocios locais.'
        : 'Guias diretos sobre site, Google, CRM e captacao para ajudar voce a crescer com mais previsibilidade.',
    }),
    [isDetailPage, selectedPost]
  );

  useEffect(() => {
    if (!hasFirebaseConfig) {
      setStatus('error');
      setError(
        'Firebase ainda nao foi configurado neste ambiente. Preencha as variaveis VITE_FIREBASE_* para publicar e listar posts.'
      );
      return undefined;
    }

    let isMounted = true;

    const loadBlog = async () => {
      try {
        setStatus('loading');
        setError('');

        if (slug) {
          const post = await fetchPostBySlug(slug);

          if (!isMounted) {
            return;
          }

          if (!post) {
            setSelectedPost(null);
            setStatus('empty');
            return;
          }

          setSelectedPost(post);
          setStatus('success');
          return;
        }

        const publishedPosts = await fetchPublishedPosts();

        if (!isMounted) {
          return;
        }

        setPosts(publishedPosts);
        setStatus(publishedPosts.length ? 'success' : 'empty');
      } catch (loadError) {
        if (!isMounted) {
          return;
        }

        setError(
          loadError.message || 'Nao foi possivel carregar os artigos agora.'
        );
        setStatus('error');
      }
    };

    loadBlog();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <section id="blog" className="soro-blog-section">
      <div className="soro-blog-container">
        <header className="fctec-blog-page-header">
          <p className="fctec-blog-page-eyebrow">{headerText.eyebrow}</p>
          <h1 className="fctec-blog-page-title">{headerText.title}</h1>
          <p className="fctec-blog-page-subtitle">{headerText.subtitle}</p>
        </header>

        <div className="soro-blog-shell">
          {status === 'loading' ? (
            <div className="soro-blog-placeholder">Carregando conteudo...</div>
          ) : null}

          {status === 'error' ? (
            <div className="soro-blog-placeholder soro-blog-feedback">
              <p>{error}</p>
              <p>
                Configure o Firebase e acesse <Link to="/admin">/admin</Link>{' '}
                para publicar artigos.
              </p>
            </div>
          ) : null}

          {status === 'empty' && isDetailPage ? (
            <div className="soro-blog-placeholder soro-blog-feedback">
              <p>Este artigo nao foi encontrado ou ainda nao foi publicado.</p>
              <Link className="soro-blog-back-link" to="/blog">
                Voltar para a lista de artigos
              </Link>
            </div>
          ) : null}

          {status === 'empty' && !isDetailPage ? (
            <div className="soro-blog-placeholder soro-blog-feedback">
              <p>O blog ainda nao tem artigos publicados.</p>
              <p>Use o painel admin para criar o primeiro post.</p>
            </div>
          ) : null}

          {status === 'success' && isDetailPage && selectedPost ? (
            <article className="soro-blog-post">
              {selectedPost.coverImage ? (
                <img
                  className="soro-blog-post-cover"
                  src={selectedPost.coverImage}
                  alt={selectedPost.title}
                />
              ) : null}

              <div className="soro-blog-post-meta">
                <span>{formatDate(selectedPost.publishedAt || selectedPost.updatedAt)}</span>
                <span>{selectedPost.author || 'Equipe FCBJ'}</span>
              </div>

              <div className="soro-blog-post-content">
                {renderRichText(selectedPost.content)}
              </div>

              <Link className="soro-blog-back-link" to="/blog">
                Voltar para todos os artigos
              </Link>
            </article>
          ) : null}

          {status === 'success' && !isDetailPage ? (
            <div className="soro-blog-grid">
              {posts.map((post) => (
                <article key={post.id} className="soro-blog-card">
                  {post.coverImage ? (
                    <img
                      className="soro-blog-card-image"
                      src={post.coverImage}
                      alt={post.title}
                    />
                  ) : null}

                  <div className="soro-blog-card-body">
                    <div className="soro-blog-card-meta">
                      <span>{formatDate(post.publishedAt || post.updatedAt)}</span>
                      <span>{post.author || 'Equipe FCBJ'}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <Link className="soro-blog-card-link" to={`/blog/${post.slug}`}>
                      Ler artigo
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default SoroBlog;
