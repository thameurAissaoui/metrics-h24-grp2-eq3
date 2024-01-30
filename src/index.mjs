import express from 'express';
import dotenv from 'dotenv';


import db from './config/db.mjs';

import metriquesKanbanRouter from './routers/metriquesKanban.mjs';
import metriquesPullRequestsRouter from './routers/metriquesPullRequests.mjs';
import metriquesVisualisationRouter from './routers/metriquesVisualisation.mjs';

const dotEnv = dotenv.config();

const PORT = process.env.NODE_PORT || process.env.PORT;

const app = express();
app.use(express.json());

app.use("/metriquesKanban", metriquesKanbanRouter);
app.use("/metriquesPullRequests", metriquesPullRequestsRouter);
app.use("/snapshot", metriquesVisualisationRouter);

try {
    await db.connect();
    console.log(db.status());

    app.listen(PORT, () => {
        console.log(`Serveur écoutant sur le port ${PORT}`)
    });
} catch (error) {
    console.log("Erreur: " + error.message);
}