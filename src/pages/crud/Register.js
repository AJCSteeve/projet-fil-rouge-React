import React, { useState } from 'react';

// function Register() {
//
//
//
//     return (
//         <>
//             <h2>
//                 REGISTER PLACEHOLDER
//             </h2>
//             {/*/!* example : source : https://dev.to/keefdrive/reactjs-animation-create-login-register-form-with-react-spring-animation-3ekh *!/*/}
//             {/*without react-spring library animation*/}
//             <div className="container">
//                 <div className="login-register-wrapper">
//                     <div className="nav-buttons">
//                         <button id="loginBtn" className="active">Login</button>
//                         <button id="registerBtn">Register</button>
//                     </div>
//                     <div className="form-group">
//                         <form action="" id="loginform">
//                         </form>
//                         <form action="" id="registerform">
//                         </form>
//                     </div>
//                     <div id="forgot-panel">
//                     </div>
//                 </div>
//             </div>
//
//         </>
//     );
// }



// function Register() {
//
//
//
//     return (
//         <>
//             <h2>
//                 REGISTER PLACEHOLDER
//             </h2>
//             {/*/!* example : source : https://dev.to/keefdrive/reactjs-animation-create-login-register-form-with-react-spring-animation-3ekh *!/*/}
//             {/*without react-spring library animation*/}
//             <div className="container">
//                 <div className="login-register-wrapper">
//                     <div className="nav-buttons">
//                         <button id="loginBtn" className="active">Login</button>
//                         <button id="registerBtn">Register</button>
//                     </div>
//                     <div className="form-group">
//                         <form action="" id="loginform">
//                         </form>
//                         <form action="" id="registerform">
//                         </form>
//                     </div>
//                     <div id="forgot-panel">
//                     </div>
//                 </div>
//             </div>
//
//         </>
//     );
// }


function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // TODO : set phoneNumber & photoUrl to optional
    const [phoneNumber, setPhoneNumber] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');


    // Handle form submission
    const handleSubmit = (submitClicked) => {
        submitClicked.preventDefault();

        // Perform validation on user input here
        // You can check if the fields are not empty and meet certain criteria

        // TODO : after form validation, use fetch for HTTP request

        // Example:
        // fetch('/api/register', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ username, email, password }),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log('Registration successful', data);
        //   })
        //   .catch((error) => {
        //     console.error('Registration failed', error);
        //   });
    };

    return (
        <div>
            <h2>Register</h2>




            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(submitClicked) => setUsername(submitClicked.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(submitClicked) => setEmail(submitClicked.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(submitClicked) => setPassword(submitClicked.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone number:</label>
                    <input
                        type="photoUrl"
                        value={photoUrl}
                        onChange={(submitClicked) => setPhotoUrl(submitClicked.target.value)}
                    />
                </div>

                <div>
                    <label>Photo Url: TODO find better examples to store photo!</label>
                    <input
                        type="photoUrl"
                        value={photoUrl}
                        onChange={(submitClicked) => setPhotoUrl(submitClicked.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
export default Register;

