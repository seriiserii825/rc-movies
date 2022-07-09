function Movie(props) {
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster,
	} = props;

	const image_url = poster !== 'N/A' ? poster : 'https://unsplash.it/800/800';

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={image_url} alt='' />
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
