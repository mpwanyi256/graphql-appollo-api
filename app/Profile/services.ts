import { AnyObject } from 'mongoose';
import UserProfile from '../models/Profile'
import { createUserProfileInput } from './types'

// User Profile
const create = ({ user_id, first_name, last_name, contact, role}: createUserProfileInput) => {
    const userProfile = new UserProfile({
        user: user_id,
        first_name,
        last_name,
        contact,
        role
    });

    return userProfile.save();
};

const findById = (id: String, fields: AnyObject) => {
    const modelKeys = Object.keys(fields);
    const userFields = fields.user ? Object.keys(fields.user) : []

    if (userFields.length) {
        return UserProfile
            .findById(id)
            .select(modelKeys)
            .populate('user', userFields.join(' '));
    }

    return UserProfile
            .findById(id)
            .select(modelKeys);
}

const find = (params: AnyObject) => {
    return UserProfile
        .findOne(params)
        .populate('user', '_id username email role');
}

const deleteProfile = (id: String) => {
    return UserProfile.findByIdAndDelete(id)
}

const getAll = ({ Page, ItemsPerPage, fields }: { Page: number, ItemsPerPage: number, fields: AnyObject }) => {
    const itemsToSkip = Math.abs((<any>Page - 1) * <any>ItemsPerPage)

    const modelFields = Object.keys(fields)
    console.log('modelFields', modelFields)

    // Child keys
    const userFields = fields.user ? Object.keys(fields.user) : []
    
    if (userFields.length) {
        return UserProfile
            .find()
            .select(modelFields)
            .populate('user', userFields.join(' '))
            .sort({ createdAt: 'desc' })
            .skip(itemsToSkip)
            .limit(ItemsPerPage)
    }

    return UserProfile
            .find()
            .select(modelFields)
            .sort({ createdAt: 'desc' })
            .skip(itemsToSkip)
            .limit(ItemsPerPage)
}

const deleteAll = () => {
    UserProfile.deleteMany({});
}

export default {
    create,
    find,
    findById,
    getAll,
    deleteProfile,
    deleteAll
}