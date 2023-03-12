import mongoose from 'mongoose'

export declare type User = {
    _id: mongoose.Types.ObjectId
    email: string
    password: string
    role: import('./enums').USER_ROLE
    is_active: boolean
    // createdAt: string
    // updatedAt: string
}

type createUser = {
    email: string
    password: string
    role: USER_ROLE
    first_name: string
    last_name: string
    contact: string
}

export declare type CreateUserInput = {
    input: createUser
}

export declare type addUserInput = {
    email: string
    password: string
}

export declare type FindAllUsersParams = {
    Page: number
    ItemsPerPage: number
    fields: string[]
}
