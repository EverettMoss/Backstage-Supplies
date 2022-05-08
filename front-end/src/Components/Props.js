import React from "react";
import Axios from "axios";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Modal, Form } from 'react-bootstrap'


function Props() {
    const [listOfProps, setlistOfProps] = useState([]);
    const [itemCode, setItemCode] = useState("");
    const [name, setName] = useState("");
    const [propType, setPropType] = useState("");
    const [material, setMaterial] = useState("");
    const [picture, setPicture] = useState("");
    const [checkedOutBy, setCheckedOutBy] = useState("");
    const [location, setLocation] = useState("");
    const [useLog, setUseLog] = useState("");
    const [lastCleaned, setLastCleaned] = useState("");
    const [mending, setMending] = useState("");
    const [toDo, setToDo] = useState("");
    const [notes, setNotes] = useState("");

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
            itemCode,
            name,
            propType,
            material,
            picture,
            checkedOutBy,
            location,
            useLog,
            lastCleaned,
            mending,
            toDo,
            notes
        }).then((response) => {
            setlistOfProps([
                ...listOfProps,
                { itemCode: itemCode },
                { name: name },
                { propType: propType },
                { material: material },
                { picture: picture },
                { checkedOutBy: checkedOutBy },
                { location: location },
                { useLog: useLog },
                { lastCleaned: lastCleaned },
                { mending: mending },
                { toDo: toDo },
                { notes: notes }
            ])
        });
        handleClose();

    };

    const deleteprop = (id) => {
        Axios.delete(`http://localhost:8000/deleteProp/${id}`).then( () => {
            setlistOfProps(listOfProps.filter( (value) => {
                return value._id != id;
            }))
        });
    };

    const updateprop = (id) => {
        Axios.patch(`http://localhost:8000/updateProp/${id}`)
    };

    return (
        <div>
            <h1>Welcome to Props Page!</h1>
            <div>
                <Button className="create-button" variant="outline-secondary" onClick={handleShow}>
                    Create Prop
                </Button>

                <Modal show={show} onHide={handleClose} className="create-prop">
                    <Modal.Header closeButton>
                        <Modal.Title>New Prop</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Item Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="item code"
                                    onChange={(event) => { setItemCode(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    onChange={(event) => { setName(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Prop Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="prop type"
                                    onChange={(event) => { setPropType(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Material</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="material"
                                    onChange={(event) => { setMaterial(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Picture</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="picture"
                                    onChange={(event) => { setPicture(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Checked Out By</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="checked out by"
                                    onChange={(event) => {setCheckedOutBy(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="location"
                                    onChange={(event) => { setLocation(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Use Log</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="use log"
                                    onChange={(event) => { setUseLog(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Cleaned</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="last cleaned"
                                    onChange={(event) => { setLastCleaned(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mending</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="mending log"
                                    onChange={(event) => { setMending(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>To-Do</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="to do"
                                    onChange={(event) => { setToDo(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Notes</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="notes"
                                    onChange={(event) => { setNotes(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={createProp}>
                            Create Prop
                        </Button>
                    </Modal.Footer>
                </Modal>

                

            </div>

            <div className="PropsDisplay">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Item Code</th>
                            <th>Name</th>
                            <th>Prop Type</th>
                            <th>Material</th>
                            <th>Picture</th>
                            <th>Checked Out By</th>
                            <th>Location</th>
                            <th>Use Log</th>
                            <th>Last Cleaned</th>
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
                                            <td> <Button variant="outline-success" onClick={ () => deleteprop(prop._id) } >Delete</Button>  <Button variant="outline-success" onClick={handleShow}>Edit</Button> </td>
                                            <td>{prop.itemCode}</td>
                                            <td>{prop.name}</td>
                                            <td>{prop.propType}</td>
                                            <td>{prop.material}</td>
                                            <td>{prop.picture}</td>
                                            <td>{prop.checkedOutBy}</td>
                                            <td>{prop.location}</td>
                                            <td>{prop.useLog}</td>
                                            <td>{prop.lastCleaned}</td>
                                            <td>{prop.mending}</td>
                                            <td>{prop.toDo}</td>
                                            <td>{prop.notes}</td>
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

