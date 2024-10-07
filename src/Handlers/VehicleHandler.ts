import { APIGatewayEvent } from 'aws-lambda';
import VehicleService from '../Services/VehicleService';
import JsonResponse from "../Models/JsonResponseModel";

export const getVehicle = async () => {
    try
    {
        const vehicle = await VehicleService.getVehicleList();

        return new JsonResponse (200, JSON.stringify(vehicle));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};

export const getVehicleById = async (event: APIGatewayEvent) => {

    const id = event.pathParameters?.id;

    if (!id)
        return new JsonResponse (400, JSON.stringify({ message: 'El campo ID es obligatorio' }));

    try
    {
        const vehicle = await VehicleService.getVehicleById(Number(id));

        if (!vehicle)
            return new JsonResponse (404, JSON.stringify({ message: 'Vehiculo no encontrado' }));

        return new JsonResponse (200, JSON.stringify(vehicle));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};
