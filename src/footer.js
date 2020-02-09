import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Arithmetic Operations</h5>
            <p>
            These are the basic operations, although the subject also involves advanced operations like 
            computation of percentages, logarithmic functions, exponentiation and square roots.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Percentages</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Decimals</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Ratios and Proportion</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Integers</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Whole Number</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="Arithmetic Related Articles">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;