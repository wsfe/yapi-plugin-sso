import React, { Component } from 'react'

const qualifyURL = (url, encode) => {
  url = url || '';
  let ret = location.protocol + '//' + location.host + (url.substr(0, 1) === '/' ? '' : location.pathname.match(/.*\//)) + url;
  if (encode) {
    ret = encodeURIComponent(ret);
  }
  return ret;
}

module.exports = function (options) {

  const handleLogin = () => {
    const loginURI = '/api/user/login_by_token';
    const { loginServer } = options;
    let ret = qualifyURL(loginURI, true);
    let redirectURL = loginServer  + '?service=' + ret;
    location.href = redirectURL;
  }
  const loginText = options.loginText || "SSO登录"

  const WSComponent = () => (
    <button onClick={handleLogin} className="btn-home btn-home-normal" >{loginText}</button>
  )
  this.bindHook('third_login', WSComponent);
}