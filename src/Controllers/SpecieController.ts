import SpecieService from '../Services/SpecieService';
import JsonResponse from "../Models/JsonResponseModel";

class SpecieController {
    static async getSpecieList() {
        try {
            const species = await SpecieService.getSpecieList();
            return new JsonResponse(200, JSON.stringify(species));
        } catch (error) {
            console.error('Error in getSpecieList: ', error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error' }));
        }
    }

    static async getSpecieById(id: number) {
        if (!id) {
            return new JsonResponse(400, JSON.stringify({ message: 'El campo "id" es obligatorio' }));
        }

        try {
            const specie = await SpecieService.getSpecieById(id);
            if (!specie) {
                return new JsonResponse(404, JSON.stringify({ message: 'Especie no encontrada' }));
            }

            return new JsonResponse(200, JSON.stringify(specie));
        } catch (error) {
            console.error('Error in getSpecieById: ', error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error' }));
        }
    }
}

export default SpecieController;
