import { APIGatewayEvent, Context } from 'aws-lambda';
import PeopleService from '../Services/PeopleService';
import JsonResponse from "../Models/JsonResponseModel";

export const getPeopleApi = async () => {
    try
    {
        const people = await PeopleService.getPeopleListApi();

        return new JsonResponse (200, JSON.stringify(people));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};

export const getPeopleApiById = async (event: APIGatewayEvent, context: Context) => {

    const id = event.pathParameters?.id;

    if (!id)
        return new JsonResponse (400, JSON.stringify({ message: 'El campo ID es obligatorio' }));

    try
    {
        const people = await PeopleService.getPeopleById(Number(id));

        if (!people)
            return new JsonResponse (404, JSON.stringify({ message: 'Persona no encontrada' }));

        return new JsonResponse (200, JSON.stringify(people));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};
