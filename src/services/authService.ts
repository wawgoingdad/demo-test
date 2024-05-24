import { User } from "../models/userSchema";
import axiosInstance from "./axios";

export const loginService = async (credential: User) => {
    const response = await axiosInstance.post("/post", credential);
    return response.data;
}
