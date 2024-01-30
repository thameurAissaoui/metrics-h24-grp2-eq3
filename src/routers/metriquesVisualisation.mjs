import { Router } from "express";
import controller from "../controllers/metriquesVisualisation.mjs";

const router = Router();

router.route("/")
    .post(controller.status);

export default router;