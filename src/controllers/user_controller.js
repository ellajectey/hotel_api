import { userModel } from "../model/users.js";
import express from "express";

export const addUser = async (req,res) => {
    try {
        const data = req.body
        const addData = await userModel.create(data)
        res.send(addData)

        console.log(data)
        res.send("hello user")

    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async (req,res) => {
    try {
        
        const getAllUsers = await userModel.find({})
        res.send(getAllUsers)

        console.log(data)
        res.send("all users")

    } catch (error) {
        console.log(error)
    }
}