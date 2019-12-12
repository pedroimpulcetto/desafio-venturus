import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/index';
import Navigate from '../../components/Breadchumbs/index';
import Title from '../../components/Title/index';
import Modal from '../../components/Modal/modalDelete';
import { Link } from 'react-router-dom';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faPuzzlePiece, faMapSigns } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import apiRides from '../../services/apiRides';

export default function Users() {
	// declarando estados
	const [ users, setUsers ] = useState([]);
	const [ posts, setPosts ] = useState([]);
	const [ photos, setPhotos ] = useState([]);
	const [ albums, setAlbums ] = useState([]);
	const [ rides, setRides ] = useState([]);
	const [ itemDelete, setItemDelete ] = useState([]);

	// modal
	const [ modal, setModal ] = useState(false);
	const toggle = () => setModal(!modal);

	// recebendo os resultados dos endpoints
	useEffect(() => {
		async function loadUsers() {
			const responseUsers = await api.get('users/');
			setUsers(responseUsers.data);

			const responsePosts = await api.get('posts/');
			setPosts(responsePosts.data);

			const responsePhotos = await api.get('photos/');
			setPhotos(responsePhotos.data);

			const responseAlbums = await api.get('albums/');
			setAlbums(responseAlbums.data);

			const responseRides = await apiRides.get();
			setRides(responseRides.data);
		}
		loadUsers();
	}, []);

	// criando uma lista com os valores recebidos dos endpoints para poder criar a Table
	let lineUser = [];
	function createLine() {
		for (let user in users) {
			let u = users[user];
			let id = users[user]['id'];
			let numPosts = 0;
			let numAlbums = 0;
			let numPhotos = 0;

			for (let post in posts) {
				if (posts[post]['userId'] === id) {
					numPosts += 1;
				}
			}

			for (let album in albums) {
				if (albums[album]['userId'] === id) {
					numAlbums += 1;
				}
				for (let photo in photos) {
					if (photos[photo]['albumId'] === albums[album]['id']) {
						numPhotos += 1;
					}
				}
			}

			for (let ride in rides) {
				if (rides[ride]['id'] === id) {
					lineUser.push({
						id: u['id'],
						username: u['username'],
						name: u['name'],
						email: u['email'],
						city: u['address']['city'],
						ride: rides[ride]['ride'],
						day: rides[ride]['day'],
						posts: numPosts,
						albums: numAlbums,
						photos: numPhotos
					});
				}
			}
		}
		return lineUser;
	}

	createLine();

	// funcao para chamar o modal deletar
	function deleteItem(user) {
		toggle();
		setItemDelete(user);
	}

	// funcao para confirmar delete
	function handleDelete(user) {
		toggle();
		api.delete(`posts/${user.id}/`).then((res) => refreshList());
	}

	function refreshList() {
		api.get('users/');
	}

	// renderizando as linhas de usuarios na table
	function renderUsers() {
		return lineUser.map((user) => (
			<tr key={user.name} bgcolor="" className="hover">
				<td>{user.username}</td>
				<td>{user.name}</td>
				<td style={{ color: '#3AC5A9' }}>{user.email}</td>
				<td style={{ color: '#3AC5A9' }}>{user.city}</td>
				<td>{user.ride}</td>
				<td>{user.day}</td>
				<td style={{ color: '#3AC5A9' }}>{user.posts}</td>
				<td style={{ color: '#3AC5A9' }}>{user.albums}</td>
				<td>{user.photos}</td>
				<td className="hover-action">
					<div>
						<IconButton aria-label="delete" onClick={() => deleteItem(user)}>
							<DeleteIcon />
						</IconButton>
					</div>
				</td>
			</tr>
		));
	}

	return (
		<main>
			<div>
				<Header user="Leanne Graham" />
				<Navigate
					user={
						<Link color="inherit" to="/users">
							User
						</Link>
					}
				/>
				<div style={{ height: 110, background: '#BBEBE1' }}>
					<div className="container">
						<div className="icon">
							<FontAwesomeIcon icon={faPuzzlePiece} size="3x" color="#3ac5a9" />
							<div className="icon">
								<div className="label">Sport type</div>
								<div className="strong">Cycling</div>
							</div>
						</div>
						<div className="icon">
							<FontAwesomeIcon icon={faTrophy} size="3x" color="#3ac5a9" />
							<div className="icon">
								<div className="label">Mode</div>
								<div className="strong">Advanced</div>
							</div>
						</div>
						<div className="icon">
							<FontAwesomeIcon icon={faMapSigns} size="3x" color="#3ac5a9" />
							<div className="icon">
								<div className="label">Route</div>
								<div className="strong">30 miles</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<Title title="Users" other="Filter table content" />
				</div>
				<div className="container fixed">
					<Table size="sm" className="table-borderless table-hover table-striped">
						<thead className="thead">
							<tr>
								<th>Username</th>
								<th>Name</th>
								<th>E-mail</th>
								<th>City</th>
								<th>Ride in group</th>
								<th>Day of the week</th>
								<th>Posts</th>
								<th>Albums</th>
								<th>Photos</th>
							</tr>
						</thead>
						<tbody>{renderUsers()}</tbody>
					</Table>
				</div>
			</div>
			{modal ? <Modal toggle={toggle} onSave={handleDelete} user={itemDelete} /> : null}
		</main>
	);
}
