import React from "react";
import Axios from "axios";
import { useState,useEffect } from 'react';

function Costumes(){
    const [listOfCostumes, setlistOfCostumes] = useState([]);
    const [name, setName] = useState("");
    const [material, setMaterial] = useState("");
    

    useEffect(() => {
        Axios.get("http://localhost:8000/getCostumes").then((response) => {
            setlistOfCostumes(response.data);
        })

    }, [])

    return(
        <div>
            <h1>Welcome to Costumes Page!</h1>

            <div className="CostumeDisplay">
                
                {
                    listOfCostumes.map((costume) => {
                        return(
                            <div>
                                Item - {costume.name} | Material - {costume.material}
                            </div>


                        );
                    })
                }


            </div>
        

        </div>
    )
}

export default Costumes;