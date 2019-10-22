import React,{Component} from "react";
import  {Form,Icon,Input,Button,message} from 'antd';
import {Redirect} from "react-router-dom";


import logo from './images/logo.png';
import './login.less';
import { rule } from "postcss";

const {Item} = Form
class Login extends Component{

handleSubmit = (event) =>{
const form =this.props.form
const username = form.getFieldVale('username')
const password = form.getFieldVale('password')
const values = form.getFieldValue()

}

validator=(rule,value,callback) =>{
  const length = value && value.length
  const pwdReg = /^[a-zA-Z0-9_]+$/
  if (!value) {
    // callback如果不传参代表校验成功，如果传参代表校验失败，并且会提示错误
    callback('必须输入密码')
  } else if (length < 4) {
    callback('密码必须大于4位')
  } else if (length > 12) {
    callback('密码必须小于12位')
  } else if (!pwdReg.test(value)) {
    callback('密码必须是英文、数组或下划线组成')
  } else {
    callback() // 必须调用callback
  }
}



render(){
 console.log(this.props.form)
    const { getFieldDecorator } = this.props.form
return(
  <div className="login">
<header className="login-header">
<img src={logo} alt="logo"/>
<h1>后台管理系统</h1>
</header>
<div className="login-content">
<h1>用户登录</h1>
<Form onSubmit={this.handleSubmit} className="login-form">
<Item>
       {
           getFieldDecorator('username',{
            rules: [
              {required: true, whitespace: true, message: '必须输入用户名'},
              {min: 4, message: '用户名必须大于4位'},
              {max: 12, message: '用户名必须小于12位'},
              {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数组或下划线组成'}
            ]
            })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="账户"
            />
           )
          }
        </Item>
        <Form.Item>{
      getFieldDecorator('password',{
        rules: [
          // 自定义表单校验规则
          {validator: this.validator}
        ]
      })(
        <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="密码"
            />
      )
          }
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
export default Form.create()(Login)