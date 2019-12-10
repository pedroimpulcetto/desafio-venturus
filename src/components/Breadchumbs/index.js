import React from 'react';

import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';

export default function Nagivate() {
	return (
		<div style={{ background: '#CEF6F5', padding: 5 }}>
			<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
				<HomeIcon style={{ color: '#2EFEF7' }} fontSize="small" />
				<Link color="inherit" href="#">
					Users
				</Link>
				<Link color="inherit" href="#">
					New
				</Link>
			</Breadcrumbs>
		</div>
	);
}
