import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
            setPhoneNumberError('Invalid phone number format');
            isValid = false;
        }/* else if(){
                // TODO check username availability
            }*/

        if (isValid) {
            //
            // Proceed with registration, e.g., send a request to your server
            // You can also check for username uniqueness here before making the request
            // If username is not unique, set an error using setUsernameError('Username is not available');
            // If the registration is successful, you can redirect or show a success message
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

