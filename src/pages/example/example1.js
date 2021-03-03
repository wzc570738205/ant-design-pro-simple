/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-08-10 10:43:52
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-11-16 18:45:16
 */
import React, {useState} from "react";
import {Typography,  Input, } from "antd";
import {smart} from '../import/service.js';

const {Title, Text} = Typography;
const {TextArea} = Input;

export default () => {
 /*  const addressList = [{address: '广东省珠海市香洲区盘山路28号幸福茶庄,陈景勇，13593464918'},
    {address: '马云，陕西省西安市雁塔区丈八沟街道高新四路高新大都荟 13593464918'},
    {address: '陕西省西安市雁塔区丈八沟街道高新四路高新大都荟710061 刘国良 13593464918 211381198512096810'},
    {address: '西安市雁塔区丈八沟街道高新四路高新大都荟710061 刘国良 13593464918 211381198512096810'},
    {address: '雁塔区丈八沟街道高新四路高新大都荟710061 刘国良 13593464918 211381198512096810'},
    {address: '河北省石家庄市新华区中华北大街68号鹿城商务中心6号楼1413室 150-3569-6956 马云'},
    {address: '疆维吾尔自治区乌鲁木齐市沙依巴克区西虹东路463号 400-1808855 小红'},
    {address: '新疆阿克苏温宿县博孜墩柯尔克孜族乡吾斯塘博村一组306号 800-8585222 马云'}] */
  const [response, setresponse] = useState({})
  const [inputValue, setinputValue] = useState('')
  const keyMap = {
    province: '省份',
    city: '市',
    county: '区',
    street: '街道',
    name: '姓名',
    idCard: '身份证号码',
    phone: '电话',
    zipCode: '邮编',
    address: '详细地址'
  }
  const smartAddress = (value) => {
    const params = {
      address:value
    }
    setinputValue(value)
    smart(params).then((res) => {
      setresponse(res.data)
    });
   
  }
  return (
    <>
      <Title level={3}>地址自动识别</Title>
  {/*     <Typography>
        <Title level={3}>地址自动识别</Title>
        <Alert message="地址、姓名、电话、邮编、身份证号码（字母大写）用空格或者特殊字符分开!!" type="warning" showIcon/>
        <br/>
        <Text strong>特殊字符</Text>
        <Alert message="~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“’。，、？-" type="info"/>
      </Typography>
      <br/>

      <Text strong>支持的地址格式（点击识别）</Text>

      <List
        size="small"
        dataSource={addressList}
        renderItem={(item, index) => (
          <List.Item style={{padding: 0}}>
            {index + 1}、 <Button type="text" onClick={() => smartAddress(item.address)}>{item.address}</Button>
          </List.Item>
        )}
      /> */}
      <TextArea rows={4} placeholder='请输入地址或者粘贴地址识别' value={inputValue}
                onChange={(e) => smartAddress(e.target.value)}/>
      <Text strong>识别结果</Text>
      {Object.keys(response).map((item) =>
        keyMap[item] && response[item] ? (
          <p key={item}>
            <Text type="warning">{keyMap[item]}</Text>: <Text type="danger">{response[item]}</Text>
          </p>
        ) : null,
      )}
    </>
  )
}

