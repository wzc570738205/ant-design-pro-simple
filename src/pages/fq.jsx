import React from 'react';
import { Typography, Table} from 'antd';

const { Title, Paragraph, Text } = Typography;

/* const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
); */
const dataSource = [
  {
    key: '1',
    type: 'API接入',
    range: '前端后端通用',
    difficult: '简单的http调用即可',
    speed: '-',
    size: '-',
    pay: '2022-01-09前免费',
    address: `支持多种地址格式`,
  },
  {
    key: '2',
    type: 'Npm接入',
    range: '前端',
    difficult: 'es6模块导入',
    speed: '初次加载资源会很慢，后续会从浏览器缓存中读取',
    size: '2.2 MB',
    pay: '免费',
    address: '仅支持一种地址格式',
  },
  {
    key: '3',
    type: 'JavaScript接入',
    range: '前端',
    difficult: 'script接入',
    speed: '同上',
    size: '-',
    pay: '免费',
    address: '仅支持一种地址格式',

  },
];

const columns = [
  {
    title: '引入方式',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '适用范围',
    dataIndex: 'range',
    key: 'range',
  },
  {
    title: '接入难度',
    dataIndex: 'difficult',
    key: 'difficult',
  },
  {
    title: '加载速度',
    dataIndex: 'speed',
    key: 'speed',
  },
  {
    title: '占用体积',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: '费用',
    dataIndex: 'pay',
    key: 'pay',
  },
  {
    title: '适配地址',
    dataIndex: 'address',
    key: 'address',
  }
];

const dataSource1 = [
    {
      key: '1',
      type: '初级部署包',
      range: '￥999',
      difficult: '提供部署文档',
      speed: '不限',
      useTime:'永久',
      size: '一周',
      code:"不支持"
    },
    {
      key: '3',
      type: '高级部署包',
      range: '￥1999',
      difficult: '提供部署文档以及部署支持',
      speed: '不限',
      useTime:'永久',
      size: '半年',
      code: '支持'
    },
  ];
  
  const columns1 = [
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '费用',
      dataIndex: 'range',
      key: 'range',
    },
    {
      title: '服务方式',
      dataIndex: 'difficult',
      key: 'difficult',
    },
    {
      title: '二次开发',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '调用次数',
      dataIndex: 'speed',
      key: 'speed',
    },
    {
      title: '使用时长',
      dataIndex: 'useTime',
      key: 'useTime',
    },
    {
      title: '技术支持时长',
      dataIndex: 'size',
      key: 'size',
    }
  ];
export default () => (
  <Typography>
    <Title level={4}>各项接入方式对比</Title>
    <Table dataSource={dataSource} columns={columns} pagination={false} bordered />

    <Title level={4}>服务器到期后如何迁移</Title>
    <Paragraph>
      接口服务目前在<Text strong>2022-01-09 11:39:42</Text>停止服务，到期后您可以选择
      <Text strong>其他免费接入方式</Text>或者<Text strong>购买单独的部署包</Text>
    </Paragraph>

    <Title level={4}>如何购买部署包</Title>
    <Paragraph>
   加作者微信<Text strong>wangzhichao199</Text>进行相关事务咨询
    </Paragraph>
    <Title level={4}>部署包费用</Title>
    <Table dataSource={dataSource1} columns={columns1} pagination={false} bordered />
  </Typography>
);
