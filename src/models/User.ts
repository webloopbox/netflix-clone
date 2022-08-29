export type RegisterCredentials = {
    email: string,
    password: string,
    comfirmPassword: string
}
export type LoginCredentials = {
    email: string,
    password: string,
}

export type CurrentUserUid = string

export type UserData = {
    email: string
}

export type UserInitState = {
    currentUserUid: CurrentUserUid,
    userData: UserData
}

