import ApiService from './ApiService';
import {MapKeys} from "../Utils/ParserObject";
import PeopleModel from "../Models/PeopleModel";

const getPeopleListApi = async () => {
    try
    {
        const responsePeopleApi = await ApiService.fetchPeopleFromAPI();

        return responsePeopleApi.map((data: any) => {
            return MapKeys(data, PeopleModel);
        });
    }
    catch (error) {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

const getPeopleById = async (id: number) => {
    try
    {
        const responsePeopleApi = await ApiService.fetchPeopleByIdFromAPI(id);

        return MapKeys(responsePeopleApi,PeopleModel);
    }
    catch (error)
    {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

export default { getPeopleListApi, getPeopleById };
