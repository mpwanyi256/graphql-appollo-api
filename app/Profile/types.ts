import mongoose from "mongoose"

export declare type createUserProfileInput = {
    user_id: mongoose.Types.ObjectId
    first_name: string
    last_name: string
    contact?: string
    role: import('../User/enums').USER_ROLE
}

export declare type UserProfile = {
    _id: mongoose.Types.ObjectId
    user: mongoose.Types.ObjectId // import('../User/types').User
    first_name: string
    last_name: string
    contact?: string
    createdAt: NativeDate
    updatedAt: NativeDate
}
