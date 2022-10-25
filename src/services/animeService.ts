import axios from "../config/axios";
import { AnimeResponse } from "../models/animes";

const BASE_URL = "https://api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=24"

export const getMemesByPage = async(page: number = 1) =>{
    const {data} = await axios.get<AnimeResponse>(`${BASE_URL}&page=${page}`)

    return data;
}