import axios from 'axios';

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

const clientApi = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

const getToken = () => localStorage.getItem('cliente_token');

clientApi.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const clientLogin = async (email, senha) => {
  try {
    const resp = await clientApi.post('/cliente/auth/login', { email, senha });
    return { success: true, data: resp.data };
  } catch (err) {
    return {
      success: false,
      error: err.response?.data?.detail || 'Erro ao fazer login',
    };
  }
};

export const clientDefinirSenha = async (token, senha) => {
  try {
    const resp = await clientApi.post('/cliente/auth/definir-senha', {
      portal_token: token,
      senha,
    });
    return { success: true, data: resp.data };
  } catch (err) {
    return {
      success: false,
      error: err.response?.data?.detail || 'Erro ao definir senha',
    };
  }
};

export const getClientePerfil = async () => {
  try {
    const resp = await clientApi.get('/cliente/perfil');
    return { success: true, data: resp.data };
  } catch (err) {
    return { success: false, error: err.response?.status };
  }
};

export const getClienteProjetos = async () => {
  try {
    const resp = await clientApi.get('/cliente/projetos');
    return { success: true, data: resp.data };
  } catch (err) {
    return { success: false, error: err.response?.status };
  }
};

export const getClienteFaturas = async () => {
  try {
    const resp = await clientApi.get('/cliente/faturas');
    return { success: true, data: resp.data };
  } catch (err) {
    return { success: false, error: err.response?.status };
  }
};

export const getClienteBriefings = async () => {
  try {
    const resp = await clientApi.get('/cliente/briefings');
    return { success: true, data: resp.data };
  } catch (err) {
    return { success: false, error: err.response?.status };
  }
};
