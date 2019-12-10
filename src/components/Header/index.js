import React from 'react';

import { Toolbar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import './style.css';

export default function Header() {
	return (
		<div style={{ textAlign: 'right' }}>
			<Toolbar>
				<HomeIcon />
				<div className="label-left">
					<Typography>Veturus Sports</Typography>
				</div>
				<div className="label-right">
					<Typography>Jason Boume</Typography>
				</div>
			</Toolbar>
		</div>
	);
}
