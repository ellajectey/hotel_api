import mongoose from "mongoose";


const schema = mongoose.Schema

const UserSchema =new schema ({

    firstname: {type: String, required: true},
    lastname: {type:String, required: true},
    // email: {type:String,required: true},
    // phone: {type:String,required:true},
    password: {type:String,required:true,min:6}



})
export const userModel = mongoose.model("User", UserSchema)