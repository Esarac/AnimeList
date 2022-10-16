export interface loginResponse {
    status: string,
    message: string,
    user: UserWithId
}

export interface UserWithId extends User{
    id: number
}

export interface User {
    fname: string,
    lname: string,
    username: string,
    password: string,
    email: string,
    avatar: string
}