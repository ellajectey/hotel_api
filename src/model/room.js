import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const schema = mongoose.Schema

const roomSchema = new schema({

roomnumber: {type: String, required: true},
roomcapacity: {type: String, required: true},
location: {type: String, required: true},
price: {type:String, required: true},
rating: {type: Number},

image:{
    name:{type:String, required:true},
    description:{type:String, required:true}
}


})

export const roomModel = mongoose.model("Room",roomSchema)