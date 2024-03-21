import { hotelModel } from "../model/hotel.js";
import express from "express";

export const addHotel = async (req,res) =>{
try {
    const data = req.body
    const addData = await hotelModel.create(data)
    res.send(addData)

    console.log(data)
    res.send("hotel is getting setup")

}
catch (error) {
    console.log(error)
}

}