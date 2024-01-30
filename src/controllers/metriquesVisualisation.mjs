import model from '../models/kanbanState.mjs';
import { Response } from "./abstract.mjs";

class MetriquesVisualisationController {

    async status(req, res) {
        try {
            const status = await model.status();
            res.json(Response.ok(status));
        } catch (error) {
            res.status(505);
        }
    }

}

export default new MetriquesVisualisationController();