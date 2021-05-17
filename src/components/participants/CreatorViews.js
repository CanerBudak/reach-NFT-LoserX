import React from "react";
import {parseCurrency} from "@reach-sh/stdlib/ALGO";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Form} from "react-bootstrap";
//import { useState } from "react";



const CreatorViews = ({appState, args, getParamsReady, getParams}) => {
    
            return(
                getParamsReady
                    ? <getParams functionToCall = {getParams}/>
                    : <h1>Loading the GetParams page</h1>
                );
}
const  getParams = ({ functionToCall }) => {
        

    const[lifetime, setlifetime] = this.setState(500);
    const[price, setPrice] = this.setState(1);
    const[id, setId]= this.setState();
    const handleClick = () => {
        functionToCall({
            lifetime: lifetime, 
            price: parseCurrency(price),
        });
    }
            
    return(
        <Container>
            <Form.Group>
                <p>Lifetime</p>
                <Form.Control 
                value = {lifetime}
                onchange= {(e) => setlifetime(e.target.value)}
                type = "Number"
                placeholder = "Lifetime in blocks"/>
                <p>Price</p>
                <Form.Control 
                value = {price}
                onchange= {(e) => setPrice(e.target.value)}
                type = "Number"
                placeholder = "Price"/>
                <p>Id</p>
                <Form.Control
                value = {id}
                onchange= {(e) => setId(e.target.value)}
                type = "Number"
                placeholder = "Id"/>
            </Form.Group> 
            <Button onClick = {handleClick}> Set Parameters</Button>
        </Container>
    );
}

export default CreatorViews;