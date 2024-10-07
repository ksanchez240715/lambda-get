import { APIGatewayEvent, Context } from 'aws-lambda';
import PlanetService from '../Services/PlanetService';
import JsonResponse from "../Models/JsonResponseModel";

export const getPlanetApi = async () => {
    try
    {
        const planets = await PlanetService.getPlanetApi();

        return new JsonResponse (200, JSON.stringify(planets));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};

export const getPlanetApiById = async (event: APIGatewayEvent, context: Context) => {

    const id = event.pathParameters?.id;

    if (!id)
        return new JsonResponse (400, JSON.stringify({ message: 'El campo ID es obligatorio' }));

    try
    {
        const planet = await PlanetService.getPlanetApiById(Number(id));

        if (!planet)
            return new JsonResponse (404, JSON.stringify({ message: 'Planeta no encontrado' }));

        return new JsonResponse (200, JSON.stringify(planet));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};
