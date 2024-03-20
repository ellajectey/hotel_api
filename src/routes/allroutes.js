import { addUser } from "../controllers/user_controller.js";
import { Router } from "express";

export const router = Router()

router.post("/add-user",addUser)

