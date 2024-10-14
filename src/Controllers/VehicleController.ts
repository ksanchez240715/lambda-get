import VehicleService from '../Services/VehicleService';
import JsonResponse from "../Models/JsonResponseModel";

class VehicleController {
    static async getVehicles() {
        try
        {
            const vehicles = await VehicleService.getVehicleList();
            return new JsonResponse(200, JSON.stringify(vehicles));
        }
        catch (error)
        {
            console.error('Error in getVehicles:', error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error al obtener la lista de vehículos' }));
        }
    }

    static async getVehicleById(id: number) {
        if (!id)
            return new JsonResponse(400, JSON.stringify({ message: 'El campo "id" es obligatorio' }));

        try
        {
            const vehicle = await VehicleService.getVehicleById(id);
            if (!vehicle)
                return new JsonResponse(404, JSON.stringify({ message: 'Vehículo no encontrado' }));

            return new JsonResponse(200, JSON.stringify(vehicle));
        }
        catch (error)
        {
            console.error('Error in getVehicleById:', error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error al obtener el vehículo' }));
        }
    }
}

export default VehicleController;
