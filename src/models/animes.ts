export interface AnimeResponse{
    pagination: Pagination
    data: Anime[]
}

export interface Pagination{
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items:{
        count: number
        total: number
        per_page: number
    }
}

export interface Anime{
    mal_id: number
    title: string
    images:{
        jpg:{
            image_url: string
        }
    }
    episodes: number
    genres:Genre[]
    score: number | null
}

export interface AnimeWithLike extends Anime{
    like: boolean;
}

export interface Genre{
    mal_id: number
    type: string
    name: string
    url: string
}