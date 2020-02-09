import React from 'react';
import { Media } from 'reactstrap';
import aaaa from './assets/aaaa.jpg';

const Comp = () => {
  return (
    <div style={{ "margin": "auto", "width": "50%" }}>
    <Media>
          <Media left href="#">
      <img src={aaaa} alt="aaaa" />;
      </Media>
           <Media body>
        <Media heading>
          Arithmetic Operations
        </Media>
        The addition of two negative numbers results in a negative; the addition of a positive and negative number produces a number that has the same sign as the number of larger magnitude.
Subtraction of a positive number yields the same result as the addition of a negative number of equal magnitude, while subtracting a negative number yields the same result as adding a positive number.
The product of one positive number and one negative number is negative, and the product of two negative numbers is positive.
The quotient of one positive number and one negative number is negative, and the quotient of two negative numbers is positive..
      </Media>
    </Media>
    </div>
  );
};

export default Comp;