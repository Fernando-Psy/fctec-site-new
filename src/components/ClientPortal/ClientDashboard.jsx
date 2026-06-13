import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getClienteProjetos,
  getClienteFaturas,
  getClienteBriefings,
} from '../../services/clientApi';
import { useClientAuth } from './ClientAuthContext';
import './ClientPortal.css';

const STATUS_LABELS = {
  NOVO: 'Novo',
  EM_ANDAMENTO: 'Em andamento',
  CONCLUIDO: 'Concluído',
  CANCELADO: 'Cancelado',
  AGUARDANDO: 'Aguardando',
  PAGO: 'Pago',
  PENDENTE: 'Pendente',
  ATRASADO: 'Atrasado',
};

const statusClass = (s) => {
  const map = {
    CONCLUIDO: 'cp-badge-green',
    PAGO: 'cp-badge-green',
    EM_ANDAMENTO: 'cp-badge-blue',
    NOVO: 'cp-badge-blue',
    AGUARDANDO: 'cp-badge-yellow',
    PENDENTE: 'cp-badge-yellow',
    ATRASADO: 'cp-badge-red',
    CANCELADO: 'cp-badge-gray',
  };
  return map[s] || 'cp-badge-gray';
};

const fmt = (val) =>
  val != null
    ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val)
    : '—';

const fmtDate = (d) =>
  d ? new Date(d).toLocaleDateString('pt-BR') : '—';

