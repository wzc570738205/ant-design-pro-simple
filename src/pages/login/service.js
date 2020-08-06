/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-08-05 14:23:42
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-08-05 14:47:40
 */
import request from 'umi-request';

export async function fakeAccountLogin(params) {
  return request('/bdsp/interManager/execInterface/login/admin', {
    method: 'POST',
    data: params,
  });
}
