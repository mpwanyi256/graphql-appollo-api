import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    first_name: {
        type: String,
        default: '',
    },
    last_name: {
        type: String,
        default: '',
    },
    contact: {
        type: String,
        default: ''
    }
}, { timestamps: true, versionKey: false });

export default mongoose.model('UserProfile', userProfileSchema);
