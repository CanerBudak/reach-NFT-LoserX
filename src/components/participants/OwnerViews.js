import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";


const OwnerViews = ({ appState, args, purchaseReadt, purchase}) => {
    switch(appState) {
        case "Purchase":
            return(<Purchasing price={args[0]} functionToCall = {purchase}/>);
        case "Id":
            return(<revealId revealId={args[0]} functionToCall = {revealId}/>);
        default:
            return(<h1>Waiting for contract</h1>);
    }
}

const revealId = ({Id}) => {
    return (
        <Container>
            <h2>`revealId: ${Id} `</h2>

        </Container>
    )
}
const Purchasing = ({ price, functionToCall}) => {

    const [clickedYes, setClickedYes] = useState(false);
    const [clickedNo, setClickedNo] = useState(true);

    const handleYes = () => {
        functionToCall(true);
        setClickedYes(true);
    };

    const handleNo = () => {
        functionToCall(false);
        setClickedNo(false);
    }

    return (
        <Container>
            <h2>Price is {price} ALGO. Do you accept it?</h2>
            <Button onClick = {handleYes}>Yes</Button>
                {
                    clickedYes
                        ? <Spinner animation= "border" size= "sm" as="span" variant="Light"/>
                        : "Yes"
                }
            <Button onClick = {handleNo}>No</Button>
                {
                    clickedNo
                        ? <Spinner animation= "border" size= "sm" as="span" variant="Light"/>
                        : "No"
                }
        </Container>
    )
}

export default OwnerViews; 