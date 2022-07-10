import React, { useState, useEffect } from 'react';
import { Movies } from '../components/movies/Movies';
import { Search } from '../components/movies/Search';
import { Preloader } from '../components/utils/Preloader';

function Main() {
	let APP_KEY = process.env.REACT_APP_API_KEY;
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	const searchMovies = (str, type) => {
		setLoading(true);
		type = type !== 'all' ? '&type=' + type : '&type=';
		str = str !== '' ? '&s=' + str : '&s=matrix';

		fetch(`https://www.omdbapi.com/?apikey=${APP_KEY}&s=${str}${type}`)
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setMovies(data.Search);
			});
	};

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?apikey=${APP_KEY}&s=matrix`)
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setTimeout(() => {
					setMovies(data.Search);
				}, 400);
			});
	}, []);
	return (
		<div className='container'>
			<Search searchMovies={searchMovies} />
			{!loading ? <Movies movies={movies} /> : <Preloader />}
		</div>
	);
}
export { Main };
