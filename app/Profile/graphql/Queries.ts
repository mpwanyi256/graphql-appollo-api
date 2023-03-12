import { AnyObject } from 'mongoose';
import graphqlFields from 'graphql-fields'

import { UserProfile } from '../types'
import profileServices from '../services'

const getProfiles = async (_:any, { input }: AnyObject, context: any, info: any): Promise<UserProfile[]> => {
    const fields = graphqlFields(info)

    const { page, ItemsPerPage } = input

    const userProfiles: UserProfile[] = await profileServices.getAll({ Page: page, ItemsPerPage, fields })
    console.log('userProfiles', userProfiles[0])
    return userProfiles
}

export default {
    getProfiles
}
