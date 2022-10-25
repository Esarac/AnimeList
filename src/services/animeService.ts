import axios from "../config/axios";
import { AnimesResponse } from "../models/animes";

const BASE_URL = "https://api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=24"

export const getAnimesByPage = async(page: number = 1) =>{
    const query = `order_by=score&sort=desc&limit=24&page=${page}`;
    const {data} = await axios.get<AnimesResponse>(`${BASE_URL}?${query}`)

    return data;
}