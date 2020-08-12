/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-08-07 11:12:29
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-08-07 11:21:21
 */
import request from 'umi-request';

export async function smart(params) {
  return request('https://wangzc.wang/smAddress', {
    method: 'POST',
    data: params,
    getResponse: true
  });
}
