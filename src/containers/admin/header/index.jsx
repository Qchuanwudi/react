import React, { Component } from 'react'
import { Modal,Button,Icon} from 'antd';
import LinkButton from "../../../components/link_button";
import {withRouter} from "react-router-dom";
import  "./index.less";
import screenfull from "screenfull";

import {removeUserToken} from "../../../redux/action-creators/user";
import dayjs from "dayjs";
import {connect} from "react-redux";
import {reqWeather} from "../../../api";
import "./index.less";
/*管理界面头部*/




@connect(
  state=>({username: state.user.user.username,
    headerTitle:state.headerTitle
  }),
  {removeUserToken}
  )
@withRouter
class Header extends Component {


state ={
currentTime:dayjs().format('YY-MM-DD HH:mm:ss'),
dayPictureUrl:'',
weather:'',
isFullScreen: false,


}


logout =()=>{
  Modal.confirm({
    title: '确定退出吗?',
    onOk:() =>{
      this.props.removeUserToken()
    },
    onCancel() {
      console.log('Cancel');
    },
  });

}


showWeather = async () =>{
const {dayPictureUrl,weather} =await reqWeather('北京')
this.setState({
dayPictureUrl,
weather
})

}


handleFullScreen =() =>{
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
  }
  







componentDidMount(){
    this.intervalId = setInterval(() => {
  this.setState({
    currentTime:dayjs().format('YY-MM-DD HH:mm:ss')
  })
}, 1000);
//请求天气数据
this.showWeather()
this.setState({

isFullScreen: !this.state.isFullScreen

})

}




componentWillUnmount(){

clearInterval(this.intervalId)

}


  render() {
    const {username, headerTitle} = this.props
    console.log(headerTitle)
const {currentTime,weather,dayPictureUrl,isFullScreen} = this.state

    return (
      <div className="header">
       <div className="header-top">
       <Button size="small" onClick={this.handleFullScreen}>
            <Icon type={isFullScreen ? 'fullscreen-exit' : 'fullscreen'} />
          </Button> &nbsp;
          <span>欢迎, {username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{headerTitle}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src={dayPictureUrl} alt="weather"/>
            <span>{weather}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header