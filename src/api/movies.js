import axios from 'axios';
import { API_PATH } from '../constants/api';

const ACCESS_KEY =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTc5OGVkYmZhMGZkZTZhZGFmZDk5OGQ5M2E3MjBjOCIsIm5iZiI6MTc0NDM5MzQ2MS41OTIsInN1YiI6IjY3Zjk1NGY1ZGU1ZTRkZWM2MmFkN2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNPfBtDAR8c7EACUBWxQZ7gF-KSeSQLFUDrqLFpuXi4';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
	Authorization: `Bearer ${ACCESS_KEY}`,
	accept: 'application/json',
};
// axios.defaults.params = {
// 	language: 'en-US',
// };

export const fetchTrendMovies = async () => {
	const response = await axios.get(API_PATH.trend, {});
	return response.data;
};

export const fetchSearchMovie = async (query, page = 1) => {
	const response = await axios.get(API_PATH.search, {
		params: {
			query,
			page,
		},
	});

	return response.data;
};

export const fetchMovieById = async (id) => {
	const response = await axios.get(API_PATH.movie + id + '?');
	return response.data;
};

export const fetchMovieCredits = async (id) => {
	const response = await axios.get(API_PATH.movie + id + '/credits?');
	return response.data;
};

export const fetchMovieReview = async (id) => {
	const response = await axios.get(API_PATH.movie + id + '/reviews?');
	return response.data;
};
