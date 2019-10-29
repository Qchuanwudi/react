import React, { Component } from 'react'
import {  
Card,
Button,
Icon,
Table,
Modal,
message,

} from 'antd'
import {connect} from 'react-redux'
import { addCategoryAsync,updateCategoryAsync,getCategorysAsync} from "../../redux/action-creators/categorys";

// import {reqCategorys} from "../../api";
import LinkButton from '../../components/link_button';
// import AddForm from "./add-form";
import AddUpdateForm from './add-form';


  @connect(
    state =>({
    categorys:state.categorys
    }),
    {getCategorysAsync,addCategoryAsync,updateCategoryAsync}
  )
  class Category extends Component {

    columns =[
      {
        title:'分类名称',
        dataIndex:'name',
      },
      {
      width:300,
      title:'操作',
      render:(category) =><LinkButton onClick={() => this.showUpdate(category)}>修改分类</LinkButton>,
      }]





state= {

loading:false,
isShowAdd:false,//添加对话框
isShowUpdate:true,
}

  
//获取分类列表
getCategorys = async() =>{
  // 显示loading
  this.setState({
    loading: true
  })
  const msg = await this.props.getCategorysAsync()


  this.setState({
    loading:false
  })
if (msg) {
  message.error(msg)
}

}

/*  添加分类*/
addCategory =() =>{
//进行输入验证
this.form.validateFields(async(error,values)=>{
if (!error) {
  //得到输入的数据
  const {categoryName} = values
  //添加分类的请求
  const msg = await this.props.addCategoryAsync(categoryName)
  if (msg) {
    //添加失败，显示提示
    message.error(msg)
  }else{

    this.setState({
      isShowAdd:false
    })
    //添加成功，更新列表
    message.success('成功添加分类')
    
  }
}

})
}


//更新分类
updateCategory = () =>{
this.form.validateFields(async(error,values) =>{
  if (!error) {
    // 得到输入数据
    const {categoryName} = values
    const categoryId = this.category._id

    const msg = await this.props.updateCategoryAsync({categoryId, categoryName})
    if (msg) {
      // 更新失败, 显示提示
      message.error(msg)
    } else {
      this.setState({
        isShowUpdate: false
      })
      message.success('更新分类成功')
    }

  }
})
}


hideAdd = () => {
  this.form.resetFields() // 重置输入数据(回到初始值)
  this.setState({
    isShowAdd: false
  })
}






showUpdate = (category) => {
  // 保存分类
  this.category = category
  // 显示
  this.setState({
    isShowUpdate: true
  })

}





/* 
  隐藏更新界面
  */
 hideUpdate = () => {
  // 删除前面添加的属性
  delete this.category
  // 重置输入
  this.form.resetFields()
  // 隐藏更新界面
  this.setState({
    isShowUpdate: false
  })
}



//钩子生命周期
componentDidMount () {
this.getCategorys()
}


/*一步获取分类列表*/
  render() {
    const {loading,isShowAdd, isShowUpdate} = this.state
const {categorys} =this.props
const category = this.category || {} // 在没有指定修改的分类前, 默认是一个{}
    const extra = (
      <Button type="primary" onClick={() => this.setState({isShowAdd: true})}>
        <Icon type="plus"></Icon>
        添加
      </Button>
    )
    return (
      <Card extra={extra}>
      <Table 
        bordered
        loading={loading}
        dataSource={categorys} 
        columns={this.columns} 
        rowKey="_id"
        pagination={{pageSize: 5, showQuickJumper: true}}
      />
      <Modal
          title="添加分类"
          visible={isShowAdd}
          onOk={this.addCategory}
          onCancel={this.hideAdd}
          >

        <AddUpdateForm setForm={(form) => this.form = form}/>
        </Modal>
          <Modal
          title="修改分类"
          visible={isShowUpdate}
          onOk={this.updateCategory}
          onCancel={this.hideUpdate}
        >
          <AddUpdateForm  setForm ={(form) =>this.form = form} categoryName={category.name}/>
        </Modal>
         
       
      </Card>
    )
  }
  
}
 
export default Category
