import axios from 'axios';

// URL base da API - altere conforme necessário
const API_BASE_URL = 'http://localhost:8000/api';

// Criar instância do axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos
});

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

// Funções da API

/**
 * Criar um novo lead público
 * @param {Object} leadData - Dados do lead
 * @param {string} leadData.nome - Nome do lead
 * @param {string} leadData.email - Email do lead
 * @param {string} leadData.telefone - Telefone do lead
 * @param {number} leadData.servico_interessado - ID do serviço
 * @returns {Promise}
 */
export const createPublicLead = async (leadData) => {
  try {
    const response = await api.post('/lead-publico/', leadData);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data || 'Erro ao criar lead',
    };
  }
};

/**
 * Listar serviços disponíveis
 * @returns {Promise}
 */
export const getServices = async () => {
  try {
    const response = await api.get('/servicos/');
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data || 'Erro ao buscar serviços',
    };
  }
};

/**
 * Obter um serviço específico
 * @param {number} serviceId - ID do serviço
 * @returns {Promise}
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