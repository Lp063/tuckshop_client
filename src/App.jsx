import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import history from "./utils/history";

import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.min.js';

import Header from './components/layout/header';
import AppLogin from './components/pages/AppLogin';
import ItemsListing from './components/pages/ItemsListing/ItemsListing';
import Manager from './components/pages/Manager/Manager';

Axios.defaults.baseURL = 'http://localhost:4000/';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class App extends Component {
  
  state={
    user_isLoggedIn:true,
    user_senior:0,
    manager_id:2,
    waiter_id:0,
    event_id:0,
    event_items:[],
    teamRegistration:{
      name:"",
      lastName:"",
      email:"",
      password:"",
      username:""
    }
  };
  componentDidMount(){
    history.push("/manager");
  }
  event_items = async ()=> {
    var z = await Axios.get("foodItems",{
      eventId:this.state.event_id
    }).then(res=>{
      return res.data.data;
    })
    .catch((error)=>{
      console.log(error);
    });
    return z;
  }

  itemsCheckedOut = async (listOfItems)=>{
    const sendData={
      waiterId:this.state.waiter_id,
      eventId:this.state.event_id,
      sales:listOfItems
    }
    
    var checkoutApi = await Axios.post('sales',sendData)
    .then((response)=>{
      return response;
    }).catch((error)=>{
      console.log(error);
    });
    return checkoutApi;
  }

  loginFormSubmit = (loginFormObject) => {
    /* this.setState({user_isLoggedIn:true});
    history.push("/itemListing"); */
    Axios.post('api/login',loginFormObject).then((response)=>{
      
      var userData  = response.data.data;
      switch (userData.tbl_user_type_id) {
        case 2:
          this.setState({user_isLoggedIn:true});
          this.setState({manager_id:userData.id});
          history.push("/manager");
          break;
        case 3:
          this.setState({user_isLoggedIn:true});
          this.setState({waiter_id:userData.id});
          this.setState({user_senior:userData.senior_id});
          this.setState({event_id:userData.eventData.id});
          history.push("/itemListing");
          break;
      
        default:
          break;
      }
      /* if (typeof response.data.token != "undefined") {
        this.setState({user_isLoggedIn:true});
        localStorage.setItem('authToken', response.data.token);
        history.push("/itemListing");
      } */
    },(error)=>{
      history.push("/");
      console.log(error);
    });
  }

  logoutClicked = () =>{
    this.setState({user_isLoggedIn:false});
    history.push("/");
  }

  registerUser=(userObject)=>{
    //Navigated to http://localhost:3000/?name=jason&lastName=Bourne&email=jasonbourne%40gmail.com&password=123456
    Axios.post('/addUser',userObject).then(function(response){
      console.log(response);
    });
  }
  
  render(){
    return (
      <Router history={history}>
          <Header userLoggedin={this.state.user_isLoggedIn} logoutRedirect={this.logoutClicked} />
          <Switch>
            <Route exact path="/" render={(props)=>(
              !this.state.user_isLoggedIn?<AppLogin  pageParentContainerStyle={pageParentContainer} loginFormSubmit={this.loginFormSubmit} />:"" )} />
            <Route exact path="/itemListing" render={props=>(
              (this.state.user_isLoggedIn && this.state.waiter_id !== 0) ?<ItemsListing pageParentContainerStyle={pageParentContainer}  itemsCheckedOut={this.itemsCheckedOut} event_items={this.event_items} />:""  )}/>
            <Route exact path="/manager" render={props=>(
                (this.state.user_isLoggedIn && this.state.manager_id !==0) ? <Manager />:"d" )}/>
            <Route >{history.push("/")}</Route>
          </Switch>
      </Router>
    //
    );
  }
}

const pageParentContainer={
  padding:"13px 0px 0px 0px",
  /* width: "100%", */
}

export default App;