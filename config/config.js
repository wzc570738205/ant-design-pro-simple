// https://umijs.org/config/
import {defineConfig} from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const {REACT_APP_ENV} = process.env;
export default defineConfig({
  hash: true,
  history: { type: 'hash' },
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  base: '/smartParse/',
  publicPath:'/smartParse/',
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: '登录',
          path: '/user/login',
          component: './login',
        },
      ],
    },
    /*     {
      path: '/smartParse',
      component: '../layouts/SmartParseLayout',
      routes: [
        {
          name: '地址智能识别',
          path: '/smartParse',
          component: './smartParse',
        },
      ],
    }, */
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: '/home',
            },
            {
              path: '/home',
              name: '简介',
              component: './Welcome',
            },
            {
              path: '/startUse',
              name: '快速上手',
              component: './startUse',
            },
            /*  {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Welcome',
                },
              ],
            }, */
            {
              path: '/import',
              name: '引入方式',
              routes: [
                {
                  path: '/import/api',
                  name: 'API调用❤️',
                  icon: 'smile',
                  component: './import/api',
                },
                {
                  path: '/import/npm',
                  name: 'npm引入',
                  icon: 'smile',
                  component: './import/npm',
                },
                
                {
                  path: '/import/es5',
                  name: 'JavaScript引入',
                  icon: 'smile',
                  component: './import/script',
                },
                {
                  path: '/import/weichat',
                  name: '小程序接入',
                  icon: 'smile',
                  component: './import/weichat',
                }/* ,
                {
                  path: '/import/vue',
                  name: 'Vue接入',
                  icon: 'smile',
                  component: './import/vue',
                }, */
              ],
            },
            {
              path: '/smartParse',
              name: '查看示例',
              routes: [
                {
                  path: '/smartParse/example1',
                  name: '地址自动识别️',
                  icon: 'smile',
                  component: './example/example1',
                },
         /*        {
                  path: '/smartParse/example2',
                  name: '批量导入用户数据',
                  icon: 'smile',
                  component: './example/example2'
                } */
              ],
            },
            {
              name: '其他',
              path: '/fq',
              component: './fq',
            },
            /*      {
              name: 'list.table-list',
              icon: 'table',
              path: '/list',
              component: './ListTableList',
            }, */
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
