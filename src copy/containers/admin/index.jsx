

import React,{Component} from "react";

import { Layout } from 'antd';
import {Route,Switch,Redirect} from "react-router-dom";


import LeftNav from "./left-nav"
import AdminHeader from "./header"
import WithCheckLogin from "../with-check-login";
import Home from "../../components/home";
import Role from "../role";
import User from "../user";
import Bar from "../../components/charts/bar";
import Line from "../../components/charts/line";
import Category from "../category";
import Pie from "../../components/charts/pie";

const {Footer, Sider, Content } = Layout;
@WithCheckLogin
class Admin extends Component{




render(){
return(
  
  <Layout style={{height:'100%'}}>
      <Sider>
        <LeftNav/>
      </Sider>
      <Layout>
        <AdminHeader/>
        <Content style={{backgroundColor: 'white', margin: '30px 15px 0 15px'}}>
          <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/category" component={Category}/>
          <Route path="/role" component={Role}/>
          <Route path="/user" component={User}/>
          <Route path="charts/bar" component={Bar}/>
          <Route path="charts/line" component={Line}/>
          <Route path="charts/pie" component={Pie}/>
          <Redirect to="/home"/>
          </Switch>
          </Content>
        <Footer style={{textAlign: 'center'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
      </Layout>
    </Layout>
    )
  }
  
  }
  export default  Admin