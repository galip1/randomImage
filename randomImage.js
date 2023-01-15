import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const RandomImage = () => {
  const [number, setNumber] = useState(1);

  let image = "";
  if (number <= 4) image = "icecek1.jpg";
  else if (number <= 7) image = "icecek2.jpg";
  else image = "icecek2.jpg";

  const change = () => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    setNumber(randomNumber);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        style={{ height: "20rem" }}
        src={require(`../../assets/img/${image}`)}
      />
      <Card.Body>
        <Card.Title>rastgele sayı : {number}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={change}>
          Renk Değiştir
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RandomImage;
