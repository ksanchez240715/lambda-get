import { DataSource } from 'typeorm';
import { Specie } from '../Models/db/Species';
import { Vehicle } from '../Models/db/Vehicles';
// import * as dotenv from 'dotenv';
// dotenv.config();
const AppDataSource = new DataSource({
    type: 'mysql',
    host: "databasesrt.cvyiy8cgudnb.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "Chihuahua",
    database: "api_backend_ks",
    entities: [
        Specie,
        Vehicle
    ],
    synchronize: false,
    connectTimeout: 20000,
    acquireTimeout: 20000
});

export default AppDataSource;
