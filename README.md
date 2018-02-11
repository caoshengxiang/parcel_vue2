# 项目

parcel工具学习项目,vue, vuex, vue-router

运行:

`npm run dev`

`npm run build`

# 遇到的问题
1. parcel index.html执行命令无反应

解决: 有个async,node需要高版本,我测试使用的是8.2

2. import 'css' 无效

解决: .postcssrc 文件,用postcss.config.js就好了

3. scss 文件

解决: parcel会自动为你安装处理器依赖node-sass,一直有的问题`npm install node-sass`安装不上.parcel也是一样安装不上. 解决使用cnpm install node-sass安装,后就可以使用

4. vuex
    * map辅助函数报错

5. vue-router
    * require.ensure 报错未定义

6. 怎么设置代理

7. 热更新很多时候不起作用,需手动重启

8. 怎么将默认启动localhost改成ip方便其他机器访问页面