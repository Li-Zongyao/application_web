# 本项目属于个人毕业项目设计（市社科联立项项目信息管理系统的开发与设计）

 这是项目立项申请系统的前端系统


# 技术栈
## 前端技术栈设计
主体部分采用vue作为整体框架，vue的组件式结构给整个前端工程带来了良好的复用性和框架感。vue中包含了官方提供的vue-router路由管理，用于前端的路由配置，保证前端能根据需要进行页面组件跳转。Vuex是vue的核心组件之一，用于保存全局数据。通常用来保存不同模块间的状态数据。由于需要前后端数据及交互，这里我们使用axios作为请求部分的工具。axios主要负责html请求的生成、发送、配置。
同时使用webpack作为打包工具，依赖于npm良好的生态环境，vue项目可以添加大量的插件，并且很方便的进行更新。

![Image text](https://raw.githubusercontent.com/Li-Zongyao/application_web/master/Readme_img/1.png?token=AHRZQWCPVV3UAEZ2AHLPRVK52YOIE）
