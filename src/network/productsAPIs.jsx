import { axiosInstance } from "./axiosConfig";

export const getProductDetails = (id) => {
  return axiosInstance.get(`/products/${id}`);
};

export const getProduct = () => {
  return axiosInstance.get(`/products`);
};
