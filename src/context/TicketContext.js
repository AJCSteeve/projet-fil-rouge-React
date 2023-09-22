import React, {createContext, useState, useEffect} from 'react';

export const TicketContext = createContext();
const TicketProvider = ({children}) => {

    // définition du state
    const [tickets, setTickets] = useState([])

    // fetch tickets
    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then((tickets) => {
                setTickets(tickets);
            });
    }, []);

    /*useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setData(data);
            console.log(data);
        };
        fetchTickets();
    }, [])*/

    return (
        <TicketContext.Provider value={tickets}>
            {children}
        </TicketContext.Provider>
    );
};

export default TicketProvider;
