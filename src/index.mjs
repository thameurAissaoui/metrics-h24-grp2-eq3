import express from 'express';
import dotenv from 'dotenv';


import db from './config/db.mjs';
import gitHub from './config/github.mjs';

import metriquesKanbanRouter from './routers/metriquesKanban.mjs';
import metriquesPullRequestsRouter from './routers/metriquesPullRequests.mjs';
import metriquesVisualisationRouter from './routers/metriquesVisualisation.mjs';
import testRouter from './routers/test.mjs';

const dotEnv = dotenv.config();

const PORT = process.env.NODE_PORT || process.env.PORT;

const app = express();
app.use(express.json());

app.use("/metriquesKanban", metriquesKanbanRouter);
app.use("/metriquesPullRequests", metriquesPullRequestsRouter);
app.use("/snapshot", metriquesVisualisationRouter);
app.use("/test", testRouter);

try {
    await db.connect();
    console.log(db.status());

    console.log(await gitHub.testConnection());

    app.listen(PORT, () => {
        console.log(`Serveur écoutant sur le port ${PORT}`)
    });
} catch (error) {
    console.log("Erreur: " + error.message);
}