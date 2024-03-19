import express from "express";
import dotenv from "dotenv";

dotenv.config({path:[]});

const app =express();

const port = process.env.PORT || 8080

app.listen(port, () =>{

    console.log(`Express server is running on ${port}`);
 
});