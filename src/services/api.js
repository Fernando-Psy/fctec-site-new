import axios from 'axios';
import { createLogger } from '../utils/logger';

const logger = createLogger('API');

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

logger.info('API URL configured:', API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    logger.request(config.method || 'GET', config.url || '', config.data);
    return config;
  },
  (error) => {
    logger.error('Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    logger.response(response.status, response.data);
    return response;
  },
  (error) => {
    logger.error('Response error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    return Promise.reject(error);
  }
);

/**
 * Captura parâmetros UTM da URL atual e armazena em sessionStorage.
 * Chame no carregamento inicial da página (App.jsx).
 */
export const captureUtmParams = () => {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  utmKeys.forEach((key) => {
    const value = params.get(key);
    if (value) sessionStorage.setItem(key, value);
  });
};

const getStoredUtmParams = () => {
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  return keys.reduce((acc, key) => {
    const value = sessionStorage.getItem(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
};

/**
 * Criar lead público (formulários do site principal).
 */
export const createPublicLead = async (leadData) => {
  try {
    const payload = { ...leadData, ...getStoredUtmParams() };
    logger.info('Creating lead:', payload);
    const response = await api.post('/lead-publico/', payload);
    return { success: true, data: response.data };
  } catch (error) {
    logger.error('Error creating lead:', error);
    return {
      success: false,
      error: error.response?.data || {
        message: error.message || 'Erro ao criar lead',
        status: error.response?.status,
      },
    };
  }
};

/**
 * Buscar configuração de uma landing page pública pelo slug.
 */
export const getLandingPage = async (slug) => {
  try {
    const response = await api.get(`/public/landing/${slug}`);
    return { success: true, data: response.data };
  } catch (error) {
    logger.error('Error fetching landing page:', error);
    return {
      success: false,
      status: error.response?.status,
      error: error.response?.data || 'Erro ao buscar landing page',
    };
  }
};

/**
 * Criar lead via landing page pública.
 */
export const createLandingLead = async (slug, leadData) => {
  try {
    const payload = {
      ...leadData,
      ...getStoredUtmParams(),
      page_path: `/lp/${slug}`,
    };
    logger.info('Creating landing lead:', payload);
    const response = await api.post(`/public/landing/${slug}/lead`, payload);
    return { success: true, data: response.data };
  } catch (error) {
    logger.error('Error creating landing lead:', error);
    return {
      success: false,
      error: error.response?.data || 'Erro ao enviar dados',
    };
  }
};

/**
 * Listar serviços disponíveis.
 */
export const getServices = async () => {
  try {
    const response = await api.get('/servicos/');
    return { success: true, data: response.data };
  } catch (error) {
    logger.error('Error fetching services:', error);
    return {
      success: false,
      error: error.response?.data || 'Erro ao buscar serviços',
    };
  }
};

/**
 * Obter um serviço específico.
 */
export const getServiceById = async (serviceId) => {
  try {
    const response = await api.get(`/servicos/${serviceId}/`);
    return { success: true, data: response.data };
  } catch (error) {
    logger.error('Error fetching service by ID:', error);
    return {
      success: false,
      error: error.response?.data || 'Erro ao buscar serviço',
    };
  }
};

/**
 * Criar agendamento público (site → CRM agenda).
 */
export const createAppointment = async (appointmentData) => {
  try {
    const payload = { ...appointmentData, ...getStoredUtmParams() };
    logger.info('Creating appointment:', payload);
    const response = await api.post('/agenda/publico', payload);
    return { success: true, data: response.data };
  } catch (error) {
    logger.error('Error creating appointment:', error);
    return {
      success: false,
      error: error.response?.data || 'Erro ao criar agendamento',
    };
  }
};

export default api;
