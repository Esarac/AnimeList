export interface SignInResponse {
    status: string,
    message: string,
    user: UserWithId
}

export interface UserWithId extends User{
    uid: string,
    authProvider: string
}

export interface User {
    fname: string,
    lname: string,
    username: string,
    password: string,
    email: string,
    avatar: string
}

export interface LogInResponse extends SignInResponse {
    accessToken: string,
    expiresIn: number,
}