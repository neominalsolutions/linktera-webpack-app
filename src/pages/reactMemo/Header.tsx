import React, { memo } from 'react';

type HeaderProps = {
	title?: string;
};

// child Component
const Header = ({ title }: HeaderProps) => {
	console.log('header rendering...');

	return <>Title: {title}</>;
};

export default memo(Header);
