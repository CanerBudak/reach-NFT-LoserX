import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4">About the Project</h1>
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3">NFT LoserX is an NFT idea project, which was created by us for the Reach Bounty Hack Turkey event, which was held recently.</p>
                    <p className="text-left mt-3">As can be understood from the name of the project, what is aimed is that NFT loses its value over time.</p>
                    <p className="text-left mt-3">Here, it is tried to use suitable functions in smart contract. In addition, a clear interface was tried to be presented to the user.</p>

                    <h2 className="text-left">How to Use</h2>
                    <p className="text-left mt-3">In its use, certain ALGO wallets should be connected, if any, and if not, the test ALGO should be taken from the FAUCET pool.</p>
                    <p className="text-left mt-3">Secondarily, to communicate NFT addresses from the Creator or Owner tabs in a targeted manner.</p>
                    <p className="text-left mt-3">Finally, the necessary steps are followed and the loss of value is observed in the specified parameters.</p>
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );
}

export default About;
