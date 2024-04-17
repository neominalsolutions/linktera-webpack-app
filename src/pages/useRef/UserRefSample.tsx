import React, { useEffect, useRef, useState } from 'react';

function UseRefSample() {
	console.log('UseRefSample rendering...');
	const [visible, setVisible] = useState<boolean>(true);
	const inputRef = useRef<HTMLInputElement>(null);

	// useRef elementin gerçek domdaki referansı ile çalışıyoruz.
	// bu sebeple useRef tekniği ile virtual dom tetiklemeden html elementler üzerinde işlem yapabiliriz.

	// 2.kullanım şekli state değişiminde değeri kaybetmemek için kullanırız.
    // bir state değişiminde bir hesaplama yapıp hesaplama sonucunu ekrana basmak için virtual dom üzerinde işlem yapmak gerekir. React default davranışıdır. Ama bu durumda birden fazla state tanımlı olduğu için yeni açılan state de render almaya compenti zorlar, bu render kaçınmak için useRef kullandık.
	const oldVisibleState = useRef<boolean>(false);

	// let oldVisibleState = true;

	const onReset = () => {
		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	const onFocus = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<>
			<div className="p-10">
				<input ref={inputRef} type="text" />
				<button onClick={onReset}>Reset</button>
				<button onClick={onFocus}>Focus</button>
				<button
					onClick={() => {
						oldVisibleState.current = visible;
						setVisible(!visible);
					}}
				>
					Visible Toogle
				</button>
				{visible && <p> Hidden Value </p>}
				{/* Old Visible: {oldVisibleState == true ? 'visible' : 'unvisible'} */}
				Old Visible: {oldVisibleState.current == true ? 'visible' : 'unvisible'}
			</div>
		</>
	);
}
export default UseRefSample;
