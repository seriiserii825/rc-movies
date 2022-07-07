import React from 'react';
import { Movies } from '../components/movies/Movies';

class Main extends React.Component {
	state = {
		movies: [],
	};
	componentDidMount() {
		fetch('https://www.omdbapi.com/?apikey=e2b49d76&s=matrix')
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					movies: data.Search,
				});
			});
	}
	render() {
		return (
			<div className='container'>
				{this.state.movies.length > 0 ? (
					<Movies movies={this.state.movies} />
				) : (
					<h2>No movies found</h2>
				)}
			</div>
		);
	}
}
export { Main };
