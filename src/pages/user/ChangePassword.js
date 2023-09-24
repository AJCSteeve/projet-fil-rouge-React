import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export default function ChangePassword(){

    let navigate=useNavigate()
    const {id}=useParams()

    const [user,setUser]= useState({
        password:""
    });

    const{password}=user;

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
        navigate("/user/:activepage");
    };

    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/api/users/id/${id}`)
        setUser(result.data)
    };


    return(
        <div className="changepassword">
            <h1 className="mainhead1">Informations utilisateur</h1>
            <div className='form'onSubmit={(ev) => onSubmit(ev)}>
                <div className="form-group">
                    <label htmlFor="oldpassword" className="form-label">Ancien mot de passe <span>*</span></label>
                    <input type='password'
                           className="form-control"
                           name="password"
                           value={password}/>
                </div>
                <div className="form-group">
                    <label htmlFor="newpassword" className="form-label">Nouveau mot de passe <span>*</span></label>
                    <input type='password'
                           className="form-control"
                           placeholder="Veuillez entrer votre email svp"
                           name="password"
                           value={password}
                           onChange={(event)=>onInputChange(event)}/>
                </div>
            </div>
            <button type="submit" className="mainbutton1">Modifier</button>
            <button className="btn btn-outline-danger mx-2" onClick={() => navigate("/user/:activepage")}>Annuler</button>
        </div>
    )
}