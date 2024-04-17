import React, { useState } from 'react';
import UseFetch from './UseFetch';

function UseFetchSample() {
	// asynk veri çekme ve state yönetim işlemleri saplayan bir hook geliştirdik.

	const [tagName, setTagName] = useState<string>('');

	const { data, loading, error } = UseFetch(
		'https://jsonplaceholder.typicode.com/users',
		tagName
	);

	// Yanlış kullanım
	// Not React Function Componentlerde Hooklar sadece React Function Component Body içerisinde çağırılabilir.
	// const callUseFetch = () => {
	// 	UseFetch('https://jsonplaceholder.typicode.com/users', tagName);
	// };

	if (loading) return <>Yükleniyor ... </>;

	if (error) return <>Beklenmedik bir hata oluştu</>;

	return (
		<>
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
