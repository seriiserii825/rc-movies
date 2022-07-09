import React from 'react';
import { Movies } from '../components/movies/Movies';
import { Search } from '../components/movies/Search';
import { Preloader } from '../components/utils/Preloader';

class Main extends React.Component {
	state = {
		movies: [],
		loading: true,
	};
	componentDidMount() {
		fetch('https://www.omdbapi.com/?apikey=e2b49d76&s=matrix')
			.then((response) => response.json())
			.then((data) => {
				setTimeout(() => {
					this.setState({
						movies: data.Search,
						loading: false,
					});
				}, 400);
			});
	}
	searchMovies = (str, type) => {
		this.setState({ loading: true });
		type = type !== 'all' ? '&type=' + type : '&type=';
		str = str !== '' ? '&s=' + str : '&s=matrix';

		fetch(`https://www.omdbapi.com/?apikey=e2b49d76&s=${str}${type}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ movies: [] });
				setTimeout(() => {
					this.setState({
						movies: data.Search,
						loading: false,
					});
				}, 400);
			});
	};
	render() {
		return (
			<div className='container'>
				<Search searchMovies={this.searchMovies} />
				{!this.state.loading ? (
					<Movies movies={this.state.movies} />
				) : (
					<Preloader />
				)}
			</div>
		);
	}
}
export { Main };
