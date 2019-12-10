import React from 'react';

import { TextField } from '@material-ui/core';

export default function Title({ title, other }) {
	return (
		<div style={{ display: 'flex', padding: 20 }}>
			<label style={{ fontSize: 30 }}>{title}</label>
			<hr style={{ width: 500, height: 10 }} />
			{other ? <TextField id="outlined-basic" label={other} variant="outlined" size="small" /> : null}
		</div>
	);
}
