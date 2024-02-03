import { Router } from "express";
import controller from "../controllers/metriquesPullRequests.mjs";

const router = Router();

router.route("/getPRCommitsMes")
    .get(controller.getPRCommitsMes);

router.route("/getPRCommitsCount")
    .get(controller.getPRCommitsCount);


router.route("/getPRCommentsCount")
    .get(controller.getPRCommentsCount);

router.route("/getPRReviewsCount")
    .get(controller.getPRReviewsCount);


router.route("/getPRCycleTime")
    .get(controller.getPRCycleTime);

router.route("/getBoard")
    .get(controller.getBoard);

    

export default router;