import "reflect-metadata"
import { DataSource } from "typeorm"
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: "mssql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ['../migrations/*.ts', '../migrations/**.ts'],
    migrations: [],
    subscribers: [],
    options: {
        trustServerCertificate: true,
        encrypt: true
    }
})
