import PeopleService from '../Services/PeopleService';
import JsonResponse from "../Models/JsonResponseModel";

class PeopleController {
    static async getPeopleList() {
        try {
            const people = await PeopleService.getPeopleListApi();
            return new JsonResponse(200, JSON.stringify(people.map((person) => person.GetApiData())));
        } catch (error) {
            console.error('Error in getPeopleList: ', error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error Catch' }));
        }
    }

    static async getPeopleById(id: number) {
        if (!id) {
            return new JsonResponse(400, JSON.stringify({ message: 'El campo ID es obligatorio' }));
        }

        try {
            const person = await PeopleService.getPeopleById(id);
            if (!person) {
                return new JsonResponse(404, JSON.stringify({ message: 'Persona no encontrada' }));
            }

            return new JsonResponse(200, JSON.stringify(person.GetApiData()));
        } catch (error) {
            console.error('Error in getPeopleById: ', error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error Catch' }));
        }
    }
}

export default PeopleController;
