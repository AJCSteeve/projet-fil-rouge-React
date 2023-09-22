import React, {useContext} from 'react';

// import tickets du json
import {TicketContext} from "../../context/TicketContext";
const HomeTheatre = () => {
    // get products
    const {tickets} = useContext(TicketContext);
    console.log(tickets);

    return (
        <div>
            <section>
                <div className={"container mx-auto"}>
                    <div>
                        {tickets && tickets.map((ticket) => {
                            return <div key={ticket.id}>
                                {ticket.event_name}
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeTheatre;