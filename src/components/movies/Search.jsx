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
				<h3>{this.state.sticky}</h3>
				<input
					placeholder='Search...'
					value={this.state.search}
					type='text'
					className='validate'
					onChange={(e) => this.setState({ search: e.target.value })}
					onKeyDown={(e) => this.handleKey(e)}
				/>
			</div>
		);
	}
}

export { Search };
