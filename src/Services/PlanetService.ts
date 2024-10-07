import PlanetModel from '../Models/PlanetModel';
import ApiService from './ApiService';
import {MapKeys} from "../Utils/ParserObject";

const getPlanetApi = async () => {
    try
    {
        const responsePlanetApi = await ApiService.fetchPlanetFromAPI();

        return responsePlanetApi.map((data: any) => {
            return MapKeys(data,PlanetModel)
        });

    }
    catch (error)
    {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};


const getPlanetApiById = async (id: number) => {
    try
    {
        const responsePlanetApi = await ApiService.fetchPeopleByIdFromAPI(id);

        return MapKeys(responsePlanetApi, PlanetModel);
    } catch (error) {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

export default { getPlanetApi, getPlanetApiById };
