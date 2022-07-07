function Footer() {
	return (
		<footer className='page-footer teal darken'>
			<div className='footer-copyright'>
				<div className='container'>
					&copy; {new Date().getFullYear()} Copyright Text
					<a className='grey-text text-lighten-4 right' href='#!'>
						More Links
					</a>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
