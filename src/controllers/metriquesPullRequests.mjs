import model from '../models/PR.mjs';
import { Response } from "./abstract.mjs";
import github from "../config/github.mjs"

class MetriquesPullRequestsController {

    async getPRCommitsMes(req, res) {
        try {
            const status = await github.getPRCommitsMes();
            res.json(Response.ok(status));

        } catch (error) {
            res.status(505);
        }
    }

    async getPRCommitsCount(req, res) {
        try {
            const status = await github.getPRCommitsCount();
            res.json(Response.ok(status));

        } catch (error) {
            res.status(505);
        }
    }

    async getPRCommentsCount(req, res) {
        try {
            const status = await github.getPRCommentsCount();
            res.json(Response.ok(status));

        } catch (error) {
            res.status(505);
        }
    }

    async getPRReviewsCount(req, res) {
        try {
            const status = await github.getPRReviewsCount();
            res.json(Response.ok(status));

        } catch (error) {
            res.status(505);
        }
    }

    async getPRCycleTime(req, res) {
        try {
            const status = await github.getPRCycleTime();
            res.json(Response.ok(status));

        } catch (error) {
            res.status(505);
        }
    }

    async getBoard(req, res) {
        try {
            const status = await github.getBoard();
            res.json(Response.ok(status));

        } catch (error) {
            res.status(505);
        }
    }

}

export default new MetriquesPullRequestsController();