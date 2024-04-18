import React, { useState } from 'react';
import UseFetch from './UseFetch';
import { Helmet } from 'react-helmet-async';

function UseFetchSample() {
	// asynk veri çekme ve state yönetim işlemleri saplayan bir hook geliştirdik.

	const [tagName, setTagName] = useState<string>('');

	const { data, loading, error } = UseFetch('users', tagName);

	// Yanlış kullanım
	// Not React Function Componentlerde Hooklar sadece React Function Component Body içerisinde çağırılabilir.
	// const callUseFetch = () => {
	// 	UseFetch('https://jsonplaceholder.typicode.com/users', tagName);
	// };

	if (loading)
		return (
			<>
				<Helmet>
					<title>UseFetch</title>
					<meta name="useFetch" content="FETCH API, Custom Hook"></meta>
				</Helmet>
				Yükleniyor ...{' '}
			</>
		);

	if (error) return;

	<>
		{' '}
		<Helmet>
			<title>UseFetch</title>
			<meta name="useFetch" content="FETCH API, Custom Hook"></meta>
		</Helmet>
		Beklenmedik bir hata oluştu
	</>;

	return (
		<>
			<Helmet>
				<title>UseFetch</title>
				<meta name="useFetch" content="FETCH API, Custom Hook"></meta>
			</Helmet>

			{data && (
				<>
					{data.map((item: any) => {
						return <div key={item.id}>{item.name}</div>;
					})}
				</>
			)}

			{/* <button onClick={callUseFetch}>callUseFetch</button> */}

			<button
				onClick={() => {
					setTagName(Math.round(Math.random() * 3).toString());
				}}
			>
				{' '}
				TagName: {tagName}
				<br></br>
				Change Tag And Load Resource
			</button>
		</>
	);
}

export default UseFetchSample;
