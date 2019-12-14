import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

const CharCard = ({ name, year, films }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle><h2>{name}</h2></CardTitle>
        <CardSubtitle>Born: {year}</CardSubtitle>
        <CardText>Number of Films: <b>{films}</b></CardText>
      </CardBody>
    </Card>
  );
}

export default CharCard;