import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/index';
import Navigate from '../../components/Breadchumbs/index';
import Title from '../../components/Title/index';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';

import apiUser from '../../services/apiUser';
import apiPosts from '../../services/apiPosts';
import apiPhotos from '../../services/apiPhotos';
import apiAlbums from '../../services/apiAlbums';

export default function Users() {
	const [ users, setUsers ] = useState([]);
	const [ posts, setPosts ] = useState([]);
	const [ photos, setPhotos ] = useState([]);
	const [ albums, setAlbums ] = useState([]);

	useEffect(() => {
		async function loadUsers() {
			const responseUsers = await apiUser.get();
			setUsers(responseUsers.data);

			const responsePosts = await apiPosts.get();
			setPosts(responsePosts.data);

			const responsePhotos = await apiPhotos.get();
			setPhotos(responsePhotos.data);

			const responseAlbums = await apiAlbums.get();
			setAlbums(responseAlbums.data);
		}
		loadUsers();
	}, []);

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

			lineUser.push({
				username: u['username'],
				name: u['name'],
				city: u['address']['city'],
				ride: 'aleatory',
				day: 'aleatory',
				posts: numPosts,
				albums: numAlbums,
				photos: numPhotos
			});
		}

		return lineUser;
	}

	createLine();

	function renderUsers() {
		return lineUser.map((user) => (
			<tr key={user.name} bgcolor="" className="">
				<td>{user.username}</td>
				<td>{user.name}</td>
				<td style={{ color: '#2EFEF7' }}>{user.email}</td>
				<td style={{ color: '#2EFEF7' }}>{user.city}</td>
				<td>{user.ride}</td>
				<td>{user.day}</td>
				<td style={{ color: '#2EFEF7' }}>{user.posts}</td>
				<td style={{ color: '#2EFEF7' }}>{user.albums}</td>
				<td>{user.photos}</td>
				<td />
				<td>
					<div>
						<DeleteIcon />
					</div>
				</td>
			</tr>
		));
	}

	return (
		<div>
			<Header />
			<Navigate />
			<div style={{ height: 110, background: '#2EFEF7' }} />
			<div className="container fixed">
				<Title title="Users" other="pesquisar" />
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
	);
}
