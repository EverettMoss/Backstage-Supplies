import React from "react";
import Axios from "axios";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Modal, Form } from 'react-bootstrap'

function Props() {
    const [listOfProps, setlistOfProps] = useState([]);
    const [name, setName] = useState("");
    const [material, setMaterial] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        Axios.get("http://localhost:8000/getProps").then((response) => {
            setlistOfProps(response.data);
        })

    }, [])

    const createProp = () => {
        Axios.post("http://localhost:8000/createProp", {
            name,
            material
        }).then((response) => {
            setlistOfProps([
                ...listOfProps,
                { name: name },
                { material: material }
            ])
        });

    };

    return (
        <div>
            <h1>Welcome to Props Page!</h1>
            <div>
                <Button variant="outline-secondary" onClick={handleShow}>
                    Create Prop
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Prop</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="name"
                                    onChange={(event) => {setName(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Material</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="material"
                                    onChange={(event) => {setMaterial(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>
                    
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={createProp}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>

            <div className="PropsDisplay">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Material</th>
                            <th>Picture</th>
                            <th>Location</th>
                            <th>Use Log</th>
                            <th>Mending Log</th>
                            <th>To-Do</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listOfProps.map((prop) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{prop.name}</td>
                                            <td>{prop.material}</td>
                                        </tr>
                                    </>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Props;

