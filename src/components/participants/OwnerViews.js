import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";


const OwnerViews = ({ appState, args, purchaseReady, purchase }) => {
    switch (appState) {
        case "purchase":
            return (purchaseReady ? <Purchasing price={args[0]} functionToCall={purchase} /> : <h2>Waiting</h2>);
        case "seeOwner":
            return (<SeeOwner owner={args[0]} />);
        case "revealId":
            return (<RevealId id={args[0]} />);
        default:
            return (<h1>Waiting for contract</h1>);
    }
}

const SeeOwner = ({ owner }) => {
    const address = owner.substring(0, 5) + "..." + owner.substring(owner.length - 4, owner.length - 1);

    return (
        <Container className="mt-4">
            <h2>New Onwer: <strong>"{address}"</strong></h2>

        </Container>
    )
}

const RevealId = ({ id }) => {
    return (
        <Container className="mt-4">
            <h2>revealId: <strong>"{id}"</strong></h2>

        </Container>
    )
}
const Purchasing = ({ price, functionToCall }) => {

    const [clickedYes, setClickedYes] = useState(false);
    const [clickedNo, setClickedNo] = useState(false);

    const handleYes = () => {
        functionToCall(true);
        setClickedYes(true);
    };

    const handleNo = () => {
        functionToCall(false);
        setClickedNo(true);
    }

    return (
        <Container className="mt-4">
            <h2>Price is {price} ALGO. Do you accept it?</h2>
            <Button onClick={handleYes}>
                {
                    clickedYes
                        ? <Spinner animation="border" size="sm" as="span" variant="Light" />
                        : "Yes"
                }
            </Button>
            <Button onClick={handleNo}>
                {
                    clickedNo
                        ? <Spinner animation="border" size="sm" as="span" variant="Light" />
                        : "No"
                }
            </Button>
        </Container>
    )
}

export default OwnerViews;
