import express from "express";
import initialData from "../../controllers/admin/initialData.js";

const initialDataRoutes = express.Router();

initialDataRoutes.post("/initialdata", initialData);

export default initialDataRoutes;
