import { Router } from "express";
import { submitWish } from "../controllers/santa";

const router = Router();

router.post("/wish", submitWish);

export default router;
