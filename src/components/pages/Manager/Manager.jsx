import React,{ Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Router, Route, Link, Switch } from 'react-router-dom';

import history from "../../../utils/history";

import Dashboard from './Dashboard/Dashboard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faList, faUserClock, faCookieBite, faCog, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import './Manager.css'
//import PropTypes from 'prop-types';

class Manager extends Component{

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    };
  }

  render(){
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="">
            <Col lg={2} md={2} className="left-side-nav">
              <ul className="menu-list">
                <li className="active">
                  <Link className="nav-link" to="/manager/dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} /><label>Dashboard</label>
                  </Link>
                </li>
                <li className=""><FontAwesomeIcon icon={faList} /><label>Events</label></li>
                <li className=""><FontAwesomeIcon icon={faCookieBite} /><label>Food Items</label></li>
                <li className=""><FontAwesomeIcon icon={faUserClock} /><label>Waiters</label></li>
                <li className=""><FontAwesomeIcon icon={faUserPlus} /><label>Register</label></li>
                <li className=""><FontAwesomeIcon icon={faCog} /><label>Settings</label></li>
              </ul>
            </Col>
            <Col lg={10} md={10}>
              <Router history={history}>
                <Switch>
                  <Route exact path="/manager" render={(props)=>(<Dashboard />)} />
                </Switch>
              </Router>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Manager;
