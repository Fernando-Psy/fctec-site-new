import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { clientLogin, clientDefinirSenha } from '../../services/clientApi';
import { useClientAuth } from './ClientAuthContext';
import './ClientPortal.css';

const ClientLogin = () => {
  const [searchParams] = useSearchParams();
  const portalToken = searchParams.get('token');
  const isSetupFlow = Boolean(portalToken);

  const [mode, setMode] = useState(isSetupFlow ? 'definir' : 'login');
  const [form, setForm] = useState({ email: '', senha: '', confirmar: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, cliente } = useClientAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (cliente) navigate('/cliente/dashboard');
  }, [cliente, navigate]);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await clientLogin(form.email, form.senha);
    setLoading(false);
    if (result.success) {
      login(result.data.access_token, result.data.cliente);
      navigate('/cliente/dashboard');
    } else {
      setError(result.error);
    }
  };

  const handleDefinirSenha = async (e) => {
    e.preventDefault();
    setError('');
    if (form.senha !== form.confirmar) {
      setError('As senhas não coincidem.');
      return;
    }
    if (form.senha.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    setLoading(true);
    const result = await clientDefinirSenha(portalToken, form.senha);
    setLoading(false);
    if (result.success) {
      login(result.data.access_token, result.data.cliente);
      navigate('/cliente/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="cp-login-bg">
      <div className="cp-login-card">
        <div className="cp-login-logo">
          <span className="cp-login-icon">🔐</span>
          <h1>Área do Cliente</h1>
          <p>
            {mode === 'definir'
              ? 'Crie sua senha para acessar o portal'
              : 'Acompanhe seus projetos e faturas'}
          </p>
        </div>

        {mode === 'login' ? (
          <form onSubmit={handleLogin} className="cp-form">
            <div className="cp-field">
              <label>E-mail</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="cp-field">
              <label>Senha</label>
              <input
                name="senha"
                type="password"
                value={form.senha}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
            {error && <p className="cp-error">{error}</p>}
            <button type="submit" className="cp-btn-primary" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleDefinirSenha} className="cp-form">
            <div className="cp-info-box">
              Você recebeu um link de acesso. Crie sua senha abaixo para continuar.
            </div>
            <div className="cp-field">
              <label>Nova senha</label>
              <input
                name="senha"
                type="password"
                value={form.senha}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                required
              />
            </div>
            <div className="cp-field">
              <label>Confirmar senha</label>
              <input
                name="confirmar"
                type="password"
                value={form.confirmar}
                onChange={handleChange}
                placeholder="Repita a senha"
                required
              />
            </div>
            {error && <p className="cp-error">{error}</p>}
            <button type="submit" className="cp-btn-primary" disabled={loading}>
              {loading ? 'Salvando...' : 'Definir senha e entrar'}
            </button>
          </form>
        )}

        {mode === 'login' && !isSetupFlow && (
          <p className="cp-hint">
            Primeiro acesso? Solicite o link de acesso ao seu consultor.
          </p>
        )}
      </div>
    </div>
  );
};

export default ClientLogin;
