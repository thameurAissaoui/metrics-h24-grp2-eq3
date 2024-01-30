import db from '../config/db.mjs';

class MetriquesKanbanModel {
    constructor() {
        
    }

    async leadTimeTache(task){
        const sqlStmt = `SELECT item_id, quantity, unit, name FROM ingredients 
                    INNER JOIN items ON ingredients.item_id = items.id 
                    WHERE ingredients.dish_id = ?`;
        return await db.query(sqlStmt, dishId);

        // call API
        return null;
    }
    
    async leadTimePeriode(start, end){
        // call API
        return null;
    }
    
    async tachesActivesColonne(colonne){
        // call API
        return null;
    }
    
    async tachesCompleteesPeriode(start, end){
        // call API
        return null;
    }

}

module.exports = new MetriquesKanbanModel();