import React from 'react';
import { Movies } from '../components/movies/Movies';
import { Search } from '../components/movies/Search';
import { Preloader } from '../components/utils/Preloader';

class Main extends React.Component {
	state = {
		movies: [],
	};
	componentDidMount() {
		fetch('https://www.omdbapi.com/?apikey=e2b49d76&s=matrix')
			.then((response) => response.json())
			.then((data) => {
				setTimeout(() => {
					this.setState({
						movies: data.Search,
					});
				}, 400);
			});
	}
	searchMovies = (str) => {
		fetch(`https://www.omdbapi.com/?apikey=e2b49d76&s=${str}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ movies: [] });
				setTimeout(() => {
					this.setState({
						movies: data.Search,
					});
				}, 400);
			});
	};
	render() {
		return (
			<div className='container'>
				<Search searchMovies={this.searchMovies} />
				{this.state.movies.length > 0 ? (
					<Movies movies={this.state.movies} />
				) : (
					<Preloader />
				)}
			</div>
		);
	}
}
export { Main };
