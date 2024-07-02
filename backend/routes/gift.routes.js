import express from "express";
import { getAllGifts, getGiftById } from "../controllers/gifts.controller.js";

const router = express.Router();

router.get('/', getAllGifts)
router.get('/:id', getGiftById)



export default router;