import { AnyObject } from 'mongoose';
import graphqlFields from 'graphql-fields'

import { UserProfile } from '../types'
import profileServices from '../services'

const getProfiles = async (_:any, { input }: AnyObject, context: any, info: any): Promise<UserProfile[]> => {
    const fields = graphqlFields(info)

    const { page, ItemsPerPage } = input

    const userProfiles: UserProfile[] = await profileServices.getAll({ Page: page, ItemsPerPage, fields })
    console.log('userProfiles', userProfiles)
    // 
    return userProfiles
}

const getProfileById = async (_:any, { id }: AnyObject, ctxt: any, info: any): Promise<UserProfile | undefined> => {
    const fields = graphqlFields(info)

    console.log('getProfile by Id req fields', fields)

    const profile = <UserProfile | undefined>(await profileServices.findById(id, fields));
    console.log('profile', profile)

    return profile
}

export default {
    getProfiles,
    getProfileById
}
