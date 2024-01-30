import { Router } from "express";
import controller from "../controllers/metriquesPullRequests.mjs";

const router = Router();

router.route("/metrique1")
    .get(controller.metrique1);

router.route("/metrique2")
    .get(controller.metrique2);

router.route("/metrique3")
    .get(controller.metrique3);

router.route("/metrique4")
    .get(controller.metrique4);

router.route("/metrique5")
    .get(controller.metrique5);

export default router;