import React, {useState} from 'react';
import {Typography, Button, Divider, Tabs, message, Collapse,Alert} from 'antd';
import {smart} from './service';
import styles from '../Welcome.less';
import Code from './code'

const {Title, Paragraph, Text} = Typography;
const {TabPane} = Tabs;
const {Panel} = Collapse;

export default () => {
  const [response, setresponse] = useState({result: ''});
  const [loading, setloading] = useState(false);
  const one = {
    address: '新疆阿克苏温宿县博孜墩柯尔克孜族乡吾斯塘博村一组306号 150-3569-6956 马云',
  };
  const two = {
    addressList: [
      '新疆阿克苏温宿县博孜墩柯尔克孜族乡吾斯塘博村一组306号 150-3569-6956 马云',
      '雁塔区丈八沟街道高新四路高新大都荟710061 刘国良 13593464918 211381198512096810',
    ],
  };
  const test = (params) => {
    setloading(true);
    smart(params).then((res) => {
      setresponse(res.data);
      setloading(false);
      message.success('请求成功');
    });
  };
  const callback = () => {
    setresponse({result: ''});
    setloading(false);
  };

  return (
    <Typography>
      <Alert message="服务器2021-01-09 11:39:42到期，若未找到合适赞助，服务器到期便停止接口支持(服务器费用太高，请谅解)"  showIcon banner />

      <Title level={4}>Api调用(强烈推荐<span role="img" aria-label="like">👍</span> )</Title>
      <Paragraph>
        <Text strong>接口调用地址：</Text>{' '}
        <Text code copyable className={styles.pre}>
          https://wangzc.wang/smAddress
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>接口请求方式：</Text>{' '}
        <Text code className={styles.pre}>
          POST
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>接口请求参数：</Text>
      </Paragraph>
      <Tabs defaultActiveKey="1" type="card" onChange={callback}>
        <TabPane tab="单条数据" key="1">
          <Paragraph>
            <Divider>单条数据</Divider>
            <Code lang="javascript">{JSON.stringify(one)}</Code>
          </Paragraph>
          <Button type="primary" block onClick={() => test(one)} loading={loading}>
            点击测试
          </Button>
        </TabPane>
        <TabPane tab="多条数据" key="2">
          <Paragraph>
            <Divider>多条数据</Divider>
            <Code lang="javascript">{JSON.stringify(two)}</Code>
          </Paragraph>
          <Button type="primary" block onClick={() => test(two)} loading={loading}>
            点击测试
          </Button>
        </TabPane>
      </Tabs>
      {response.list ? <Code lang="javascript">{JSON.stringify(response)}</Code> : null}
      <Collapse defaultActiveKey={['0']}>
        {response.list && response.list.length === 0 ? (
          <Panel header={one.address} key="0">
            {Object.keys(response).map((item) =>
              item === 'list' ? null : (
                <p key={item}>
                  <Text type="warning">{item}</Text>: <Text type="danger">{response[item]}</Text>
                </p>
              ),
            )}
          </Panel>
        ) : null}
        {response.list && response.list.length > 0
          ? response.list.map((res, index) => (
            <Panel header={two.addressList[index]} key={index}>
              {Object.keys(res).map((item) => (
                <p key={item}>
                  <Text type="warning">{item}</Text>: <Text type="danger">{res[item]}</Text>
                </p>
              ))}
            </Panel>
          ))
          : null}
      </Collapse>
    </Typography>
  );
};
