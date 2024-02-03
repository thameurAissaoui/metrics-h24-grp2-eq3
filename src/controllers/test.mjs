import { Response } from "./abstract.mjs";
import github from "../config/github.mjs"
import db from "../config/db.mjs"

class MetriquesVisualisationController {

    async getboard(req, res) {
        try {
            const status = await github.getBoard();
            res.json(Response.ok(status));
        } catch (error) {
            res.status(505);
        }
    }

    async getpr(req, res) {
        try {
            const status = await github.getPR();
            res.json(Response.ok(status));
        } catch (error) {
            res.status(505);
        }
    }


    async getPRCommitsMes(req, res) {
        try {
            const status = await github.getPRCommitsMes();
            res.json(Response.ok(status));

        } catch (error) {
            res.status(505);
        }
    }

    async status(req, res) {
        try {
            const status = await db.status();
            res.json(Response.ok(status));
        } catch (error) {
            res.status(505);
        }
    }

}

export default new MetriquesVisualisationController();