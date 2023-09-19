import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // TODO : set phoneNumber & photoUrl to optional
    const [phoneNumber, setPhoneNumber] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    // Validation state
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    // TODO : REFACTOR into separated component to reduce size of Register component
    // Validate values transmitted via form submission
    const handleSubmit = (submitClicked) => {
        submitClicked.preventDefault();

        // Reset previous validation errors
        setUsernameError('');
        setEmailError('');
        setPhoneNumberError('');

        // default : isValid true, then verifications are performed to check their validity
        // before creation of the new user.
        // NOTE : we check the username availability last because this check is more costful as we have to
        // send a request to the database
        let isValid = true;
        // NOTE : email pattern checked via regex, but something like 'test@email.adress' is considered as a
        // potentially valid mail.
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        // phone number checked via regex (note : doesn't include international format : +33 etc.)
        const phoneNumberPattern = /^[0-9]{10}$/;

        if (!emailPattern.test(email)) {         // Check if email is a valid format
            setEmailError('Invalid email format');
            isValid = false;
        } else if (phoneNumber.trim() !== '' && !phoneNumberPattern.test(phoneNumber)) {
            // fixme : cette vérification est ignorée pour l'instant
            setPhoneNumberError('Invalid phone number format');
            isValid = false;
        }/* else if(){
                // TODO CHECK username availability : username isn't already in the database
            }*/

        if (isValid) {
            // userData : content of the JSON which is sent to the server
            // TODO : REFACTOR into separated component to reduce size of Register component
            const userData = {
                username,
                email,
                password,
                phoneNumber,
                photoUrl,
            };

            // Send a POST request to your server endpoint
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
                .then((response) => {
                    if (response.status === 200) {
                        // Registration was successful
                        // You can redirect or show a success message here
                    } else if (response.status === 409) {
                        // Username is not unique
                        setUsernameError('Username is not available');
                    } else {
                        // Handle other error cases
                        console.error('Registration failed with status:', response.status);
                        // You can display an error message to the user if needed
                    }
                })
                .catch((error) => {
                    console.error('Registration failed:', error);
                    // Handle network errors or other issues here
                    // You can display an error message to the user if needed
                });
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Username<text className='text-danger'>*</text></label>
                    <input
                        type="text"
                        value={username}
                        onChange={(submitClicked) => setUsername(submitClicked.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password<text className='text-danger'>*</text></label>
                    <input
                        type="password"
                        value={password}
                        onChange={(submitClicked) => setPassword(submitClicked.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(submitClicked) => setEmail(submitClicked.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone number</label>
                    <input
                        type="phoneNumber"
                        value={phoneNumber}
                        onChange={(submitClicked) => setPhoneNumber(submitClicked.target.value)}
                    />
                </div>

                <div>
                    {/*TODO find better examples to add a photo!*/}
                    <label>Photo Url</label>
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


// function Register() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     // TODO : set phoneNumber & photoUrl to optional
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [photoUrl, setPhotoUrl] = useState('');
//
//
//     // Handle form submission
//     const handleSubmit = (submitClicked) => {
//         submitClicked.preventDefault();
//
//         // Perform validation on user input here
//         // You can check if the fields are not empty and meet certain criteria
//
//         // TODO : after form validation, use fetch for HTTP request
//
//         // Example:
//         // fetch('/api/register', {
//         //   method: 'POST',
//         //   headers: {
//         //     'Content-Type': 'application/json',
//         //   },
//         //   body: JSON.stringify({ username, email, password }),
//         // })
//         //   .then((response) => response.json())
//         //   .then((data) => {
//         //     console.log('Registration successful', data);
//         //   })
//         //   .catch((error) => {
//         //     console.error('Registration failed', error);
//         //   });
//     };
//
//     return (
//         <div>
//             <h2>Register</h2>
//
//
//
//
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label className="form-label">Username:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(submitClicked) => setUsername(submitClicked.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(submitClicked) => setEmail(submitClicked.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(submitClicked) => setPassword(submitClicked.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Phone number:</label>
//                     <input
//                         type="photoUrl"
//                         value={photoUrl}
//                         onChange={(submitClicked) => setPhotoUrl(submitClicked.target.value)}
//                     />
//                 </div>
//
//                 <div>
//                     <label>Photo Url: TODO find better examples to store photo!</label>
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

