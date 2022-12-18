import axiosClient from "~/libraries/axiosClient";

export const search = async (options = {}) => {
    let products = await axiosClient.get('search', options);
    return products.data;
}