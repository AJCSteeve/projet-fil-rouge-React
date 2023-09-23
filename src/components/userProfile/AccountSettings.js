import "./AccountSettings.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


export default function AccountSettings(){

    let navigate=useNavigate()

    const {id}=useParams()

    const [user,setUser]= useState({
        username:"",
        phoneNumber:"",
        photoUrl:"",
        email:""
    });

    const{username, phoneNumber,photoUrl, email}=user;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async (ev)=>{
        ev.preventDefault();
        await axios.put(`http://localhost:8080/api/users/${id}`,user);
        navigate("/");
    };

    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/api/users/id/${id}`)
        setUser(result.data)
    };

    return(
        <div className="orders">
            <h1 className="mainhead1">Informations utilisateur</h1>
           <div className='form'>
               <div className="form-group">
                   <label htmlFor="username">Identifiant <span>*</span></label>
                   <input type='text' name="username" id='username'/>
               </div>
               <div className="form-group">
                   <label htmlFor="phoneNumber">Téléphone <span>*</span></label>
                   <input type='text' name="phoneNumber" id='phoneNumber'/>
               </div>
               <div className="form-group">
                   <label htmlFor="photoUrl">Photo <span>*</span></label>
                   <input type='text' name="photoUrl" id='photoUrlr'/>
               </div>
               <div className="form-group">
                   <label htmlFor="email">Email <span>*</span></label>
                   <input type='text' name="email" id='email'/>
               </div>

           </div>
            <button className="mainbutton1">Modifier</button>
        </div>
    )
}