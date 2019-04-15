import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Buttons extends Component {
  render() {
    return (
      <Card>
        <Card.Header>Standard Buttons</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Buttons;
