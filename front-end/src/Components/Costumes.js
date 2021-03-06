import React from "react";
import Axios from "axios";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Modal, Form } from 'react-bootstrap'

var currID = "";
var currCostume = [];

function Costumes() {
    const [listOfCostumes, setlistOfCostumes] = useState([]);
    const [itemCode, setItemCode] = useState("");
    const [name, setName] = useState("");
    const [checkedOutBy, setCheckedOutBy] = useState("");
    const [material, setMaterial] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [timePeriod, setTimePeriod] = useState("");
    const [clothingType, setClothingType] = useState("");
    const [location, setLocation] = useState("");
    const [picture, setPicture] = useState("");
    const [useLog, setUseLog] = useState("");
    const [lastCleaned, setLastCleaned] = useState("");
    const [mending, setMending] = useState("");
    const [toDo, setToDo] = useState("");
    const [notes, setNotes] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // edit costume - modal
    const [showEDIT, setShowEDIT] = useState(false);
    const handleCloseEDIT = () => setShowEDIT(false);
    const handleShowEDIT = (costume) => {
        setShowEDIT(true);
        currID = costume._id;
        currCostume=costume;
    }

    useEffect(() => {
        Axios.get("http://localhost:8000/getCostumes").then((response) => {
            setlistOfCostumes(response.data);
        })

    }, [])

    const createCostume = () => {
        Axios.post("http://localhost:8000/createCostume", {
            itemCode,
            name,
            checkedOutBy,
            material,
            size,
            color,
            timePeriod,
            clothingType,
            location,
            picture,
            useLog,
            mending,
            toDo,
            notes

        }).then((response) => {
            setlistOfCostumes([
                ...listOfCostumes,
                { itemCode: itemCode },
                { name: name },
                { checkedOutBy: checkedOutBy },
                { material: material },
                { size: size },
                { color: color },
                { timePeriod: timePeriod },
                { clothingType: clothingType },
                { location: location },
                { picture: picture },
                { useLog: useLog },
                { mending: mending },
                { toDo: toDo },
                { notes: notes }
            ])
        });

        handleClose();

    };

    const deletecostume = (id) => {
        Axios.delete(`http://localhost:8000/deletecostume/${id}`).then( () => {
            setlistOfCostumes(listOfCostumes.filter( (value) => {
                return value._id != id;
            }))
        });
    };

    const updatecostume = (id) => {
        console.log(currID)
        Axios.put(`http://localhost:8000/updatecostume/${currID}`, {
            "notes": "costume edited"
        });
        handleCloseEDIT();
    };

    return (
        <div>
            <h1>Welcome to Costumes Page!</h1>
            <div data-testid="costume-1" className="CostumeDisplay">
                <Button className="create-button" variant="outline-secondary" onClick={handleShow}>Add Costume</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Costume</Modal.Title>
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
                                <Form.Label>Checked Out By</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="checked out by"
                                    onChange={(event) => {setCheckedOutBy(event.target.value);}}
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
                                <Form.Label>Size</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="size"
                                    onChange={(event) => { setSize(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="color"
                                    onChange={(event) => { setColor(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Time Period</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="time period"
                                    onChange={(event) => {setTimePeriod(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Clothing Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="clothing type"
                                    onChange={(event) => { setClothingType(event.target.value); }}
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
                                <Form.Label>Picture</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="pic"
                                    onChange={(event) => { setPicture(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Use Log</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="use logs"
                                    onChange={(event) => { setUseLog(event.target.value); }}
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
                        <Button variant="primary" onClick={createCostume}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showEDIT} onHide={handleCloseEDIT}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Costume</Modal.Title>
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
                                <Form.Label>Checked Out By</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="checked out by"
                                    onChange={(event) => {setCheckedOutBy(event.target.value);}}
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
                                <Form.Label>Size</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="size"
                                    onChange={(event) => { setSize(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="color"
                                    onChange={(event) => { setColor(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Time Period</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="time period"
                                    onChange={(event) => {setTimePeriod(event.target.value);}}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Clothing Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="clothing type"
                                    onChange={(event) => { setClothingType(event.target.value); }}
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
                                <Form.Label>Picture</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="pic"
                                    onChange={(event) => { setPicture(event.target.value); }}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Use Log</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="use logs"
                                    onChange={(event) => { setUseLog(event.target.value); }}
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
                        <Button variant="secondary" onClick={handleCloseEDIT}>
                            Close
                        </Button>
                        <Button variant="success" onClick={() => updatecostume(currID)}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Item Code</th>
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
                                return (
                                    <>
                                        <tr>
                                            <td><Button variant="outline-success" onClick={ () => deletecostume(costume._id) }>Delete</Button>  <Button variant="outline-success" onClick={ () => handleShowEDIT(costume) }>Edit</Button></td>
                                            <td>{costume.itemCode}</td>
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
