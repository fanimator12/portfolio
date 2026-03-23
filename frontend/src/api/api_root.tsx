import axios from "axios";

const api = axios.create({ 
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000" 
});

export const getPhotosList = async () => {
  const response = await api.get("/photos");
  return response.data;
};

export const getPhotoByFilename = async (filename: string) => {
  const response = await api.get(`/photos/${filename}`);
  return response.data;
};