import React from "react";

function TransactionRating() {
    return (
        <>
            <h2>RATING TRANSACTIONS</h2>

            {/*Exemple menu déroulant, ça peut servir a priori */}
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>


        </>
    );
}



export default TransactionRating;