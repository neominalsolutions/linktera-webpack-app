import React, { useState } from 'react';
import DOMPurify from 'dompurify';

function ReactXXXSample() {
	const htmlContent = `<p>deneme html</p>`;
	const hrefElement = `<a href="javascript:alert('XSS')">Deneme</a>`;

	`<img onerror="console.log(localStorage.getItem('accessToken'))" src="" alt="img" />`;

	const [title, setTitle] = useState('');

	const onChange = (e: any) => {
		setTitle(DOMPurify.sanitize(e.target.value));
	};

	return (
		<>
			<div className="p-10">
				<input type="text" onChange={onChange} />
				<div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
				<div dangerouslySetInnerHTML={{ __html: hrefElement }}></div>

				<div dangerouslySetInnerHTML={{ __html: title }}></div>
			</div>
		</>
	);
}

export default ReactXXXSample;
