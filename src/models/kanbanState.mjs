class EtatKanban {

    async status() {

        // Example response
        // {
        //     "columns": [
        //         { "name": "To Do", "tasks": 1 },
        //         { "name": "In Progress", "tasks": 2 },
        //         { "name": "Done", "tasks": 0 }
        //     ]
        // }

        let columns = [];
        
        // get info...

        return JSON.stringify(columns);

    }
}

export default new EtatKanban();