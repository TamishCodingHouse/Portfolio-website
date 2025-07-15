import express from "express";
import { sendMessage } from "../controller/ContactController.js";

const router = express.Router();

router.post("/contact", sendMessage);

export default router;
