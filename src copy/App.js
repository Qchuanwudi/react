import React, {Component} from 'react'

import { Router, Switch, Route} from "react-router-dom"
import Login from './containers/login'
import Admin from './containers/admin'
import history from "./history";


export default class App extends Component{

  render(){
    return(

  <Router history={history}>
         <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Admin}/>
        </Switch>
   </Router>

       
    )



    
  }
}


