const { Router } = require("express");
const controller = require("../controllers/metriquesKanban.mjs");

const router = Router();

router.route("/leadTimeTache/:task")
    .get(controller.leadTimeTache)

router.route("/leadTimePeriode/:start/:end")
    .get(controller.leadTimePeriode)

router.route("/tachesActivesColonne/:colonne")
    .get(controller.tachesActivesColonne)

router.route("/tachesCompleteesPeriode/:start/:end")
    .get(controller.tachesCompleteesPeriode)

module.exports = router;