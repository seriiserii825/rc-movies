import React from 'react';
import { Movies } from '../components/movies/Movies';
import { Search } from '../components/movies/Search';
import { Preloader } from '../components/utils/Preloader';

class Main extends React.Component {
	APP_KEY = process.env.REACT_APP_API_KEY;

	state = {
		movies: [],
		loading: true,
	};

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?apikey=${this.APP_KEY}&s=matrix`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
				});
				setTimeout(() => {
					this.setState({
						movies: data.Search,
					});
				}, 400);
			});
	}
	searchMovies = (str, type) => {
		this.setState({ loading: true });
		type = type !== 'all' ? '&type=' + type : '&type=';
		str = str !== '' ? '&s=' + str : '&s=matrix';

		fetch(`https://www.omdbapi.com/?apikey=${this.APP_KEY}&s=${str}${type}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
				});
				this.setState({
					movies: data.Search,
				});
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
