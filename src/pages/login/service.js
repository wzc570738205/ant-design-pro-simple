/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-08-05 14:23:42
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-11-12 23:05:33
 */
import request from 'umi-request';

export async function fakeAccountLogin(params) {
  return request('/api/user/login', {
    method: 'POST',
    data: params,
  });
}
