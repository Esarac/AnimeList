import axios from "../config/axios";
import { PageResponse } from "../models/memes";

const BASE_URL = "http://alpha-meme-maker.herokuapp.com"

const headers = {
    'Content-Type': 'text/plain'
};

export const getMemesByPage = async(page: number) =>{
    const {data} = await axios.get<PageResponse>(`${BASE_URL}/${page}`,{headers})

    return data;
}

