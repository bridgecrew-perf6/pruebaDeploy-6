import React, { useState,useEffect } from 'react';
import { petApi } from "../actions/petApi";
import Petform from '../components/petForm';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';



const Main = () => {
   
    const [pets,setPets] = useState();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    const getPets = async() => {
        const response = await petApi("http://localhost:8000/api/pets");
        console.log(response);
        setPets(response.pets);
    }

    useEffect(() => {
        getPets();
    }, []);

    const crearPet = (pet) => {
        axios.post("http://localhost:8000/api/pets/new", pet)
            .then(res => {
                console.log("pet creada");
                setPets([...pets,res.data.pet])
            })
            .catch(err=>{
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                console.log(errorArr)
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
        }

    

    return (
        <div>
            <div>
                <h1>Add pet to shelter :</h1>

                <h3>Know a pet needing a home ?</h3>
                {errors?.map((err, i) => <p key={i}>{err}</p>)}
                <Petform onSubmitProp = {crearPet}></Petform>
            </div>
            <div>
                <h1>Pet Shelter</h1>
                <h5>These pets are looking for a good home</h5>
            </div>
            <div>
                <Table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pets?.map((pet,i)=>{
                        return(     
                        <tr key={i}>   
                            <td> {pet?.petName} </td> 
                            <td>{pet?.petType}</td>
                            <td><button onClick={()=> navigate("/api/pets/update/"+pet._id)} className="btn btn-primary border border-dark">Details and Edit</button></td>
                        </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
            
        </div>
    );
}

export default Main;
