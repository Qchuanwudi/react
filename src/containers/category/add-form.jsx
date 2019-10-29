import React, { Component } from 'react'
import { Form, Input } from 'antd'
import PropTypes from "prop-types";
const {Item} = Form







/*添加分类的form组件*/
@Form.create()
class AddUpdateForm extends Component {

static propTypes = {//给AddForm函数对象添加
setForm:PropTypes.func.isRequired,
categoryName:PropTypes.string

}

constructor (props) {
super(props)
this.props.setForm(this.props.form)
}



  render() {
    const {getFieldDecorator} = this.props.form
    console.log(getFieldDecorator)
    return (
     <Form>
<Item>
{
getFieldDecorator('categoryName',{
  initialvalue:'',
 rules:[
{required:true,message:'分类名称必须输入'}

 ]

})(
  <Input placeholder="请输入分类名称"/>
)


}
</Item>
     </Form>
    )
  }
}
export default  AddUpdateForm