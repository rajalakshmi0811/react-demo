import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Navb from './nav';
import Gallery from './gallery';
import About from './about us';
import Comp from './components';
import FooterPage from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class Home extends React.Component {
  state = {
    result: 0,
    operand1: 0,
    operand2: 0,
    operator: 'add'
  }

  onChangeInput = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  }

  submitButton = (e) => {
    const { operand1, operand2, operator } = this.state;

    let result;

    if (operator === 'add') {
      result = parseInt(operand1) + parseInt(operand2);
    }

    if (operator === 'sub') {
      result = parseInt(operand1) - parseInt(operand2);
    }

    if (operator === 'multi') {
      result = parseInt(operand1) * parseInt(operand2);
    }

    if (operator === 'div') {
      result = parseInt(operand1) / parseInt(operand2);
    }


    this.setState({
      result: result
    });

    fetch('http://localhost:9001/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "operand1": Number(operand1),
        "operand2": Number(operand2),
        "operator": operator
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          result: data.result
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render = () => {
    return (
      <>
        <Navb />
        <Router>
               {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/about us">
          <About />
        </Route>
        <Route path="/components">
          <Comp />
        </Route>                    
      </Switch>
    </Router>
        <div style={{ "margin": "auto", "width": "50%" }}>
          <Form>
            <FormGroup>
              <Label for="operand1">Operand 1</Label>
              <Input type="text" name="operand1" placeholder="number1" onChange={this.onChangeInput} />
            </FormGroup>
            <FormGroup>
              <Label for="operand2">Operand 2</Label>
              <Input type="text" name="operand2" placeholder="Number2" onChange={this.onChangeInput} />
            </FormGroup>
            <FormGroup>
              <Label for="operator">Operator</Label>
              <Input type="select" name="operator" onChange={this.onChangeInput} >
                <option value="add">+</option>
                <option value="sub">-</option>
                <option value="multi">*</option>
                <option value="div">/</option>
              </Input>
            </FormGroup>
            <Button color="primary" type="button" onClick={this.submitButton} >Submit</Button>{' '}
            <Button color="danger" type="button">Cancel</Button>
            <div>{this.state.result}</div>
          </Form>
        </div>
        <FooterPage/>
      </>
         );
  }
}
export default Home;

