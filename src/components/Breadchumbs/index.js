import React from 'react';

import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';

export default function Nagivate({ user, newUser }) {
	return (
		<div style={{ background: '#F9F9F9', padding: 5 }}>
			<Breadcrumbs
				className="container"
				separator={<NavigateNextIcon fontSize="small" />}
				aria-label="breadcrumb"
			>
				<HomeIcon style={{ color: '#3AC5A9' }} fontSize="small" />
				{user}
				{newUser}
			</Breadcrumbs>
		</div>
	);
}
