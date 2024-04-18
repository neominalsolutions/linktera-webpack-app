import * as React from 'react';
import mi8 from '../assets/images/mi8.jpg';
import { Helmet } from 'react-helmet-async';

function AboutPage() {
	return (
		<>
			<Helmet>
				<title>Hakkımızda</title>
				<meta name="about" content="About Us, ReactJS"></meta>
			</Helmet>
			<h1 className="text-2xl font-bold">About Page3</h1>

			<div className="p-10">
				<img className="object-cover" src={mi8} alt="image" />
			</div>
		</>
	);
}

export default AboutPage;
