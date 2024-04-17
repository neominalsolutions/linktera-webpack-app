import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<nav>
				<Link to="/about">Hakkımızda</Link>{' '}
				<Link to="/reactMemo">React Memo Sample</Link>{' '}
				<Link to="/useMemo">Use Memo Sample</Link>{' '}
				<Link to="/useCallback">Use Callback Sample</Link>{' '}
				<Link to="/useRef">Use Ref Sample</Link>
			</nav>
			<main className="alert">
				<Outlet />
			</main>
		</>
	);
}

export default App;
