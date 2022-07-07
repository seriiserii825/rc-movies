import './App.css';
import Footer from './layouts/Footer';
import { Header } from './layouts/Header';
import { Main } from './layouts/Main';

function App() {
	return (
		<div className='App'>
			<Header />
			<main className='AppMain'>
				<Main />
			</main>
			<Footer />
		</div>
	);
}

export default App;
