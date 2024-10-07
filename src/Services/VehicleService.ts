import VehicleRepository from "../Repositories/VehicleRepository";

const getVehicleList = async () => {
    try
    {
        const response = await VehicleRepository.getAllVehicles();

        return response;
    }
    catch (error)
    {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

const getVehicleById = async (id: number) => {
    try
    {
        const response = await VehicleRepository.getVehicleById(id);

        return response;
    }
    catch (error)
    {
        console.error('Error get Api StarWars API:', error);
        throw new Error('Error service Api');
    }
};

export default { getVehicleList, getVehicleById };
