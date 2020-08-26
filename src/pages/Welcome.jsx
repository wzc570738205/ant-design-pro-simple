import React from 'react';
import { Typography, Avatar, Tooltip } from 'antd';
import pay from '../assets/pay.png';
import one from '../assets/payuser/1.jpg';
import two from '../assets/payuser/2.jpg';
import three from '../assets/payuser/3.png';

const { Title, Paragraph, Text, Link } = Typography;

/* const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
); */

export default () => (
  <Typography>
    <Title level={2}>前言</Title>
    <Paragraph>
      之前使用过X宝以及X度之类的识别 API，后来由于开始按次收费，便开始自己开发了这款基于 JavaScript
      的免费识别项目，识别效果基本满足项目需求。
    </Paragraph>
    <Paragraph>
      用户渐渐变多后，我亦在不断地完善识别准确率以及添加接口支持，相应的也解决了不少用户的使用需求。
    </Paragraph>

    <Title level={2}>介绍</Title>
    <Paragraph>
      地址智能识别是通过{' '}
      <a
        href="https://github.com/modood/Administrative-divisions-of-China"
        rel="noreferrer"
        target="_blank"
      >
        中华人民共和国行政区
      </a>
      划提供的数据进行前端静态地址匹配分析的轻量化解析项目，初步面向物流/快递等涉及到地址处理的使用场景，可以把用户的详细地址切分为对应的省市区、姓名、电话等等。
    </Paragraph>
    <Paragraph>
      目前项目分为<Text strong>前端静态 JavaScript 分析</Text>和<Text strong>接口调用</Text>
      支持；
    </Paragraph>
    <Paragraph>
      接口调用于今年5月份上线，解决了很多用户反映前端地址库文件太大导致加载慢的问题。项目后续会持续优化解析速度以及识别准确率和对多样化识别的支持。
    </Paragraph>
    <Paragraph>
      生活中与地址打交道的地方不少，比如快递邮寄，如果有一百个人邮寄，那么从输入姓名、电话、地址，来来回回至少需要粘贴、复制、选择千遍，费时费力。
    </Paragraph>
    <Paragraph>
      <Text strong>smartParsePro</Text>
      正是为解决这个问题而来，如果正在写进销存系统相关，可以很好地借助这个插件实现地址智能识别解析。
    </Paragraph>

    <Title level={3}>segmentfault</Title>
    <Paragraph>
      该项目已入选{' '}
      <Link href=" https://segmentfault.com/a/1190000022680721" target="_blank">
        「SFOSSP -思否开源项目支持计划」
      </Link>{' '}
      ，我们希望借助社区的资源对开源项目进行相关的宣传推广，并作为一个长期项目助力开源事业的发展，与广大开发者共建开源新生态。
    </Paragraph>
    <Title level={3}>赞助商</Title>
    <Paragraph>

    <a href="http://www.lipinyun.com/" rel="noreferrer" target="_blank">
      <Tooltip title="礼品云:专业小礼品代发" placement="top">
        <img src={three} alt="礼品云:专业小礼品代发" width='150px'/>
      </Tooltip>
    </a>
    </Paragraph>

    <Title level={3}>赞助者</Title>
    <Paragraph>

    <Avatar.Group>
      <Tooltip title="东欢商贸报单号" placement="top">
        <Avatar size="large" src={one} />
      </Tooltip>
      <Tooltip title="陈师傅" placement="top">
        <Avatar size="large" src={two} />
      </Tooltip>
    </Avatar.Group>
    </Paragraph>

    <Title level={3}>赞助</Title>
    <Paragraph>
      <img src={pay} alt="" width="400px" />
    </Paragraph>
  </Typography>
);
