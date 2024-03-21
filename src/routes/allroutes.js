import { addUser } from "../controllers/user_controller.js";
import { Router } from "express";
import { addHotel } from "../controllers/hotel_controller.js";
import { addRoom } from "../controllers/room_controller.js";
import { getRoom } from "../controllers/room_controller.js";
import { getOneRoom } from "../controllers/room_controller.js";
import { getAllUsers } from "../controllers/user_controller.js";


export const router = Router()

router.post("/add-user",addUser)
router.get("/add-user",getAllUsers)
router.post("/add-hotel",addHotel)
router.post("/add-room",addRoom)
router.get("/add-room",getRoom)
router.get("/add-room/:id",getOneRoom)



