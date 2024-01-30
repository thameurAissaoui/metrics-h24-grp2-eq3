const model = require("../models/metriquesKanban.mjs");
const { Response } = require("./util");

async function leadTimeTache(req, res){
    let response = model.leadTimeTache(req.params.task);

    if (response === undefined) {
        res.status(404);
        res.json(Response.error(404, ":("));
    } else {
        res.json(Response.ok(response));
    }
}

async function leadTimePeriode(req, res){
    let response = model.leadTimePeriode(req.params.start, req.params.end);

    if (response === undefined) {
        res.status(404);
        res.json(Response.error(404, ":("));
    } else {
        res.json(Response.ok(response));
    }
}

async function tachesActivesColonne(req, res){
    let response = model.tachesActivesColonne(req.params.colonne);

    if (response === undefined) {
        res.status(404);
        res.json(Response.error(404, ":("));
    } else {
        res.json(Response.ok(response));
    }
}

async function tachesCompleteesPeriode(req, res){
    let response = model.tachesCompleteesPeriode(req.params.start, req.params.end);

    if (response === undefined) {
        res.status(404);
        res.json(Response.error(404, ":("));
    } else {
        res.json(Response.ok(response));
    }
}


module.exports = { leadTimeTache, leadTimePeriode, tachesActivesColonne, tachesCompleteesPeriode };