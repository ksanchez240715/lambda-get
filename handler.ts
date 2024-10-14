import { APIGatewayEvent, Context } from 'aws-lambda';

import AppDataSource from "./src/Config/data-source";
import PeopleController from "./src/Controllers/PeopleController";
import SpecieController from "./src/Controllers/SpecieController";
import PlanetController from "./src/Controllers/PlanetController";
import VehicleController from "./src/Controllers/VehicleController";
let initDB = false;

AppDataSource.initialize()
    .then(() => {
        console.log('inicio..DB ');
        initDB = true;
    })
    .catch((error) => {
        console.error('Error', error);
    });

export const api = async (event: APIGatewayEvent, context: Context) => {
    if (!initDB) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error DB CONEXION' })
        };
    }

    const { path, httpMethod, pathParameters } = event;

    switch (true) {
        case path === '/people' && httpMethod === 'GET':
            return await PeopleController.getPeopleList();

        case path.startsWith('/people/') && httpMethod === 'GET':
            console.log(pathParameters?.id);
            const peopleId = pathParameters?.id ? Number(pathParameters.id) : null;
            return await PeopleController.getPeopleById(peopleId);

        case path === '/planet' && httpMethod === 'GET':
            return await PlanetController.getPlanets();

        case path.startsWith('/planet/') && httpMethod === 'GET':
            console.log(pathParameters?.id);
            const planetId = pathParameters?.id ? Number(pathParameters.id) : null;
            return await PeopleController.getPeopleById(planetId);

        case path === '/specie' && httpMethod === 'GET':
            console.log(path);
            return await SpecieController.getSpecieList();

        case path.startsWith('/specie/') && httpMethod === 'GET':
            const specieId = pathParameters?.id ? Number(pathParameters.id) : null;
            return await SpecieController.getSpecieById(specieId);


        case path === '/vehicle' && httpMethod === 'GET':
            console.log(path);
            return await VehicleController.getVehicles();

        case path.startsWith('/vehicle/') && httpMethod === 'GET':
            const vehicleId = pathParameters?.id ? Number(pathParameters.id) : null;
            return await VehicleController.getVehicleById(vehicleId);

        default:
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Ruta no encontrada' })
            };
    }
};
