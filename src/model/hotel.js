import mongoose from "mongoose";

const schema = mongoose.Schema

const HotelSchema = new schema({
    

    hotelname: {type: String, required: true},
    email: {type:String, required: true, lowercase: true},
    phone: {type:String, required:true},
    location: {type:String, required: true},



})
export const hotelModel = mongoose.model("Hotel", HotelSchema)

