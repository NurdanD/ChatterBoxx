import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages );  //Önceki yazışmaları getir
router.post("/send/:id", protectRoute, sendMessage ); //Mesaj yolla// protectRoute sayesinde bir kişi mesaj atmadan önce sisteme kayıtlı mı diye tekrar kontrol edilir.

export default router;
