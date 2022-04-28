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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        Axios.get("http://localhost:8000/getCostumes").then((response) => {
            setlistOfCostumes(response.data);
        })

    }, [])

    return(
        <div>
            <h1>Welcome to Costumes Page!</h1>
            <div className="CostumeDisplay">
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