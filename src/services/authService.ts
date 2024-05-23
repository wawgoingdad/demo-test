import { User } from "../models/userSchema";
import axios from "./axios";

export const loginService = async (credential: User) => {
    try {
        const response = await axios.post("/post", credential);
        return response.data;
    } catch (error) {
        throw error;
    }
}
