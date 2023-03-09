import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    user_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 3,
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true, versionKey: false });

export default mongoose.model('User', userSchema);
