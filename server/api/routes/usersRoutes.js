import express from "express";

import { createUser, siginUser } from "../controllers/user_controller";
import verifyAuth from "../middlewares/verifyAuth";

const router = express.Router();

// user Routes
router.post("/signin", verifyAuth, siginUser);
router.post("/create-user", verifyAuth, createUser);

export default router;
