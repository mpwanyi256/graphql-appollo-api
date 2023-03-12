import graphqlFields from 'graphql-fields'

import UserService from '../services'

import { User } from '../types'

const getUsers = async (_: any, { input }: any, context: any, info: any): Promise<User[]> => {
    const fields = graphqlFields(info)
    const requestedFileds = Object.keys(fields)

    console.log('requested fields', requestedFileds, fields)

    const { page, ItemsPerPage } = input
    const all: User[] = await UserService.findAllUsers({
        Page: page,
        ItemsPerPage,
        fields: requestedFileds
    })
    return all
}

export default {
    getUsers
}
