import React, { memo } from 'react';
import Header from './Header';

// Not: HeaderProps title değişmediği sürece Header Component render olmamalıdır.

// parent Component
function ReactMemoSample() {
	console.log('ReactMemo rendering...');
	// random State Header ile bir alakası yok
	const [random, setRandom] = React.useState<number>(0);
	const [title, setTitle] = React.useState<string>('');

	const onRandomChange = () => {
		setRandom(Math.round(Math.random() * 100));
	};

	// stateleri props'a bağlayarak propsların state değişiminde değişmesini componentin güncellenmesini sağlıyoruz.

	return (
		<>
			<Header title={title} />
			<br></br>
			Random Number: {random}
			<br></br>
			<button onClick={onRandomChange}>onRandomChange</button>
			<button
				onClick={() => {
					const _title = prompt('Title değerini giriniz');
					setTitle(_title as string);
				}}
			>
				Set Title
			</button>
		</>
	);
}

export default ReactMemoSample;
