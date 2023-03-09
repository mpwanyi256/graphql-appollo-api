export enum USER_ROLE {
    admin= 1,
    user= 2,
    super= 3
}

export type User = {
    user_name: String
    email: String
    password: String
    role: USER_ROLE
    is_active: Boolean
}
