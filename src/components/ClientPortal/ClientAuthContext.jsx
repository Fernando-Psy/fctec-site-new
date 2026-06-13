import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getClientePerfil } from '../../services/clientApi';

const ClientAuthContext = createContext(null);

export const ClientAuthProvider = ({ children }) => {
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadPerfil = useCallback(async () => {
    const token = localStorage.getItem('cliente_token');
    if (!token) {
      setLoading(false);
      return;
    }
    const result = await getClientePerfil();
    if (result.success) {
      setCliente(result.data);
    } else {
      localStorage.removeItem('cliente_token');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadPerfil();
  }, [loadPerfil]);

  const login = (token, perfil) => {
    localStorage.setItem('cliente_token', token);
    setCliente(perfil);
  };

  const logout = () => {
    localStorage.removeItem('cliente_token');
    setCliente(null);
  };

  return (
    <ClientAuthContext.Provider value={{ cliente, loading, login, logout }}>
      {children}
    </ClientAuthContext.Provider>
  );
};

export const useClientAuth = () => useContext(ClientAuthContext);
