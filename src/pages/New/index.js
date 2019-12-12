import React, { useState } from 'react';

import Header from '../../components/Header/index';
import Navigate from '../../components/Breadchumbs/index';
import Title from '../../components/Title/index';

import Description from '../../components/Description/index';

import './style.css';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Radio, RadioGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faLifeRing } from '@fortawesome/free-regular-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import apiRides from '../../services/apiRides';

export default function New() {
	const [ newUser, setNewUser ] = useState([]);

	function handleChange(event) {
		let { name, value } = event.target;
		setNewUser({ ...newUser, [name]: value });
	}

	return (
		<main>
			<Header user={'Leanne Graham'} />
			<Navigate
				user={
					<Link color="inherit" to="/users">
						User
					</Link>
				}
				newUser={
					<Link color="inherit" to="/new">
						New
					</Link>
				}
			/>
			<div className="container">
				<Title title="Registration" />
			</div>
			<div className="container help">
				<div>
					<Description
						title="Need help?"
						img={<FontAwesomeIcon icon={faLifeRing} size="4x" color="#3ac5a9" />}
						desc="Lorem ipsum dolor sit amet, consectetur
						adipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua."
					/>
					<Description
						title="Why register"
						img={<FontAwesomeIcon icon={faHeartbeat} size="4x" color="#3ac5a9" />}
						desc="Lorem ipsum dolor sit amet, consectetur
						adipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua."
					/>
					<Description
						title="What people are saying..."
						img={<FontAwesomeIcon icon={faSmile} size="4x" color="#3ac5a9" />}
						desc="Lorem ipsum dolor sit amet, consectetur
						adipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua."
					/>
				</div>
			</div>
			<hr style={{ width: '80%', height: 40 }} />
			<div className="formulario container">
				<div className="form-left">
					<Form>
						<FormGroup>
							<Label for="username">Username</Label>
							<Input type="text" name="username" id="username" onChange={handleChange} />
						</FormGroup>
						<FormGroup>
							<Label for="name">Name</Label>
							<Input type="text" name="text" id="name" onChange={handleChange} />
						</FormGroup>
						<FormGroup>
							<Label for="email">E-mail</Label>
							<Input type="email" name="email" id="email" onChange={handleChange} />
						</FormGroup>
					</Form>
				</div>

				<div className="form-right">
					<Form>
						<FormGroup>
							<Label for="city">City</Label>
							<Input type="text" name="city" id="city" onChange={handleChange} />
						</FormGroup>
						<FormGroup>
							<Label for="ride">Ride in group?</Label>
							<RadioGroup aria-label="ride" name="ride">
								<div>
									<FormControlLabel
										value="always"
										control={<Radio onChange={handleChange} />}
										label="Always"
									/>
									<FormControlLabel
										value="sometimes"
										control={<Radio onChange={handleChange} />}
										label="Sometimes"
									/>
									<FormControlLabel
										value="never"
										control={<Radio onChange={handleChange} />}
										label="Never"
									/>
								</div>
							</RadioGroup>
						</FormGroup>
						<div>
							<FormGroup aria-label="days">
								<div>
									<Label for="days">Days of the week</Label>
								</div>
								<FormControlLabel
									value="sun"
									control={<Checkbox onChange={handleChange} />}
									label="Sun"
								/>
								<FormControlLabel
									value="mon"
									control={<Checkbox onChange={handleChange} />}
									label="Mon"
								/>
								<FormControlLabel
									value="tue"
									control={<Checkbox onChange={handleChange} />}
									label="Tue"
								/>
								<FormControlLabel
									value="wed"
									control={<Checkbox onChange={handleChange} />}
									label="Wed"
								/>
								<FormControlLabel
									value="thu"
									control={<Checkbox onChange={handleChange} />}
									label="Thu"
								/>
								<FormControlLabel
									value="fri"
									control={<Checkbox onChange={handleChange} />}
									label="Fri"
								/>
								<FormControlLabel
									value="sat"
									control={<Checkbox onChange={handleChange} />}
									label="Sat"
								/>
							</FormGroup>
						</div>
					</Form>
				</div>
				<div>
					<Button
						className="space"
						variant="contained"
						style={{ backgroundColor: '#3AC5A9', marginRight: 20 }}
					>
						Save
					</Button>
					<Button className="space" variant="contained">
						Discard
					</Button>
				</div>
			</div>
		</main>
	);
}
