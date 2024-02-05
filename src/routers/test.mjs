import { Router } from "express";
import controller from "../controllers/test.mjs";

const router = Router();

router.route("/github/getboard")
    .get(controller.getboard);

router.route("/github/getpr")
    .get(controller.getpr);

router.route("/github/getPRCommitsMes")
    .get(controller.getPRCommitsMes);

router.route("/db/status")
    .get(controller.status);

export default router;