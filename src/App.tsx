import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import mi8 from './assets/images/mi8.jpg';

function App() {
	return (
		<>
			<nav>
				<Link style={{ color: 'red' }} to="/about">
					Hakkımızda
				</Link>
			</nav>
			<main className="alert">
				<img src={mi8} alt="image" />
				<Outlet />
			</main>
		</>
	);
}

export default App;
