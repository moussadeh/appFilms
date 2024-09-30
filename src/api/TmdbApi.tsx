import axios from "axios";
import { API_KEY, API_TOKEN, API_URL } from "../config/const";

const URL = API_URL;
const KEY = API_KEY;

const api = axios.create({
    baseURL: URL,
    params: {
        api_key: KEY
    }
});

// filmes populaires
export const getPopularMovies = async () => {
    try {
        const response = await api.get('/movie/popular');
        return response.data.results;
    } catch (error) {
        console.error('Erreur lors de la recupération des données :', error);
        throw error;
    }
}