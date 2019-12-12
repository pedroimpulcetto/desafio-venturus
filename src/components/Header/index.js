import React, { useEffect, useState, useRef } from 'react';

import { Grow, Popper, Button, Paper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function Header({ user }) {
	const [ open, setOpen ] = useState(false);
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = useRef(open);
	useEffect(
		() => {
			if (prevOpen.current === true && open === false) {
				anchorRef.current.focus();
			}

			prevOpen.current = open;
		},
		[ open ]
	);

	return (
		<div className="header">
			<ul className="linha">
				<li className="logo">
					<FontAwesomeIcon icon={faQuestionCircle} size="2x" color="#3ac5a9" />
					<strong>Venturus Sports</strong>
				</li>
				{user ? (
					<li className="user">
						<Button
							ref={anchorRef}
							aria-controls={open ? 'menu-list-grow' : undefined}
							aria-haspopup="true"
							onClick={handleToggle}
						>
							{user}
							<FontAwesomeIcon icon={faChevronDown} />
						</Button>
						<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow
									{...TransitionProps}
									style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
								>
									<Paper>
										<ClickAwayListener onClickAway={handleClose}>
											<MenuList
												autoFocusItem={open}
												id="menu-list-grow"
												onKeyDown={handleListKeyDown}
											>
												<MenuItem onClick={handleClose}>Friends List</MenuItem>
												<MenuItem onClick={handleClose}>Saved Items</MenuItem>
												<MenuItem onClick={handleClose}>Notifications</MenuItem>
												<MenuItem onClick={handleClose}>User Preferences</MenuItem>
												<hr />
												<MenuItem onClick={handleClose}>Logout</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
					</li>
				) : null}
			</ul>
		</div>
	);
}
