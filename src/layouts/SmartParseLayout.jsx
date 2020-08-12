import { getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { connect } from 'umi';
import React from 'react';
import { Layout, Alert } from 'antd';
import TextLoop from 'react-text-loop';
import logo from '../assets/smart.png';
import styles from './UserLayout.less';

const { Content, Footer } = Layout;
const SmartParseLayout = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    breadcrumb,
    ...props,
  });
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <a href="https://github.com/wzc570738205/smartParsePro">
        <img alt="logo" className={styles.logo} src={logo} />
        <span className={styles.title}>地址智能识别</span>
      </a>
      <Alert
        showIcon
        message={
          <TextLoop mask>
            <div>Notice message one</div>
            <div>Notice message two</div>
            <div>Notice message three</div>
            <div>Notice message four</div>
          </TextLoop>
        }
        type="success"
      />
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </HelmetProvider>
  );
};

export default connect(({ settings }) => ({ ...settings }))(SmartParseLayout);
