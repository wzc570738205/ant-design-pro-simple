import React from 'react';
import { Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './index.less';

const { Paragraph } = Typography;
const Smart = () => {
  return (
    <Paragraph copyable={{ icon: <SmileOutlined /> }}>Custom icon.</Paragraph>
  )
};
export default Smart;
