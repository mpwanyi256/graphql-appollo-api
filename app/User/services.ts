import { AnyObject } from 'mongoose'
import User from '../models/User'

import { addUserInput, FindAllUsersParams } from './types'

/**
 * Runs a query on a user table to return an existing user depending on the query
 * @param {*} params Filter Object eg. { email: 'user@website.com' }
 * @returns 
 */
const findAUser = (params: AnyObject) => {
    return User.findOne(params)
}

/**
 * Find a user by ID
 * @param {*} id User ID
 * @returns An existing user or null
 */
const findUserById = (id: String) => {
    return User.findById(id)
}

/**
 * Creates a new User
 * @param {*} email User email address
 * @param {*} password User password
 * @returns Created user object
 */
const addUser = ({ email, password }: addUserInput) => {
    const user = new User({
        email,
        password
    });
    return user.save()
}

const findAllUsers = ({ Page, ItemsPerPage, fields }: FindAllUsersParams) => {
    const itemsToSkip = Math.abs((<any>Page - 1) * <any>ItemsPerPage)

    return User
        .find()
        .select(fields)
        .sort({ createdAt: 'desc', first_name: 'asc' })
        .skip(itemsToSkip)
        .limit(ItemsPerPage)
}

export default {
    findAUser,
    addUser,
    findUserById,
    findAllUsers
}
