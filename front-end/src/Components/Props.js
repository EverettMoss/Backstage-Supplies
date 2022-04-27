import React from "react";
import Axios from "axios";
import { useState,useEffect } from 'react';

function Props(){
    const [listOfProps, setlistOfProps] = useState([]);
    const [name, setName] = useState("");
    const [material, setMaterial] = useState("");

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
                {name:name},
                {material:material}
            ])
        });

    };

    return(
        <div>
            <h1>Welcome to Props Page!</h1>

            <div>
                <input type="text" placeholder="Enter Name" onChange={(event) =>  { 
                    setName(event.target.value);
                }}/>
                <input type="text" placeholder="Enter Material" onChange={(event) =>  { 
                    setMaterial(event.target.value);
                }}/>
                <button onClick={createProp}>Create Prop</button>
            </div>
            
            <div className="PropsDisplay">
            <table className="table table-striped">
                <thead className="thead-light">
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
                
                {
                    listOfProps.map((prop) => {
                        return(
                            <>
                            <tr>
                                <td>{prop.name}</td>
                                <td>{prop.material}</td>
                            </tr>
                            </>


                        );
                    })
                }

            </table>
            </div>
        </div>
    )
}

export default Props;

