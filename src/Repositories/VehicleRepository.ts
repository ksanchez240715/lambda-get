import { Vehicle } from "../Models/db/Vehicles";
import {Repository} from "typeorm";
import AppDataSource from "../Config/data-source";

class VehicleRepository
{
    private vehicleRepository: Repository<Vehicle>;

    constructor()
    {
        this.vehicleRepository = AppDataSource.getRepository(Vehicle);
    }

    async getAllVehicles(): Promise<Vehicle[]> {
        return await this.vehicleRepository.find();
    }

    async getVehicleById(id: number): Promise<Vehicle | null> {
        const vehicle = await this.vehicleRepository.findOneBy({id});
        return vehicle as Vehicle | null;
    }
}

export default new VehicleRepository();
