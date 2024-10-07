import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'databasesrt.cvyiy8cgudnb.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: 'Chihuahua',
            database: 'api_backend_ks',
        },
    },
};

export default config;
