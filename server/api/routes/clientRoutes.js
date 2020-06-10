import express from "express";
import { getClients } from "../controllers/clientController";
import verifyAuth from "../middlewares/verifyAuth";

const router = express.Router();

// test Routes
router.get("/signin", getClients);

export default router;
