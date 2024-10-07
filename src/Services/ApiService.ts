import axios from 'axios';

const API_URL = 'https://swapi.py4e.com/api/';

const fetchPeopleFromAPI = async () => {
    try {
        const response = await axios.get(`${API_URL}/people`);
        const { results } = response.data;
        return results;
    } catch (error) {
        throw new Error('Error fetching people from API');
    }
};

const fetchPeopleByIdFromAPI = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/people/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error');
    }
};


const fetchPlanetFromAPI = async () => {
    try {
        const response = await axios.get(`${API_URL}/planets`);
        const { results } = response.data;
        return results;
    } catch (error) {
        throw new Error('Error');
    }
};

const fetchPlanetByIdFromAPI = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/planets/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error');
    }
};


export default {
    fetchPeopleFromAPI,
    fetchPeopleByIdFromAPI,
    fetchPlanetFromAPI,
    fetchPlanetByIdFromAPI
};
