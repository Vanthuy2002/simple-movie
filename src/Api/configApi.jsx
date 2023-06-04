const fetcher = (...args) => fetch(...args).then((res) => res.json());

const apiKey = 'ee32d140777a87f018c3121ae3e85472';

const apiMovie = 'https://api.themoviedb.org/3/movie';

const apiSearchMovie = 'https://api.themoviedb.org/3/search/movie';

const pathImg = 'https://image.tmdb.org/t/p/original/';

const type = {
  now: 'now_playing',
  rated: 'top_rated',
  popular: 'popular',
  upcoming: 'upcoming',
  latest: 'latest',
};

export { fetcher, apiMovie, apiKey, pathImg, type, apiSearchMovie };
