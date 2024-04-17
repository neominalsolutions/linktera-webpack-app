import React, { useEffect, useMemo, useState } from 'react';

function UseMemoSample() {
	console.log('UseMemo Rendering...');
	const [counter, setCounter] = useState<number>(0);
	const [name, setName] = useState('');

	// uygulama ilk çalıştığı anda fonksiyonun çalışması gerekiyor.
	// bir daha tekrardan hesaplanmaması lazım.
	// Not: Ama component içindeki her bir state değişiminde aslında calculation function tekrar tekrar çalıştığını gözlemleyeceğiz.
	const calculation = function () {
		console.log('calculating...');
		return 5 * counter;
	};

	// useEffect(() => {

	// },[])

	// useEffect(() => {

	// }, [counter]);

	// UseMemo Component içiriside state göre bir değerin memoize edilmesini sağlayan bir yöntem
	const value = useMemo(() => calculation(), [counter]);

	return (
		<>
			Value: {value}
			<button onClick={() => setCounter(counter + 1)}>{counter}</button>
			<button onClick={() => setName('Hasan')}>Set Name</button>
		</>
	);
}

export default UseMemoSample;
