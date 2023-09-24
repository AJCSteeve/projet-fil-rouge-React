import "./AccountSettings.css"
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {NavLink} from "react-bootstrap";


export default function AccountSettings(){

    const [user,setUser]= useState({
        username:"",
        phoneNumber:"",
        photoUrl:"",
        email:""
    });

    const {id}=useParams()

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/api/users/${id}`)
        setUser(result.data)
    };

    const deleteUser = useCallback(async (id) => {
        await axios.delete(`http://localhost:8080/api/users/${id}`);
        loadUser();
    }, [loadUser]);



    const{username, phoneNumber,photoUrl, email}=user;


    return(
        <div className="orders">
            <h1 className="mainhead1">Informations utilisateur</h1>
           <div className='form'>
               <div className="form-group">
                   <label htmlFor="username" className="form-label">Identifiant <span>*</span></label>
                   <input value={user.username}/>
               </div>
               <div className="form-group">
                   <label htmlFor="phoneNumber" className="form-label">Téléphone <span>*</span></label>
                   <input value={user.phoneNumber}/>
               </div>
               <div className="form-group">
                   <label htmlFor="photoUrl" className="form-label">Photo <span>*</span></label>
                   <input value={user.photoUrl}/>
               </div>
               <div className="form-group">
                   <label htmlFor="email" className="form-label">Email <span>*</span></label>
                   <input value={user.email}/>
               </div>
           </div>
            <NavLink className="btn btn-outline-primary mx-2"to={`/edituser/${user.id}`}>Modifier</NavLink>
            <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Supprimer</button>
        </div>
    )
}