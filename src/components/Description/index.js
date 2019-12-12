import React from 'react';

import './style.css';

export default function Description({ img, desc, title }) {
	return (
		<div className="icon">
			<div className="title">{title}</div>
			<div className="corpo">
				<div className="img">{img}</div>
				<div className="desc">{desc}</div>
			</div>
		</div>
	);
}
