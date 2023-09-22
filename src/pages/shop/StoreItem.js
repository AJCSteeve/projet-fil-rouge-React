import React from 'react';
import {type} from "@testing-library/user-event/dist/type";
import * as string_decoder from "string_decoder";
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../../utilities/formatCurrency";

type StoreItemProps = {
    eventName: string,
    id: number,
    imgUrl: string,
    price: number
}

function StoreItem({id, eventName, price, imgUrl}: StoreItemProps) {
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                width="350px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
                    <span className="fs-4">{eventName}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    <Button className="w-200">+ Ajouter au panier</Button>

                </div>
            </Card.Body>
        </Card>
    );
}

export default StoreItem;
