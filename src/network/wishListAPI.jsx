import { axiosInstance } from "./axiosConfig";

export const getProductDetails = (id) => {
  return axiosInstance.get(`/shop/${id}`);
};

export const getWishList = () => {
  return axiosInstance.get(`/wishlist`);
};

export const addToWishList = (product) => {
    return axiosInstance.put(`/wishlist`,  { wishlist: product._id});
};



