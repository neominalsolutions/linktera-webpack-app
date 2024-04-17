import React, { useReducer } from 'react';
import ThemeReducer, { ThemeActionTypes, ThemeState } from './ThemeReducer';
// state değişiken readOnly güncel state erişimizi sağlar
// dispatch ise state değişikliklerini yönetmek için kullanılan bir function.
function UseReducerSample() {
	// her bir omponente giridliğinde state initial state üzerinden tekrardan çalışır.
	const initialState: ThemeState = {
		foreColor: 'black',
		bgColor: 'white',
	};

	const [state, dispatch] = useReducer(ThemeReducer, initialState);

	const onForeColorSelect = (e: any) => {
		console.log('e-fore', e);
		dispatch({
			type: ThemeActionTypes.THEME_FORECOLOR,
			payload: { bgColor: state.bgColor, foreColor: e.target.value },
		});
	};

	const onBackColorSelect = (e: any) => {
		console.log('e-back', e);
		dispatch({
			type: ThemeActionTypes.THEME_BACKCOLOR,
			payload: { bgColor: e.target.value, foreColor: state.foreColor },
		});
	};

	return (
		<>
			<div
				style={{
					color: state.foreColor,
					backgroundColor: state.bgColor,
					padding: '1rem',
				}}
			>
				<select
					defaultValue="-1"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
					onChange={onForeColorSelect}
				>
					<option value="-1" disabled>
						Select Fore Color
					</option>
					<option value="orange">Orange</option>
					<option value="purple">Purple</option>
					<option value="yellow">Yellow</option>
				</select>
				<hr></hr>
				<select
					defaultValue="-1"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					onChange={onBackColorSelect}
				>
					<option value="-1" disabled>
						Select Fore Color
					</option>
					<option value="darkblue">Blue</option>
					<option value="darkgreen">Green</option>
					<option value="darkgray">Gray</option>
				</select>
				<p>Deneme</p>
			</div>
		</>
	);
}
export default UseReducerSample;
