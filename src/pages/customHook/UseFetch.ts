// uygulama genelinde get isteklerini hook'a gönderilen parametrelere göre yentip bize response verecek bir hook yazıyoruz.

import { useEffect, useState } from 'react';

function UseFetch(url: string, tagName?: string) {
	const [data, setData] = useState<any>();
	const [loading, setloading] = useState<boolean>(false);
	const [error, setError] = useState<any>();

	useEffect(() => {
		// async olarak veri çekme işlemi yapacağız
		setloading(true);

		fetch(url)
			.then((response) => {
				// resolved
				return response.json();
			})
			.then((data) => {
				console.log('data', data);
				setData(data);
				setloading(false);
			})
			.catch((err) => {
				// rejected
				setloading(false);
				setError(err);
				console.log('err', err);
			});
	}, [tagName]);

	return { data, loading, error };
}

export default UseFetch;
