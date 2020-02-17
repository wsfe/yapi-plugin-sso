# yapi-plugin-sso
第三方sso登录插件，由于每家公司不一样登录，验证等接口的传参，返回参数等都会有所不同，所以大家根据自身情况去修改。
配置方法如下：

第一步： 在生成的配置文件config.json中加入如下配置：

```
"plugins": [
  {
    "name": "sso",
    "options": {
      "type": "sso",
      "loginServer": "http://sso.example.com/sso/login",
      "authServer" : "https://sso.example.com/sso/serviceValidate",
      "emailPostfix": "@163.com",
      "btnText": "SSO登录"
    }
  }
]
```
这里面的配置项含义如下：

- type 登陆类型，目前只支持sso登陆
- loginServer 点击登陆按钮式需要跳转的url，用户通过该页面登录以后会向服务器发送一个token
- emailPostfix 登陆邮箱后缀
- authServer 服务端在获取token之后，可以通过这个url来获取用户的详细信息
- btnText 登录按钮名称
第二步：在config.json 这层目录下运行 yapi plugin --name yapi-plugin-sso --build 重新下载插件并重新构建。如果是内部私有仓库，那么直接进去venders文件夹下面安装`npm i yapi-plugin-sso`，并执行`ykit pack -m`

第三步： 重启服务器
