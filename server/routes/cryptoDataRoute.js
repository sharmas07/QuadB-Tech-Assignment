import { Router } from "express";
import { fetchData } from "../controllers/fetchData.js";
import { fetchDataFromDB } from "../controllers/fetchDataFromDB.js";
const router = Router();

router.get('/fetchData', fetchData);
router.get('/fetchDataFromDB', fetchDataFromDB)

export default router;