import model from '../models/kanbanState.mjs';
import { Response } from "./abstract.mjs";

class MetriquesKanbanController {

    async leadTimeTask(req, res) {
        try {
            const response = await model.leadTimeTask();
            res.json(Response.ok(response));
        } catch (error) {
            res.status(505);
        }
    }

    async leadTimePeriode(req, res) {
        try {
            const response = await model.leadTimePeriode();
            res.json(Response.ok(response));
        } catch (error) {
            res.status(505);
        }
    }

    async taskCountColonne(req, res) {
        try {
            const response = await model.taskCountColonne();
            res.json(Response.ok(response));
        } catch (error) {
            res.status(505);
        }
    }

    async taskCountPeriode(req, res) {
        try {
            const response = await model.taskCountPeriode();
            res.json(Response.ok(response));
        } catch (error) {
            res.status(505);
        }
    }

}

export default new MetriquesKanbanController();