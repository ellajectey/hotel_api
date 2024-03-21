import { roomModel } from "../model/room.js";
import express from "express";

export const addRoom = async(req,res)=>{
    try {
        const data = req.body
        const addData = await roomModel.create(data)
        res.send(addData)

        console.log(data)
        res.send("new room")

    } catch (error) {
        console.log(error)
    }


}

export const getRoom = async (req,res) => {
    try {
        
        const getAllRooms = await roomModel.find({})
        res.send(getAllRooms)

        console.log(data)
        res.send("all rooms")

    } catch (error) {
        console.log(error)
    }
}
// Find one with the id
export const getOneRoom = async (req,res) => {
    try {
        
        const getOneRoom = await roomModel.findById(req.params.id);
        res.send(getOneRoom)


    } catch (error) {
        console.log(error)
    }
}