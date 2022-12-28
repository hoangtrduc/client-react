import axiosClient from "~/libraries/axiosClient";

export const searchGet = async () => {
    const response = await axiosClient.get('/products')
    return response.data;
}