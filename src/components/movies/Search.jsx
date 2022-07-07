import React from 'react';

class Search extends React.Component {
	state = {
		search: '',
		sticky: '',
	};

	handleKey(e) {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search);
			this.setState({ sticky: this.state.search });
			this.setState({ search: '' });
		}
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
							this.props.searchMovies(this.state.search)
						}>
						Search
					</button>
				</div>
			</div>
		);
	}
}

export { Search };
