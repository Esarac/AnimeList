export interface Response<T>{
    code: number
    data: T
    message: string
}

export interface PageResponse extends Response<[]>{
    next: string
}

export interface Meme{
    ID: number
    bottomText: string
    image: string
    name:string
    tags: string
    topText: string
}