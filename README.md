# Oxygen CS Groupe n°02 - Équipe n°03

## Description

Développement de la solution logicielle Oxygen CS pour la compagnie Oxygen Software

## Contributions

- Aissaoui, Thamer                      
- Caron, Louis-Antoine                             
- Nassih, Nabil

## Technologies utilise

- Express : pour les routes d'API
- Dotenv : pour les variables d'environnement
- graphql-request : pour simplifier la communication avec GitHub
- pg : pour la communication avec la base de données
- Nodemon : pour faciliter le developpement
- jest : pour les tests

## Installation

1. Pull project
2. naviger au `/src`
3. `npm install`
4. mettre le fichier `.env` à la base du dossier `/src`
5. `npm run dev` ou `npm run start`
6. Pour tester :
  - npm i -D jest nodemon axios pour installer jest
  - ajouter le module de test au fichier package.json sous la section scripts:
  `"test": "jest --watchAll"`
  - créer vos fichiers tests ici: __test__/index.test.js
  - `npm run test`
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

## Design BD

![bd design](https://www.plantuml.com/plantuml/png/LOyn2iCm34LtdKBTMdg3J9cwP2cqUr5ifL6mvM0vGmYvUqC2BLt4up_uVDLMA9Sf1e2JvqwKyKbjO7I1pF0RthD4odF3CowTSF3hpzrIPddhduDU_5OYsGK-cEDOPemSMyu6SFGtf2tfGscqFXN31H2lABv2qR9paSZRnZXMFzp5O4bVdWfLE-9vlwaTs1LC7L88w5AOeXgIUdIKlLrW1QXP_VRn1m00 "")

## Calcul des métriques des Pull requests: ./config/metriquesPrCalculations.mjs

5 Métriques ont étés considérées dans un contexte Devops

- Calcul du Temps de cycle des pull requests (PR Cycle Time) calculatePRCycleTime(data, number):

*Définition* : Le temps nécessaire pour qu'une pull request soit créée, révisée, approuvée et fusionnée.

*Justification* : Cette métrique mesure l'efficacité du processus de développement, fournissant des informations sur la rapidité avec laquelle les fonctionnalités sont ajoutées ou les bugs corrigés.

- Calcul du nombre de Message par commit au sein d'une PR laculatePRCommitsMes(data)

*Définition* : Chaque Commit de la Pull request doit contenir un message explicatif, ici on vérifie la présence des messages et des commits et on calcule leur fréquence!

*Justification* :
Pourquoi les messages de commit sont importants ? Pour raccourcir et faciliter les revues de code. Pour aider dans la compréhension d'un changement. Pour aider les futurs personnes qui vont devoir maintenir le code à comprendre les différents changements, et l'évolution du code.

- Calcul du nombre de commits par pull request calaculatePRCommitsCount(data)

*Définition* : Ici on vérifie la fréquence des commits dans un pull request en particulier!

*Justification* :
L’avantage des pull request à single commit est qu’elles sont self contained (un seul endroit). Mais les reviews peut devenir difficile, surtout si le commit est grand/ volumineu en termes de code changes.
L’avantage d’une pull request composée de plusieurs commits plus petits est qu’elle est plus facile en termes de code review.

- Calcul du Nombre  de commentaires par pull request (Comments per PR) calaculatePRCommentsCount(data):

*Définition* : Le nombre de commentaires laissés par les pairs pendant l'examen d'une pull request.

*Justification* : Cela peut aider à évaluer la collaboration et la communication au sein de l'équipe, ainsi que l'efficacité des révisions de code.

- Calcul du Nombre  de reviews par pull request (Reviews per PR) calculatePRReviewsCount(data)

*Définition* : Le nombre de reviews faits par les pairs pendant l'examen d'une pull request.

*Justification* : Cela peut controller la qualité du code soumis et la collaboration au sein de l'équipe tout en identifiant les problèmes potentiels dans le processus de révision. Les révisions de code partagent des connaissances entre les membres de meme équipe, et d'autres équipes qui ne travaillenet pas sur le meme projet!
Un code review efficace doit obligatoirement se faite par une personne autre que celle qui a crée le PR!
