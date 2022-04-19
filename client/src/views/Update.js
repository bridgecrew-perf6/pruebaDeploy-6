import React,{useState,useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { petApi } from "../actions/petApi";
import Petform from '../components/petForm';

const Update = () => {

    const { id } = useParams();
    const [pet, setPet] = useState();
    const navigate = useNavigate();
    const [count, setCount] = useState(0)

    const getPet = async() => {
        const response = await petApi("http://localhost:8000/api/pets/" + id);
        console.log(response.pet);
        setPet(response.pet);
    }

    useEffect(() => {
        getPet();
    }, []);

    const editarPet = (pet) => {
        fetch("http://localhost:8000/api/pets/update/"+id, {
        method: "PUT",
        body: JSON.stringify(pet),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("pelicula editada");
          console.log(res);
          navigate("/")
        });
    }

    const incrementCount = () => {
        setCount(count + 1)
    }

    const eliminarPet = (idPet) => {
        fetch('http://localhost:8000/api/pets/delete/'+idPet ,{
            method:"DELETE",
        })
        .then(res => res.text())
        .then((res) => {
            getPet();
            navigate("/")
        })
    }

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <button onClick={()=>navigate("/")} >VOLVER</button>
                <h3>Detail about : {pet?.petName}</h3>
                <button onClick={()=> eliminarPet(pet?._id)} className="btn btn-danger border border-dark m-4">Adopt {pet?.petName}</button>
            </div>
            <div className="card">
                <h4 className='text-start m-2'>Pet type: {pet?.petType}</h4>
                <h4 className='text-start m-2'>Pet Description: {pet?.petDescription}</h4>
                <h4 className='text-start m-2'>Pet skill: {pet?.petSkill1} - {pet?.petSkill2} - {pet?.petSkill3}</h4>
                <button increment={1} onClick={incrementCount} className="btn btn-success border border-dark m-3 w-25">Me gusta</button>
                <p className='text-start m-2'>{count} like(s)</p>
            </div>
            <div>

                <h1>Editar Mascota</h1>
                {pet && <Petform onSubmitProp = {editarPet}></Petform>}        
                
            </div>
        </div>
    );
}

export default Update;
