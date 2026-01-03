import axios from 'axios';

// URL base da API - usa variável de ambiente
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

console.log('🔌 API URL configurada:', API_BASE_URL); // Debug

// Criar instância do axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Interceptor para debug
api.interceptors.request.use(
  (config) => {
    console.log('📤 Enviando requisição:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('❌ Erro na requisição:', error);
    return Promise.reject(error);
  }
);

// Interceptor de resposta
api.interceptors.response.use(
  (response) => {
    console.log('✅ Resposta recebida:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Erro na resposta:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);

/**
 * Criar um novo lead público
 */
export const createPublicLead = async (leadData) => {
  try {
    console.log('🚀 Criando lead:', leadData);
    const response = await api.post('/lead-publico/', leadData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('💥 Erro ao criar lead:', error);

    // Tratamento de erro detalhado
    const errorDetail = {
      success: false,
      error: error.response?.data || {
        message: error.message || 'Erro ao criar lead',
        status: error.response?.status
      }
    };

    return errorDetail;
  }
};

/**
 * Listar serviços disponíveis
 */
export const getServices = async () => {
  try {
    const response = await api.get('/servicos/');
    return { success: true, data: response.data };
  } catch (error) {
    console.error('💥 Erro ao buscar serviços:', error);
    return {
      success: false,
      error: error.response?.data || 'Erro ao buscar serviços',
    };
  }
};

/**
 * Obter um serviço específico
 */
export const getServiceById = async (serviceId) => {
  try {
    const response = await api.get(`/servicos/${serviceId}/`);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data || 'Erro ao buscar serviço',
    };
  }
};

export default api;