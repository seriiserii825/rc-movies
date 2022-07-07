function Movie(props) {
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster,
	} = props;

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={poster} alt='' />
				<span className='card-title'>{title}</span>
			</div>
			<div className='card-content'>
				<p>
					<strong>
						{type} - ({year})
					</strong>
				</p>
			</div>
			<div className='card-action'>
				<a href={`/${id}`}>View movie</a>
			</div>
		</div>
	);
}
export { Movie };
