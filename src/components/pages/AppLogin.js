import React,{ Component } from 'react';
import { Col, Form, Button} from 'react-bootstrap';
//import PropTypes from 'prop-types';

class AppLogin extends Component{

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    };
  }

  inputFieldUpdate = (event) => {
    this.setState({[event.target.type]:event.target.value});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.loginFormSubmit(this.state);
  }

  render(){
    return (
      <React.Fragment>
        <Col lg={12} md={12} sm={12} xs={12} style={this.props.pageParentContainerStyle}>
          <Col lg={{span:4, offset:4}} md={{span:4, offset:4}} sm={12} xs={12} >
            <Form onSubmit={this.handleSubmit.bind(this)} >
              <Form.Group controlId="formBasicEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" required placeholder="Registeded Email" onChange={this.inputFieldUpdate} value={this.state.email} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label >Password</Form.Label>
                <Form.Control type="password" required placeholder="********" onChange={this.inputFieldUpdate} value={this.state.password} />
              </Form.Group>
              <Button style={{position:"absolute",right:"5%"}} variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Col>
      </React.Fragment>
    )
  }
}

export default AppLogin;
