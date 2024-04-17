import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import './style.scss';
import ReactMemoSample from './pages/reactMemo/ReactMemoSample';
import UseMemoSample from './pages/useMemo/UseMemoSample';
import UseCallBackSample from './pages/useCallback/UseCallBackSample';


const router = createBrowserRouter([
	{
		path: '',
		Component: App,
		children: [
			{
				path: '/about',
				Component: AboutPage,
			},
			{
				path: '/reactMemo',
				Component: ReactMemoSample,
			},
			{
				path: '/useMemo',
				Component: UseMemoSample,
			},
			{
				path: '/useCallback',
				Component: UseCallBackSample,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router} />);
