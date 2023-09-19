import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

function Register(){
    // store form content into a state :
    // 1) initialize user object
    const [user, setUser]=useState({
        username:"",
        password:"",
        email:"",
        phoneNumber:"",
        photoUrl:""
    });
    // 2) deconstruction of the object
    const {username,password, email,phoneNumber,photoUrl}=user;

    //note : (e) = event
    // set all the user attributes to the values entered in the form
    const onInputChange=(e)=>{
        setUser({ ...user, [e.target.name]:e.target.value})
    };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("")


    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 border-warning">
                    <h2 className="text-center m-4">Inscription</h2>
                    <form onSubmit={(e)=>onSubmit((e))}>
                        <div div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Nom d'utilisateur
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Entrez votre nom d'utilisateur"
                                name="username"
                                value={username}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div div className="mb-3">
                            <label htmlFor="Password" className="form-label">
                                Mot de passe
                            </label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Entrez votre mot de passe"
                                name="password"
                                value={password}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type={"email"}
                                className="form-control"
                                placeholder="Entrez votre adresse mail"
                                name="email"
                                value={email}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">
                                Numéro de téléphone
                            </label>
                            <input
                                type={"tel"}
                                className="form-control"
                                placeholder="Entrez votre numéro de téléphone (optionnel)"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div div className="mb-3">
                            <label htmlFor="photoUrl" className="form-label">
                                Photo de profil
                            </label>
                            <input
                                type={"url"}
                                className="form-control"
                                placeholder="URL vers votre photo de profil (optionnel)"
                                name="photoUrl"
                                value={photoUrl}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div className="fa-pull-right">
                            <button type="submit" className="btn  btn-outline-warning mx-2">Annuler</button>
                        </div>
                        <div className="fa-pull-right">
                            <button type="submit" className="btn  btn-outline-dark mx-2">Soumettre</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;

// import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.css';
// function Register() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     // TODO : set phoneNumber & photoUrl to optional
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [photoUrl, setPhotoUrl] = useState('');
//
//     // Validation state
//     const [usernameError, setUsernameError] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [phoneNumberError, setPhoneNumberError] = useState('');
//
//     // TODO : REFACTOR into separated component to reduce size of Register component
//     // Validate values transmitted via form submission
//     const handleSubmit = (submitClicked) => {
//         submitClicked.preventDefault();
//
//         // Reset previous validation errors
//         setUsernameError('');
//         setEmailError('');
//         setPhoneNumberError('');
//
//         // default : isValid true, then verifications are performed to check their validity
//         // before creation of the new user.
//         // NOTE : we check the username availability last because this check is more costful as we have to
//         // send a request to the database
//         let isValid = true;
//         // NOTE : email pattern checked via regex, but something like 'test@email.adress' is considered as a
//         // potentially valid mail.
//         const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//         // phone number checked via regex (note : doesn't include international format : +33 etc.)
//         const phoneNumberPattern = /^[0-9]{10}$/;
//
//         if (!emailPattern.test(email)) {         // Check if email is a valid format
//             setEmailError('Invalid email format');
//             isValid = false;
//         } else if (phoneNumber.trim() !== '' && !phoneNumberPattern.test(phoneNumber)) {
//             // fixme : cette vérification est ignorée pour l'instant
//             setPhoneNumberError('Invalid phone number format');
//             isValid = false;
//         }/* else if(){
//                 // TODO CHECK username availability : username isn't already in the database
//             }*/
//
//         if (isValid) {
//             // userData : content of the JSON which is sent to the server
//             // TODO : REFACTOR into separated component to reduce size of Register component
//             const userData = {
//                 username,
//                 email,
//                 password,
//                 phoneNumber,
//                 photoUrl,
//             };
//
//             // Send a POST request to your server endpoint
//             fetch('/api/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(userData),
//             })
//                 .then((response) => {
//                     if (response.status === 200) {
//                         // Registration was successful
//                         // You can redirect or show a success message here
//                     } else if (response.status === 409) {
//                         // Username is not unique
//                         setUsernameError('Username is not available');
//                     } else {
//                         // Handle other error cases
//                         console.error('Registration failed with status:', response.status);
//                         // You can display an error message to the user if needed
//                     }
//                 })
//                 .catch((error) => {
//                     console.error('Registration failed:', error);
//                     // Handle network errors or other issues here
//                     // You can display an error message to the user if needed
//                 });
//         }
//     };
//
//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label className="form-label">Username<text className='text-danger'>*</text></label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(submitClicked) => setUsername(submitClicked.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password<text className='text-danger'>*</text></label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(submitClicked) => setPassword(submitClicked.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(submitClicked) => setEmail(submitClicked.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Phone number</label>
//                     <input
//                         type="phoneNumber"
//                         value={phoneNumber}
//                         onChange={(submitClicked) => setPhoneNumber(submitClicked.target.value)}
//                     />
//                 </div>
//
//                 <div>
//                     {/*TODO find better examples to add a photo!*/}
//                     <label>Photo Url</label>
//                     <input
//                         type="photoUrl"
//                         value={photoUrl}
//                         onChange={(submitClicked) => setPhotoUrl(submitClicked.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };
// export default Register;
