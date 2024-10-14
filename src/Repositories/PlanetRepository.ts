import {Planet} from "../Models/PlanetModel";
import axios from "axios";
// const API_URL = process.env.API_SWAPI;
const API_URL = "https://swapi.py4e.com/api/";

class PlanetRepository {
    async getAllPlanet(): Promise<Planet[]> {
        try {
            const response = await axios.get(`${API_URL}/planets`);
            const { results } = response.data;
            return results;
        } catch (error) {
            throw new Error('Error fetching people from API');
        }
    }

    async getPlanetById(id: number): Promise<Planet> {
        try {
            const response = await axios.get(`${API_URL}/planets/${id}`);
            return response.data;
        } catch (error) {
            throw new Error('Error');
        }
    }
}

export default new PlanetRepository();
