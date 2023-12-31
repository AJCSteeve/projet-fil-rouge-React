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
//                         <h3 className="store-header-title">Consultez nos tickets en vente</h3>
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
import "./header-search.css"
import { useNavigate } from 'react-router-dom'; // Update the import

const HeaderSearch = () => {
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
        // TODO TROUVER SOLUTION SANS navigate() pour transférer infos à FetchTicketsAll & faire la requête !!!
        navigate(searchUrl); // Use navigate instead of history.push
    };

    return (
        <div className="search-page-container">
            <div className="search-left-content">
                <div>
                    <div className="text-center">
                        <h3 className="search-header-title">Trouvez un évènement dans votre ville</h3>
                    </div>
                </div>
                <div>
                    {/*<div className="search-input-container">*/}
                    <div>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Pour quel événement ?"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Dans quelle ville ?"
                            value={eventCity}
                            onChange={(e) => setEventCity(e.target.value)}
                        />
                    </div>
                    <button className="search-btn" onClick={handleSearch}>
                        Rechercher
                    </button>
                </div>
            </div>
            <div className="search-right-content">
                <div className="search-cart-container">
                    <FontAwesomeIcon icon={faShoppingCart} className="search-cart-icon" />
                </div>
            </div>
        </div>
    );
};

export default HeaderSearch;