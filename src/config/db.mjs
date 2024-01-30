import dotenv from 'dotenv';
import pkg  from 'pg';

const dotEnv = dotenv.config();


class DBConnection {
    constructor() {

        this.pool = new pkg.Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: 5432, // Default PostgreSQL port
        });

    }

    async connect() {
        return await this.pool.connect();
    }

    async status() {
        return {
            totalCount: this.pool.totalCount,
            idleCount: this.pool.idleCount,
            waitingCount: this.pool.waitingCount,
        };
    }

}

const instance = new DBConnection();
export default instance;