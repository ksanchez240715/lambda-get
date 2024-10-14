import { DataSource } from 'typeorm';
import { Specie } from '../Models/db/Species';
import { Vehicle } from '../Models/db/Vehicles';
import * as dotenv from 'dotenv';
dotenv.config();
const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        Specie,
        Vehicle
    ],
    synchronize: false,
    connectTimeout: 20000,
    acquireTimeout: 20000
});

export default AppDataSource;
