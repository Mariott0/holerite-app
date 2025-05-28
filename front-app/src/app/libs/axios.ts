// libs/axios.ts
import axios from 'axios';

// IP da sua máquina na rede
const IP_LOCAL = '192.168.3.104';

export const api = axios.create({
  baseURL: `http://${IP_LOCAL}:3000`, // ajuste conforme sua API
});

api.interceptors.request.use(
  (config) => {
    // Exemplo fixo de usuário (pode ser um token ou id real)
    const loggedUser = 91;
    config.data = {
      ...config.data,
      userId: loggedUser, // adiciona userId em todas as requisições POST, PUT, DELETE
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
