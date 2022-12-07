import axios from 'axios';
import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const DeleteModal = ({ handleClose, title, show, id, refreshData, deleteProduct }) => {


    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Obrisi proizvod {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Da li ste sigurni?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zatvori
                    </Button>
                    <Button variant="danger" onClick={() => deleteProduct(id)}>
                        Obrisi
                    </Button>
                </Modal.Footer>
            </Modal></div>
    )
}

export default DeleteModal