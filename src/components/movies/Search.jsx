import React from 'react';

class Search extends React.Component {
	state = {
		search: '',
		sticky: '',
		type: 'all',
	};

	handleKey(e) {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type);
			this.setState({ sticky: this.state.search });
		}
	}

	handleType(e) {
		this.setState(
			() => ({ type: e.target.dataset.type }),
			() => {
				this.props.searchMovies(this.state.search, this.state.type);
			}
		);
		this.props.searchMovies(this.state.search, this.state.type);
	}

	render() {
		return (
			<div className='input-field'>
				<div className='row'>
					<h3>{this.state.sticky}</h3>
				</div>
				<div className='row'>
					<input
						placeholder='Search...'
						value={this.state.search}
						type='text'
						className='validate col s10'
						onChange={(e) =>
							this.setState({ search: e.target.value })
						}
						onKeyDown={(e) => this.handleKey(e)}
					/>
					<button
						className='btn col s2'
						onClick={() =>
							this.props.searchMovies(
								this.state.search,
								this.state.type
							)
						}>
						Search
					</button>
				</div>
				<div className='row filter'>
					<label>
						<input
							className='with-gap'
							name='type'
							type='radio'
							data-type='all'
							onChange={(e) => this.handleType(e)}
							checked={this.state.type === 'all'}
						/>
						<span>All</span>
					</label>
					<label>
						<input
							className='with-gap'
							name='type'
							type='radio'
							data-type='movie'
							onChange={(e) => this.handleType(e)}
							checked={this.state.type === 'movie'}
						/>
						<span>Movie</span>
					</label>
					<label>
						<input
							className='with-gap'
							name='type'
							type='radio'
							data-type='series'
							onChange={(e) => this.handleType(e)}
							checked={this.state.type === 'series'}
						/>
						<span>Series</span>
					</label>
				</div>
			</div>
		);
	}
}

export { Search };
