import SpecieRepository from "../Repositories/SpecieRepository";

const getSpecieList = async () => {
    try
    {
        const response = await SpecieRepository.getAllSpecies();

        return response;
    }
    catch (error)
    {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

const getSpecieById = async (id: number) => {
    try
    {
        const response = await SpecieRepository.getSpecieById(id);

        return response;
    }
    catch (error)
    {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

export default { getSpecieList, getSpecieById };
