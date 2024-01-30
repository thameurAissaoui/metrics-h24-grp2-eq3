# Oxygen CS Groupe n°02 - Équipe n°03

## Description

Développement de la solution logicielle Oxygen CS pour la compagnie Oxygen Software

## Contributions

-Aissaoui, Thamer                      
-Caron, Louis-Antoine                             
-Nassih, Nabil

## Installation

1. Pull project
2. naviger au `/src`
3. `npm install`
4. mettre le fichier `.env` à la base du dossier `/src`
5. `npm run dev` ou `npm run start`
6. Pour tester `npm run test` **Pas implemente encore**

## File structure

```
config
    ├── db.mjs - A helper to query the database
    └── github.mjs - A helper to query the github repo
controllers
    ├── abstract.mjs - Helper for API responses
    ├── metriquesKanban.mjs - cree la reponse
    ├── metriquesPullRequests.mjs - cree la reponse
    ├── metriquesVisualisation.mjs - cree la reponse
    └── test.mjs - POUR TESTS
models
    ├── kanbanState.mjs - la ou on fait la query et on cree l'objet
    └── PR.mjs - la ou on fait la query et on cree l'objet
routers
    ├── metriquesKanban.mjs - Défini les routes 
    ├── metriquesPullRequests.mjs - Défini les routes 
    ├── metriquesVisualisation.mjs - Défini les routes 
    └── test.mjs - POUR TESTS
index.mjs - Main entry point module
.env - FICHIER À AJOUTER

```

## Routes

- http://localhost:3000/metriquesKanban/leadtime/Task
- http://localhost:3000/metriquesKanban/leadtime/Periode
- http://localhost:3000/metriquesKanban/taskCount/colonne
- http://localhost:3000/metriquesKanban/taskCount/periode
- http://localhost:3000/metriquesPullRequests/metrique1
- http://localhost:3000/metriquesPullRequests/metrique2
- http://localhost:3000/metriquesPullRequests/metrique3
- http://localhost:3000/metriquesPullRequests/metrique4
- http://localhost:3000/metriquesPullRequests/metrique5
- http://localhost:3000/snapshot
- http://localhost:3000/test/db/status
- http://localhost:3000/test/github/getboard
- http://localhost:3000/test/github/getpr
## Path example 

![path example](https://www.plantuml.com/plantuml/png/JOyx3i9034JxFOLBA7812XG941GW0gAaSH83YpOss0xY-6JvI9IUUVCab-QetdSfH6xf2KKn1PNUIGqci3eSAjZJlITp2xyyCpDXLqdfm-rp0olaDaK-X_yomnjfAMMkKcd8xASyycZ13TwiJ-Xa8FML6ZSugNJVqJXynzdJ29_YUV3CqN6Gk4PwO89Hlciq0b5OAjukk_NuoDkt3cPAw54ubCJjyEaB)
