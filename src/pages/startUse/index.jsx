import React from 'react';
import { Typography } from 'antd';
import { Link } from 'umi';

const { Title, Paragraph } = Typography;

export default () => (
  <Typography>
    <Title level={4}>在开始使用前，你需了解以下知识</Title>
    <Paragraph>
      1.
      <Link href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank">
        HTML基础知识
      </Link>
      ,生成一些基础内容
    </Paragraph>
    <Paragraph>
      2.
      <Link href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank">
        JavaScript基础知识
      </Link>
      ,为页面添加交互能力
    </Paragraph>
    <Paragraph>
      3.
      <Link href="https://github.com/axios/axios" target="_blank">
        axios
      </Link>
      ,易用、简洁且高效的http库
    </Paragraph>
    <Paragraph>
      如果你已经掌握，那么 <Link to="/import/api" >开始使用</Link>吧
    </Paragraph>
  </Typography>
);
