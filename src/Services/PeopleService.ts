import PeopleRepository from "../Repositories/PeopleRepository";

const getPeopleListApi = async () => {
    try
    {
        const responsePeopleApi = await PeopleRepository.getAllPeople();

        return responsePeopleApi.map((data) => {
            return data;
        });

    }
    catch (error)
    {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

const getPeopleById = async (id: number) => {
    try
    {
        const responsePeopleApi = await PeopleRepository.getPeopleById(id);

        return responsePeopleApi;
    }
    catch (error)
    {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

export default { getPeopleListApi, getPeopleById };
