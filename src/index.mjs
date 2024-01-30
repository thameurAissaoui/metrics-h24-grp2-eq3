const express = require('express');
const metriquesKanbanRouter = require("./routers/metriquesKanban.mjs");

const PORT = process.env.NODE_PORT || 3000;

const app = express();
app.use(express.json());
app.use(metriquesKanbanRouter);

app.listen(PORT, () => {
    console.log(`Serveur écoutant sur le port ${PORT}`)
});