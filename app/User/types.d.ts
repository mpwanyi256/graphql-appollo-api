export declare type Person = {
    id: string
    name: string
}

export declare type NewPerson = {
    name: string
}

export declare type getPersonQueryInput = {
    id: string
}

export declare type CreateUserInput = {
    email: string, password: string
}

export declare type FindAllUsersParams = {
    Page: number
    ItemsPerPage: number
    fields: string[]
}
