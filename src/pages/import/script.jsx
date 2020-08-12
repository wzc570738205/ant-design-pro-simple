import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Typography } from 'antd';
import styles from '../Welcome.less';

const { Title } = Typography;

const Code = ({ lang, children }) => (
  <SyntaxHighlighter language={lang} style={tomorrow}>
    {children}
  </SyntaxHighlighter>
);

const use = `//本地资源
<script src="js/pcasCode.js"></script>
<script src="js/zipCode.js"></script>
<script src="js/address_parse.js"></script>
//gitee
<script src="http://wzhichao.gitee.io/smartParsePro/js/pcasCode.js"></script>
<script src="http://wzhichao.gitee.io/smartParsePro/js/zipCode.js"></script>
<script src="http://wzhichao.gitee.io/smartParsePro/js/address_parse.js"></script>

//全局会暴露smart()方法,参数为要识别的完整字符串
smart("陕西省西安市雁塔区丈八沟街道高新四路高新大都荟710061 刘国良 13593464918 211381198512096810")`;
export default () => {
  return (
    <>
      <Title level={4}>JavaScript引入</Title>
      <Code lang="javascript">{use}</Code>
      <Title level={4}>codePen </Title><a href="https://codepen.io/wzc570738205/pen/RwrjLbq?editors=1010" rel="noreferrer" target='_blank'>新窗口打开</a>
      <iframe
        className={styles.iframe}
        src="//codepen.io/wzc570738205/pen/RwrjLbq?editors=1010"
        title="script import"
        frameBorder="0"
      />
    </>
  );
};
