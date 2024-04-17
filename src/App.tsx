import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import mi8 from './assets/images/mi8.jpg';

function App() {
	return (
		<>
			<nav>
				<Link to="/about">Hakkımızda</Link>
				<Link to="/reactMemo">React Memo Sample</Link>{' '}
				<Link to="/useMemo">Use Memo Sample</Link>
			</nav>
			<main className="alert">
				{/* <img src={mi8} alt="image" /> */}
				<Outlet />
			</main>
		</>
	);
}

export default App;
