import React, { useCallback, useState } from 'react';
import ResetButton from './ResetButton';

function UseCallBackSample() {
	console.log('UseCallBackSample rendering...');
	const [name, setName] = useState<string>('');
	// sebebi js de fonsiyonlar referans type olarak tutulur.
	// her bir render da fonkisyonun referansı değiştiği için yeniden render alır.
	const onReset = useCallback(() => {
		console.log('...onreset');
	}, []);

	return (
		<>
			<div className="container mx-auto p-10">
				<p>Name: {name}</p>
				<input
					className="border border-blue-500 mb-4"
					onChange={(e) => setName(e.target.value)}
				/>
				<br></br>

				<ResetButton text="Reset Button" onReset={onReset} />
			</div>
		</>
	);
}

export default UseCallBackSample;
