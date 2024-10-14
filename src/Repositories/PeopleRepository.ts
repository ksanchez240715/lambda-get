import axios from "axios";
import {People} from "../Models/PeopleModel";
import * as dotenv from 'dotenv';
dotenv.config();
// const API_URL = process.env.API_SWAPI;
const API_URL = "https://swapi.py4e.com/api/";

class PeopleRepository {
    async getAllPeople(): Promise<People[]> {
        try {
            const { data } = await axios.get(`${API_URL}/people`);
            const { results } = data;
            return results.map((data) => new People(data));
        } catch (error) {
            throw new Error('Error fetching people from API');
        }
    }

    async getPeopleById(id: number): Promise<People> {
        try
        {
            const { data } = await axios.get(`${API_URL}/people/${id}`);
            return new People(data);
        } catch (error) {
            throw new Error('Error');
        }
    }
}

export default new PeopleRepository();
