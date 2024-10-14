import PlanetService from '../Services/PlanetService';
import JsonResponse from "../Models/JsonResponseModel";

class PlanetController {
    static async getPlanets() {
        try {
            const planets = await PlanetService.getPlanetApi();
            return new JsonResponse(200, JSON.stringify(planets));
        } catch (error) {
            console.error('Error in getPlanets:', error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error al obtener la lista de planetas' }));
        }
    }

    static async getPlanetById(id: string) {
        if (!id) {
            return new JsonResponse(400, JSON.stringify({ message: 'El campo ID es obligatorio' }));
        }

        try {
            const planet = await PlanetService.getPlanetApiById(Number(id));
            if (!planet) {
                return new JsonResponse(404, JSON.stringify({ message: 'Planeta no encontrado' }));
            }
            return new JsonResponse(200, JSON.stringify(planet));
        } catch (error) {
            console.error('Error in getPlanetById:', error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error al obtener el planeta' }));
        }
    }
}

export default PlanetController;
