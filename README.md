# 注意
1. 有个async,node需要高版本,我测试使用的是8.2

2. import 'css' 无效

.postcssrc 文件,用postcss.config.js就好了

3. scss 文件

parcel会自动为你安装处理器依赖node-sass,一直有的问题`npm install node-sass`安装不上.parcel也是一样安装不上. 解决使用cnpm install node-sass安装,后就可以使用