import AppDataSource from '../Config/data-source';
import { Repository  } from 'typeorm';
import { Specie } from "../Models/db/Species";

class SpecieRepository {
    private specieRepository: Repository<Specie>;
    constructor()
    {
        this.specieRepository = AppDataSource.getRepository(Specie);
    }

    async getAllSpecies(): Promise<Specie[]> {
        return await this.specieRepository.find();
    }

    async getSpecieById(id: number): Promise<Specie | null> {
        const specie = await this.specieRepository.findOneBy({ id });

        return specie as Specie | null;
    }
}

export default new SpecieRepository();
