import { Router } from "express";
import controller from "../controllers/metriquesKanban.mjs";

const router = Router();

// Lead time pour une tache donnee
router.route("/leadtime/Task")
    .get(controller.leadTimeTask);

// Lead time pour les taches terminees dans une periode donnee
router.route("/leadtime/periode")
    .get(controller.leadTimePeriode);

// Nombre de taches actives pour une colonne donnee
router.route("/taskCount/colonne")
    .get(controller.taskCountColonne);

// Nombre de taches completees pour une periode donnee
router.route("/taskCount/periode")
    .get(controller.taskCountPeriode);

export default router;