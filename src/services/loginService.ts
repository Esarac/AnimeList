import axios from "../config/axios";
import { LogInResponse, SignInResponse, User } from "../models/login";

const BASE_URL = "https://www.mecallapi.com/api"

export const logIn = async(username: string, password: string) =>{
    const {data} = await axios.post<LogInResponse>(`${BASE_URL}/login`,
    {
        "username": username,
        "password": password,
        "expiresIn":70000
    })

    return data;
}

export const signIn = async(user: User) => {
    const {data} = await axios.post<SignInResponse>(`${BASE_URL}/users/create`, user)
    console.log(data)
    return data;
}
