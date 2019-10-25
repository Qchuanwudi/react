import React, { Component } from 'react'
import LinkButton from "../../../components/link_button";
import {withRouter} from "react-router-dom";
import  "./index.less";
import {removeUserToken} from "../../../redux/action-creators/user";

import {connect} from "react-redux";
/*管理界面头部*/
@connect(
  state=>({username: state.user.user.username}),
  {removeUserToken}
  )



@withRouter
class Header extends Component {
  render() {
    return (
      <div className="header">
       <div className="header-top">
          <span>欢迎, {this.props.username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left"></div>
          <div className="header-bottom-right">
            <span></span>
            <img  alt="weather"/>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header