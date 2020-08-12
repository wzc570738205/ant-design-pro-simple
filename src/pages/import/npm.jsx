import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Typography } from 'antd';

const { Title } = Typography;

const Code = ({ lang, children }) => (
  <SyntaxHighlighter language={lang} style={tomorrow}>
    {children}
  </SyntaxHighlighter>
);

const install = `npm install address-smart-parse`;
const use = `import smart from 'address-smart-parse'

smart("陕西省西安市雁塔区丈八沟街道高新四路高新大都荟710061 刘国良 13593464918 211381198512096810")`;
export default () => {
  return (
    <>
      <Title level={4}>NPM引入</Title>
      <div>install</div>
      <Code lang="javascript">{install}</Code>
      <div>import && use</div>
      <Code lang="javascript">{use}</Code>
    </>
  );
};
