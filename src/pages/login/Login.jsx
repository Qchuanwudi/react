import React,{Component} from "react";
import  {Form,Icon,Input,Button} from 'antd';


import logo from './images/logo.png';
import './login.less';

const {Item} = Form
class Login extends Component{
render(){
return(
  <div className="login">
<header className="login-header">
<img src={logo} alt="logo"></img>
<h1>后台管理系统</h1>
</header>
<div className="login-content">
<h1>用户登录</h1>
<Form onSubmit={this.handleSubmit} className="login-form">
        <Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="账户"
            />
        </Item>
        <Form.Item>
        <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="密码"
            />
            </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
        </Form.Item>
      </Form>
</div>
  </div>
)


}

}
export default Login