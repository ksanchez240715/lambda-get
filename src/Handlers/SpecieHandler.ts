import { APIGatewayEvent } from 'aws-lambda';
import SpecieService from '../Services/SpecieService';
import JsonResponse from "../Models/JsonResponseModel";

export const getSpecie = async () => {
    try
    {
        const specie = await SpecieService.getSpecieList();

        return new JsonResponse (200, JSON.stringify(specie));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};

export const getSpecieById = async (event: APIGatewayEvent) => {

    const id = event.pathParameters?.id;

    if (!id)
        return new JsonResponse (400, JSON.stringify({ message: 'El campo ID es obligatorio' }));

    try
    {
        const specie = await SpecieService.getSpecieById(Number(id));

        if (!specie)
            return new JsonResponse (404, JSON.stringify({ message: 'Especie no encontrada' }));

        return new JsonResponse (200, JSON.stringify(specie));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};
