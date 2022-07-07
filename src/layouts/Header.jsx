function Header() {
	return (
		<nav className='header teal'>
			<div className='nav-wrapper'>
				<div className='brand-logo'>Movies</div>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/seriiserii825/rc-movies'>
							Repo
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export { Header };
