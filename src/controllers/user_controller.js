import { userModel } from "../model/users.js";
import express from "express";

export const addUser = async (req,res) => {
    try {
        const data = req.body
        console.log(data)
        res.send("hello user")

    } catch (error) {
        console.log(error)
    }
}