import axios from "axios";

const instance = axios.create({
  baseURL: process.env.TARO_APP_API_BASE_URL, // 环境变量
  timeout: 100000,
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response?.status === 401) {
      // 处理未登录或 token 过期
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default instance;
