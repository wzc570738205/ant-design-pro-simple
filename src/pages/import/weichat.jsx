import React from "react";
import {Typography} from 'antd';
import Code from './code'

const {Title, Text, Paragraph, Link} = Typography;
export default () => {
  const api = `var address_parse = require("./smartWeChat/js/address_parse");

...
...
...

App({
  ....
  smart: function (val){
    return address_parse.method(val || '')
  },
  getAddressData:function(){//手动重新挂载数据
    address_parse.getData()
  }
})`
  const xxx = `const app = getApp()
//注意！！省市区文件加载时间可能略长
//需要识别调用
app.smart('新疆阿克苏温宿县博孜墩柯尔克孜族乡吾斯塘博村一组306号 150-3569-6956 马云')

//ex
//这里改为事件触发即可
onLoad: function() {
   setTimeout(function(){
      app.getAddressData()//保险起见，手动挂载数据
      var address = app.smart('广东省珠海市香洲区盘山路28号幸福茶庄,陈景勇，13593464918')
      console.log(address)
  },10000)
}`
  return (
    <Typography>
      <Title level={4}>小程序引入</Title>
      <Paragraph>
        将仓库中的 <Text code>smartWeChat</Text>文件夹拷贝到项目中<Text code>app.js</Text>的同级目录
      </Paragraph>
      <img src="https://gitee.com/Wzhichao/img/raw/master/uPic/P2DFuD45%20.png" alt=""/>
      <br/>
      <Paragraph>
        这里需要将demo里的接口替换为后台提供的接口，接口格式返回可以参考<Link href='https://wangzc.wang/addressJson/1'>addressJson</Link>
      </Paragraph>

      <Paragraph>
        后台json文件 <Text code>demo/后台json/database_export-sw0HKSJkxA1j.json</Text>
      </Paragraph>
      <h4>app.js</h4>
      <Code lang='javascript'>
        {api}
      </Code>
      <h4>xxx.js</h4>
      <Code lang='javascript'>
        {xxx}
      </Code>
      <Title level={4}>数据源跟换</Title>
      <Paragraph>
        由于小程序限制文件大小不能超过2MB，所以数据以接口返回，若需要更新请加群联系作者
      </Paragraph>
      <Paragraph>
        注，初次加载会调用接口请求数据，后续会从缓存中读取
      </Paragraph>
      <Paragraph>
        接口地址 https://wangzc.wang/addressJson/x
      </Paragraph>
    </Typography>
  )
}
