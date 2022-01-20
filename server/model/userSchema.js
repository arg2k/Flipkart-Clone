import pkg from "mongoose";
const { mongoose } = pkg;

const userSchema = new pkg.Schema({
    mobileNumber : {
        required: true,
        type: String,
        trim: true,
        min: 10,
        max: 10,
    },
    password : {
        required: true,
        type: String,
        trim: true,
        min: 6,
        max: 15,
    }
});

const user = pkg.model('user',userSchema);

export default user;