const ClientDashboard = () => {
  const { cliente, logout } = useClientAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState('geral');
  const [projetos, setProjetos] = useState([]);
  const [faturas, setFaturas] = useState([]);
  const [briefings, setBriefings] = useState([]);
  const [loaded, setLoaded] = useState({ projetos: false, faturas: false, briefings: false });

  useEffect(() => {
    if (!cliente) navigate('/cliente');
  }, [cliente, navigate]);

  useEffect(() => {
    if (tab === 'projetos' && !loaded.projetos) {
      getClienteProjetos().then((r) => {
        if (r.success) setProjetos(r.data);
        setLoaded((p) => ({ ...p, projetos: true }));
      });
    }
    if (tab === 'faturas' && !loaded.faturas) {
      getClienteFaturas().then((r) => {
        if (r.success) setFaturas(r.data);
        setLoaded((p) => ({ ...p, faturas: true }));
      });
    }
    if (tab === 'briefings' && !loaded.briefings) {
      getClienteBriefings().then((r) => {
        if (r.success) setBriefings(r.data);
        setLoaded((p) => ({ ...p, briefings: true }));
      });
    }
    if (tab === 'geral' && !loaded.projetos) {
      getClienteProjetos().then((r) => {
        if (r.success) setProjetos(r.data);
        setLoaded((p) => ({ ...p, projetos: true }));
      });
      getClienteFaturas().then((r) => {
        if (r.success) setFaturas(r.data);
        setLoaded((p) => ({ ...p, faturas: true }));
      });
    }
  }, [tab]);

  const handleLogout = () => {
    logout();
    navigate('/cliente');
  };

  if (!cliente) return null;

  const pendentes = faturas.filter((f) => ['PENDENTE', 'ATRASADO'].includes(f.status));
  const totalPendente = pendentes.reduce((s, f) => s + (f.valor || 0), 0);

  const tabs = [
    { id: 'geral', label: 'Visão Geral' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'faturas', label: 'Faturas' },
    { id: 'briefings', label: 'Briefings' },
  ];

  return (
    <div className="cp-dashboard">
      <header className="cp-header">
        <div className="cp-header-inner">
          <div className="cp-header-brand">
            <span className="cp-header-icon">🏢</span>
            <span>Portal do Cliente</span>
          </div>
          <div className="cp-header-user">
            <span className="cp-header-name">{cliente.nome}</span>
            <button onClick={handleLogout} className="cp-btn-logout">
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="cp-content">
        <div className="cp-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`cp-tab ${tab === t.id ? 'cp-tab-active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'geral' && (
          <div className="cp-tab-content">
            <h2 className="cp-section-title">Olá, {cliente.nome.split(' ')[0]}!</h2>
            <div className="cp-cards-row">
              <div className="cp-stat-card">
                <div className="cp-stat-value">{projetos.length}</div>
                <div className="cp-stat-label">Projetos</div>
              </div>
              <div className="cp-stat-card">
                <div className="cp-stat-value">{faturas.length}</div>
                <div className="cp-stat-label">Faturas</div>
              </div>
              <div className="cp-stat-card cp-stat-card-alert">
                <div className="cp-stat-value">{fmt(totalPendente)}</div>
                <div className="cp-stat-label">Pendente</div>
              </div>
            </div>

            {pendentes.length > 0 && (
              <div className="cp-alert-box">
                <strong>⚠️ Atenção:</strong> Você tem {pendentes.length} fatura(s) pendente(s).{' '}
                <button className="cp-link-btn" onClick={() => setTab('faturas')}>
                  Ver faturas
                </button>
              </div>
            )}

            {projetos.length > 0 && (
              <>
                <h3 className="cp-subsection">Projetos recentes</h3>
                <div className="cp-list">
                  {projetos.slice(0, 3).map((p) => (
                    <div key={p.id} className="cp-list-item">
                      <div>
                        <div className="cp-item-title">{p.nome || `Projeto #${p.id}`}</div>
                        <div className="cp-item-sub">{fmtDate(p.created_at)}</div>
                      </div>
                      <span className={`cp-badge ${statusClass(p.status)}`}>
                        {STATUS_LABELS[p.status] || p.status}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {tab === 'projetos' && (
          <div className="cp-tab-content">
            <h2 className="cp-section-title">Meus Projetos</h2>
            {!loaded.projetos ? (
              <div className="cp-loading">Carregando...</div>
            ) : projetos.length === 0 ? (
              <div className="cp-empty">Nenhum projeto encontrado.</div>
            ) : (
              <div className="cp-list">
                {projetos.map((p) => (
                  <div key={p.id} className="cp-list-item cp-list-item-full">
                    <div className="cp-item-body">
                      <div className="cp-item-title">{p.nome || `Projeto #${p.id}`}</div>
                      {p.descricao && <div className="cp-item-desc">{p.descricao}</div>}
                      <div className="cp-item-meta">
                        <span>Início: {fmtDate(p.data_inicio)}</span>
                        {p.data_entrega && <span>Entrega: {fmtDate(p.data_entrega)}</span>}
                      </div>
                    </div>
                    <span className={`cp-badge ${statusClass(p.status)}`}>
                      {STATUS_LABELS[p.status] || p.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'faturas' && (
          <div className="cp-tab-content">
            <h2 className="cp-section-title">Minhas Faturas</h2>
            {!loaded.faturas ? (
              <div className="cp-loading">Carregando...</div>
            ) : faturas.length === 0 ? (
              <div className="cp-empty">Nenhuma fatura encontrada.</div>
            ) : (
              <div className="cp-list">
                {faturas.map((f) => (
                  <div key={f.id} className="cp-list-item">
                    <div>
                      <div className="cp-item-title">{f.descricao || `Fatura #${f.id}`}</div>
                      <div className="cp-item-meta">
                        <span>Vencimento: {fmtDate(f.data_vencimento)}</span>
                      </div>
                    </div>
                    <div className="cp-item-right">
                      <div className="cp-item-value">{fmt(f.valor)}</div>
                      <span className={`cp-badge ${statusClass(f.status)}`}>
                        {STATUS_LABELS[f.status] || f.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'briefings' && (
          <div className="cp-tab-content">
            <h2 className="cp-section-title">Meus Briefings</h2>
            {!loaded.briefings ? (
              <div className="cp-loading">Carregando...</div>
            ) : briefings.length === 0 ? (
              <div className="cp-empty">Nenhum briefing encontrado.</div>
            ) : (
              <div className="cp-list">
                {briefings.map((b) => (
                  <div key={b.id} className="cp-list-item cp-list-item-full">
                    <div className="cp-item-body">
                      <div className="cp-item-title">{b.titulo || `Briefing #${b.id}`}</div>
                      {b.descricao && (
                        <div className="cp-item-desc">{b.descricao}</div>
                      )}
                      <div className="cp-item-meta">
                        <span>Data: {fmtDate(b.created_at)}</span>
                      </div>
                    </div>
                    <span className={`cp-badge ${statusClass(b.status)}`}>
                      {STATUS_LABELS[b.status] || b.status || '—'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;
