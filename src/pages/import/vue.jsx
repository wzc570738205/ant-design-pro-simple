import {Typography} from "antd";
import Code from "@/pages/import/code";
import React from "react";

const {Title, Text, Paragraph} = Typography;


export default () => {
  const one = `//gitee
<script src="http://wzhichao.gitee.io/smartParsePro/js/pcasCode.js"></script>
<script src="http://wzhichao.gitee.io/smartParsePro/js/zipCode.js"></script>
<script src="http://wzhichao.gitee.io/smartParsePro/js/address_parse.js"></script>`
  const oneUse = `mounted() {
  console.log(window.smart('河北省石家庄市新华区中华北大街68号鹿城商务中心6号楼1413室 150-3569-6956 马云'))
}`
  return (
    <Typography>
      <Title  level={3}>VUE下使用</Title>
      <Text>vue项目下如果不使用API调用的情况下，推荐2种方式</Text>
      <h4> 1.script全局引入</h4>
      <Text strong>
        index.html引入js(文件可自行下载部署在自己服务器上)
      </Text>
      <Code lang='javascript'>{one}</Code>
      <Paragraph>
        address_parse2.js会暴露全局window方法 <Text code>smar()</Text>
      </Paragraph>
      <Text strong>
        在xxx.vue文件使用
      </Text>
      <Code lang='javascript'>{oneUse}</Code>
      <br/>
      <h4> 2.npm 三方包引入</h4>
      <Code lang='javascript'>npm install  address-smart-parse -d -s</Code>
      <Code lang='javascript'>{`// main.js
 import smart from 'address-smart-parse';
 Vue.use(smart)

 // App.vue
console.log(this.smart('浙江省杭州市西湖区盘山路28号幸福茶庄 陈红 13593464918'));`}</Code>
    </Typography>
  )
}
