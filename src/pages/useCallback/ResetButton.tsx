import React, { memo } from 'react';

type ResetButtonProps = {
	text: string;
	onReset: () => void; // action Prop yüzünde component gereksiz render alıcak.
};

function ResetButton({ text, onReset }: ResetButtonProps) {
	console.log('...rest-button rendering...');
	return (
		<>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={onReset}
			>
				{text}
			</button>
		</>
	);
}

export default memo(ResetButton);
