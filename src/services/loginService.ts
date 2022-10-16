import axios from "../config/axios";
import { loginResponse, User } from "../models/login";

const BASE_URL = "https://www.mecallapi.com/api"

export const logIn = async(username: string, password: string) =>{
    const {data} = await axios.post(`${BASE_URL}/login`,
    {
        "username": "Voodlyc567",
        "password": "Voodlyc567"
    })

    return data;
}

export const signIn = async(user: User) => {
    const {data} = await axios.post<loginResponse>(`${BASE_URL}/users/create`, user)

    return data;
}
