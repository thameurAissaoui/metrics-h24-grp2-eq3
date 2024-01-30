import db from '../config/db.mjs';

class EtatKanban {

    async status() {

        // Example response
        // {
        //     "timestamp": "******"
        //     "columns": [
        //         { "name": "To Do", "tasks": 1 },
        //         { "name": "In Progress", "tasks": 2 },
        //         { "name": "Done", "tasks": 0 }
        //     ]
        // }

        let columns = [];
        
        // get info...

        return columns;

    }

    async leadTimeTask(id) {
        // query BD ici
        const queryResult = await instance.query('SELECT * FROM your_table');
        
        return null;
    }

    async leadTimePeriode(start, end) {
        // query BD ici
        const queryResult = await instance.query('SELECT * FROM your_table');

        return null;
    }

    async taskCountColonne(colonne) {
        // query BD ici
        const queryResult = await instance.query('SELECT * FROM your_table');

        return null;
    }

    async taskCountPeriode(start, end) {
        // query BD ici
        const queryResult = await instance.query('SELECT * FROM your_table');
        
        return null;
    }
}

export default new EtatKanban();