import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

function InfoRight() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h5>
            <span style={{ color: "#eb6440", textDecoration: "underline" }}>
              Are you a mechanic?
            </span>
          </h5>
          <p>or</p>
          <h5>Can you accept urgent calls?</h5>
          <p>or</p>
          <h5>Get an online appointment?</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Space />
          <Span>Be ready to get paid!</Span>
        </Col>
      </Row>
    </Container>
  );
}
const Span = styled.div`
  display: inline-block;
  background-color: #eb6440;
  font-weight: 500;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;
const Space = styled.div`
  height: 3rem;
`;
export default InfoRight;
