/*
 * @Author: your name
 * @Date: 2022-04-16 21:28:46
 * @LastEditTime: 2022-04-16 22:13:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \小兔鲜儿e:\大事件后台管理系统\js\baseAPI.js
 */
$.ajaxPrefilter(function (option) {
    option.url = 'http://www.liulongbin.top:3007' + option.url;
    if (option.url.indexOf('/my/') !== -1) {
        option.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    option.complete = function (res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            alert`请先登录！`;
            localStorage.removeItem('token');
            location.href = './login.html';
        }
    }
})