import React from "react";
import Axios from "axios";
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Modal, Form } from 'react-bootstrap'

function Costumes(){
    const [listOfCostumes, setlistOfCostumes] = useState([]);
    const [name, setName] = useState("");
    const [material, setMaterial] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [clothingType, setClothingType] = useState("");
    const [location, setLocation] = useState("");
    const [picture, setPicture] = useState("");
    const [useLog, setUseLog] = useState("");
    const [lastCleaned, setlastCleaned] = useState("");
    const [mending, setMending] = useState("");
    const [toDo, setToDo] = useState("");
    const [notes, setNotes] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        Axios.get("http://localhost:8000/getCostumes").then((response) => {
            setlistOfCostumes(response.data);
        })

    }, [])

    const createCostume = () => {
        Axios.post("http://localhost:8000/createCostume", {
            name,
            material,
            size,
            color,
            clothingType,
            location,
            picture,
            useLog,
            lastCleaned,
            mending,
            toDo,
            notes

        }).then((response) => {
            setlistOfCostumes([
                ...listOfCostumes,
                { name: name },
                { material: material },
                { size: size },
                { color: color },
                { clothingType: clothingType },
                { location: location },
                { picture: picture },
                { useLog: useLog },
                { name: name },
                { lastCleaned: lastCleaned },
                { mending: mending },
                { toDo: toDo },
                { notes: notes }  
            ])
        });

        handleClose();

    };

    return(
        <div>
            <h1>Welcome to Costumes Page!</h1>
            <div className="CostumeDisplay">
            <Button variant="outline-secondary" onClick={handleShow}>Add Costume</Button>

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
                                    placeholder="name"
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

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Size</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="size"
                                    onChange={(event) => {setSize(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="color"
                                    onChange={(event) => {setColor(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Clothing Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="clothing type"
                                    onChange={(event) => {setClothingType(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="location"
                                    onChange={(event) => {setLocation(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Picture</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="pic"
                                    onChange={(event) => {setMending(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Use Log</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="use logs"
                                    onChange={(event) => {setMending(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mending</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="mending log"
                                    onChange={(event) => {setMending(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>To-Do</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="to do"
                                    onChange={(event) => {setToDo(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Notes</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder ="notes"
                                    onChange={(event) => {setNotes(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>
                    
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={createCostume}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Material</th>
                        <th>Size</th>
                        <th>Color</th>
                        <th>Clothing Type</th>
                        <th>Location</th>
                        <th>Picture</th>
                        <th>Use Log</th>
                        <th>Last Cleaned</th>
                        <th>Mending Log</th>
                        <th>To-Do</th>
                        <th>Notes</th>
                    </tr>
                </thead>  
                <tbody>
                {
                    listOfCostumes.map((costume) => {
                        return(
                            <>
                            <tr>
                                <td>{costume.name}</td>
                                <td>{costume.material}</td>
                                <td>{costume.size}</td>
                                <td>{costume.color}</td>
                                <td>{costume.clothingType}</td>
                                <td>{costume.location}</td>
                                <td>{costume.picture}</td>
                                <td>{costume.useLogs}</td>
                                <td>{costume.lastCleaned}</td>
                                <td>{costume.mending}</td>
                                <td>{costume.toDO}</td>
                                <td>{costume.notes}</td>
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

export default Costumes;