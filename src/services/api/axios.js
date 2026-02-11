import axios from "axios";

// ================= BASE URL =================
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// ================= AXIOS INSTANCE =================
const api = axios.create({
  baseURL: `${BASE_URL}/api/v1`, // ✅ Always attach /api/v1 here
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// ================= RESPONSE INTERCEPTOR =================
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest || !error.response) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await api.get("/auth/refresh-token");
        return api(originalRequest);
      } catch (err) {
        window.location.replace("/login");
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
