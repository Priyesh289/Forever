import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false }) // minimize: false ensures empty objects are saved as {} instead of being removed.
// the option { minimize: false } is used to control how empty objects are saved in MongoDB. 
// if it is true mongoos remove that field because it is a empty object

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;