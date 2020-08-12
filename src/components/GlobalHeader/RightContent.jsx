import { Tooltip } from 'antd';
import { GithubOutlined, QqOutlined } from '@ant-design/icons';
import React from 'react';
import { connect } from 'umi';
import styles from './index.less';

const GlobalHeaderRight = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
       <Tooltip title="QQ交流群749539640">
        <a
          style={{
            color: 'inherit',
          }}
          target="_blank"
          href="https://jq.qq.com/?_wv=1027&k=55bQp1O"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QqOutlined />
        </a>
      </Tooltip>
      <Tooltip title="github主页">
        <a
          style={{
            color: 'inherit',
          }}
          target="_blank"
          href="https://github.com/wzc570738205/smartParsePro"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <GithubOutlined />
        </a>
      </Tooltip>
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
