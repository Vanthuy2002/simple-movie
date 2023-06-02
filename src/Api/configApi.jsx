const fetcher = (...args) => fetch(...args).then((res) => res.json());
const apiKey = '98e5208600afbfac3e08e8f76bfe3f3e';
const apiMovie = ' https://api.themoviedb.org/3/movie';
const pathImg = 'https://image.tmdb.org/t/p/original/';

export { fetcher, apiMovie, apiKey, pathImg };
