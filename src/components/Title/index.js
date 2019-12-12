import React from 'react';

import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function Title({ title, other }) {
	return (
		<div style={{ display: 'flex', paddingTop: 20, paddingBottom: 20 }}>
			<label style={{ fontSize: 30 }}>{title}</label>
			<hr style={{ width: 500, height: 10 }} />
			{other ? (
				<main>
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							)
						}}
						id="outlined-basic"
						label={other}
						variant="outlined"
						size="small"
					/>
				</main>
			) : null}
		</div>
	);
}
