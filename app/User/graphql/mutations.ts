import { CreateUserInput, User } from "../types"
import { UserProfile } from '../../Profile/types'

import UserServices from '../services'
import ProfileServices from '../../Profile/services'

const createUser = async (_:any, args: CreateUserInput): Promise<User> => {
    console.log('args', args)
    const { email, password, role, first_name, last_name, contact } = args.input

    // Check if user exists
    const user = await UserServices.findAUser({ email });

    if (user) {
        throw new Error('Sorry user already exists')
    }

    console.log('Creating user....')
    const newUser: User = await UserServices.addUser({
        email,
        password
    });

    console.log('created user', newUser);
    const createUserProfile: UserProfile = await ProfileServices.create({
        user_id: newUser._id,
        first_name,
        last_name,
        contact,
        role
    })
    console.log('created user profile', createUserProfile)

    return newUser
}

export default {
    createUser
}
