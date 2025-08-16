import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const optimizarPortafolio = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/optimizar`, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
