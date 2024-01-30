import express from 'express';

import metriquesKanbanRouter from './routers/metriquesKanban.mjs';
import metriquesPullRequestsRouter from './routers/metriquesPullRequests.mjs';
import metriquesVisualisationRouter from './routers/metriquesVisualisation.mjs';

const PORT = process.env.NODE_PORT || 3000;

const app = express();
app.use(express.json());

app.use("/metriquesKanban", metriquesKanbanRouter);
app.use("/metriquesPullRequests", metriquesPullRequestsRouter);
app.use("/snapshot", metriquesVisualisationRouter);

app.listen(PORT, () => {
    console.log(`Serveur écoutant sur le port ${PORT}`)
});