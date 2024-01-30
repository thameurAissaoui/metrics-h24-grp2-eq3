import model from '../models/PR.mjs';
import { Response } from "./abstract.mjs";

class MetriquesPullRequestsController {

    async metrique1(req, res) {
        try {
            const metrique = await model.metrique1();
            res.json(Response.ok(metrique));
        } catch (error) {
            res.status(505);
        }
    }

    async metrique2(req, res) {
        try {
            const metrique = await model.metrique2();
            res.json(Response.ok(metrique));
        } catch (error) {
            res.status(505);
        }
    }

    async metrique3(req, res) {
        try {
            const metrique = await model.metrique3();
            res.json(Response.ok(metrique));
        } catch (error) {
            res.status(505);
        }
    }

    async metrique4(req, res) {
        try {
            const metrique = await model.metrique4();
            res.json(Response.ok(metrique));
        } catch (error) {
            res.status(505);
        }
    }

    async metrique5(req, res) {
        try {
            const metrique = await model.metrique5();
            res.json(Response.ok(metrique));
        } catch (error) {
            res.status(505);
        }
    }

}

export default new MetriquesPullRequestsController();