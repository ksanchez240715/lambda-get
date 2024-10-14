import PlanetRepository from "../Repositories/PlanetRepository";

const getPlanetApi = async () => {
    try
    {
        const responsePlanetApi = await PlanetRepository.getAllPlanet();

        return responsePlanetApi.map((data: any) => {
            return data.GetApiData();
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
        const responsePlanetApi = await PlanetRepository.getPlanetById(id);

        return responsePlanetApi.GetApiData();
    } catch (error) {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

export default { getPlanetApi, getPlanetApiById };
