// import React from 'react';
// import "./header-store.css"
// import { Container, Navbar, FormControl, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//
// const HeaderStore = () => {
//     return (
//         <Container className="store-container">
//             <Row className="store-row">
//                 <Col>
//                     <div className="text-center">
//                         <h3 className="header-title">Consultez nos tickets en vente</h3>
//                     </div>
//                 </Col>
//                 <Col xs="auto">
//                     <div>
//                         <FormControl className="search-input" placeholder="Pour quel événement ?" />
//                     </div>
//                     <div>
//                         <FormControl className="search-input" placeholder="Dans quelle ville ?" />
//                     </div>
//                 </Col>
//                 <Col>
//                     <div>
//                         <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };
//
// export default HeaderStore;


// TODO TEST EN COURS

import React, { useState } from 'react';
import { Container, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./header-store.css"
import { useNavigate } from 'react-router-dom'; // Update the import

const HeaderStore = () => {
    const [eventName, setEventName] = useState('');
    const [eventCity, setEventCity] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSearch = () => {
        // Create a query string based on the search inputs
        const queryParams = [];
        if (eventName) {
            queryParams.push(`eventName=${eventName}`);
        }
        if (eventCity) {
            queryParams.push(`eventCity=${eventCity}`);
        }

        // Construct the URL with the query parameters
        const queryString = queryParams.join('&');
        const searchUrl = `/search?${queryString}`;

        // Navigate to the search results page
        navigate(searchUrl); // Use navigate instead of history.push
    };

    return (
        <Container className="store-container">

                         <Row className="store-row">
                             <Col xs="auto">
                                 <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                             </Col>

                             <Col xs="auto">
                                 <div className="text-center">
                                     <h3 className="header-title">Consultez nos tickets en vente</h3>
                                 </div>
                             </Col>
                             <Col xs="auto">
                                 <div>
                                     <FormControl className="search-input" placeholder="Pour quel événement ?" />
                                 </div>
                                 <div>
                                     <FormControl className="search-input" placeholder="Dans quelle ville ?" />
                                 </div>
                                 <Button className="btn">
                                     <h3 className="header-title">Rechercher</h3>
                                 </Button>
                             </Col>
                         </Row>



            {/*/!* ... other components *!/*/}
            {/*<FormControl*/}
            {/*    className="search-input"*/}
            {/*    placeholder="Pour quel événement ?"*/}
            {/*    value={eventName}*/}
            {/*    onChange={(e) => setEventName(e.target.value)}*/}
            {/*/>*/}
            {/*<FormControl*/}
            {/*    className="search-input"*/}
            {/*    placeholder="Dans quelle ville ?"*/}
            {/*    value={eventCity}*/}
            {/*    onChange={(e) => setEventCity(e.target.value)}*/}
            {/*/>*/}
            {/*<Button variant="primary" onClick={handleSearch}>*/}
            {/*    Rechercher*/}
            {/*</Button>*/}
        </Container>
    );
};

export default HeaderStore;