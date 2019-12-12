import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label } from 'reactstrap';

export default function ModalDeletar(props) {
	const [ user ] = useState(props.user);

	console.log(user);
	return (
		<Modal isOpen={true}>
			<ModalHeader className={'modal-title text-white bg-danger'}>Alert!</ModalHeader>
			<ModalBody>
				<Form>
					<Label for="">
						<h5>Do you really want to delete this user?</h5>
					</Label>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button color="danger" onClick={() => props.onSave(user)}>
					Delete
				</Button>
				<Button type="reset" className="btn btn-secondary" onClick={props.toggle}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	);
}
