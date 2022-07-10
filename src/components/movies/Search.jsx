import React, { useState } from 'react';

function Search(props) {
	const { searchMovies } = props;
	const [search, setSearch] = useState('');
	const [type, setType] = useState('all');
	const [sticky, setSticky] = useState('');

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			searchMovies(search, type);
			setSticky(search);
		}
	};

	const handleType = (e) => {
		const typeData = e.target.dataset.type;
		setType(typeData);
		searchMovies(search, typeData);
	};

	return (
		<div className='input-field'>
			<div className='row'>
				<h3>{sticky}</h3>
			</div>
			<div className='row'>
				<input
					placeholder='Search...'
					value={search}
					type='text'
					className='validate col s10'
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => handleKey(e)}
				/>
				<button
					className='btn col s2'
					onClick={() => searchMovies(search, type)}>
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
						onChange={(e) => handleType(e)}
						checked={type === 'all'}
					/>
					<span>All</span>
				</label>
				<label>
					<input
						className='with-gap'
						name='type'
						type='radio'
						data-type='movie'
						onChange={(e) => handleType(e)}
						checked={type === 'movie'}
					/>
					<span>Movie</span>
				</label>
				<label>
					<input
						className='with-gap'
						name='type'
						type='radio'
						data-type='series'
						onChange={(e) => handleType(e)}
						checked={type === 'series'}
					/>
					<span>Series</span>
				</label>
			</div>
		</div>
	);
}

export { Search };
