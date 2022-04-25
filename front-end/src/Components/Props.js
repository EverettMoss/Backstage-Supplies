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
                
                {
                    listOfProps.map((prop) => {
                        return(
                            <div>
                                Item - {prop.name} | Material - {prop.material}
                            </div>


                        );
                    })
                }


            </div>
        </div>
    )
}

export default Props;

