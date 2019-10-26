import React, { Component } from 'react'
import { Modal} from 'antd';
import LinkButton from "../../../components/link_button";
import {withRouter} from "react-router-dom";
import  "./index.less";
import {removeUserToken} from "../../../redux/action-creators/user";
import dayjs from "dayjs";
import {connect} from "react-redux";
/*管理界面头部*/
const { confirm } = Modal;



@connect(
  state=>({username: state.user.user.username,
 
  }),
  {removeUserToken}
  )
@withRouter
class Header extends Component {


state ={
currentTime:dayjs().format('YY-MM-DD HH:mm:ss')

}

componentDidMount(){


    this.intervalId = setInterval(() => {
  this.setState({
    currentTime:dayjs().format('YY-MM-DD HH:mm:ss')
  })
}, 1000);

}

componentWillUnmount(){

clearInterval(this.intervalId)

}





logout =()=>{
  confirm({
    title: '确定退出吗?',
  
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });




}









  
  render() {
const path = this.props.location.pathname
const {currentTime} = this.state

    return (
      <div className="header">
       <div className="header-top">
          <span>欢迎, {this.props.username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{path}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img  alt="weather"/>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header