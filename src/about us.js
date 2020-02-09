import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const About = (props) => {
  return (
    <div style={{ "margin": "auto", "width": "50%" }}>
      <Jumbotron>
        <h1 className="display-3">Arithmetic Operations!</h1>
        <p className="lead">The basic arithmetic operations for real numbers are addition, subtraction, multiplication, and division. The basic arithmetic properties are the commutative, associative, and distributive properties..</p>
        <hr className="my-2" />
        <p>The addition of two negative numbers results in a negative; the addition of a positive and negative number produces a number that has the same sign as the number of larger magnitude.
Subtraction of a positive number yields the same result as the addition of a negative number of equal magnitude, while subtracting a negative number yields the same result as adding a positive number.
The product of one positive number and one negative number is negative, and the product of two negative numbers is positive.
The quotient of one positive number and one negative number is negative, and the quotient of two negative numbers is positive..</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default About;