import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container
} from 'reactstrap';

class App extends React.Component {
  state = {
    result:0,
    operand1:0,
    operand2:0,
    operator:'add'
  }
  onChangeInput = (e) => {
    const name = e.target.name;
    this.setState({
        [name]: e.target.value
    });
}
onChangeInput = (e) => {
  const name = e.target.name;
  this.setState({
      [name]: e.target.value
  });
}
  render = () => {
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="operand1">Operand 1</Label>
            <Input type="number" name="operand1" id="operand1" placeholder="with a placeholder" onChange={this.onChangeInput} />
          </FormGroup>
          <FormGroup>
            <Label for="operand2">Operand 2</Label>
            <Input type="number" name="operand2" id="operand2" placeholder="password placeholder" onChange={this.onChangeInput} />
          </FormGroup>
          <FormGroup>
            <Label for="operator">Operator</Label>
            <Input type="select" name="operator" id="operator" onChange={this.onChangeInput} >
              <option value="add">+</option>
              <option value="sub">-</option>
              <option value="multi">*</option>
              <option value="div">/</option>
            </Input>
          </FormGroup>
          <Button color="primary" type="button" >Submit</Button>{' '}
          <Button color="danger" type="button">Cancel</Button>
          <div>{this.state.result}</div>
        </Form>


      </>
    );
  }
}
export default App;

