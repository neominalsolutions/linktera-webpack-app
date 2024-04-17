// Component içerisinde merkezi bir state yönetim yapmak istersek Local State Management için UseReducer Hook kulllanabiliriz.
// Component Domdan çıktığında veya sayfa değiştirdiğimizde local bir state olması sebebi ile state initial state dönücek.

export type ThemeState = {
	foreColor: string;
	bgColor: string;
};

export enum ThemeActionTypes {
	'THEME_FORECOLOR',
	'THEME_BACKCOLOR',
}

export type ThemeAction = {
	type: ThemeActionTypes;
	payload: ThemeState; // Kullanıcının component ile etkileşimi sonucunda reducer'a gönderilen değer.
};

// State değişikliklerini yapmak için bir reducer tanımı yapıyoruz.

function ThemeReducer(state: ThemeState, action: ThemeAction) {
	switch (action.type) {
		case ThemeActionTypes.THEME_FORECOLOR:
			// state güncelleme logic kod
			state.foreColor = action.payload.foreColor;
			break;
		case ThemeActionTypes.THEME_BACKCOLOR:
			state.bgColor = action.payload.bgColor;
			break;
		default:
			break;
	}

	return { ...state }; // state güncel değerini return ettik.
}

export default ThemeReducer;
