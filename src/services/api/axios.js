import axios from "axios";

const api = axios.create({
  baseURL: "https://planixo-backend.onrender.com/api/v1",
  withCredentials: true, // 🔥 REQUIRED for cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// ================= RESPONSE INTERCEPTOR =================
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Network / CORS error
    if (!originalRequest || !error.response) {
      return Promise.reject(error);
    }

    // Prevent infinite loop
    if (
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // 🔁 Refresh access token via cookie
        await api.get("/auth/refresh-token");

        // Retry original request
        return api(originalRequest);
      } catch (err) {
        // ❌ Refresh failed → logout
        window.location.replace("/login");
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;