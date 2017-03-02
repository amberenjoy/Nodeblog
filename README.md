# Nodeblog-Node博客系统
全栈开发，使用yoeman自动化构建工具搭建一个完整的项目的结构<br/>
主要有三部分组成：Yo（脚手架，自动化工具），grunt/**gulp**（构建工具，压缩js/css/图片等，等你挖掘），bower（包管理工具，大家熟悉的dependencise）

###1. 前端功能模块，
1. 文章列表页(按照添加时间默认排序)，文章详情页，文章分类展示
 
2. 文章分页展示
 
3. 文章点赞，评论功能，`（待用ajax进行优化）`
 
4. 前台可按关键字搜索相关文章

5. 注册功能（前端密码加密， **md5**），登录功能 <del> `（未完成）`</del>, <br/>
 > 使用passport:<br/>
       `passportjs是一个提供authentication服务的node中间件。通常用于expressjs web application的验证。passportjs提供了很多的strategies，每一个strategy是对一种验证方式的封装。比如passport-local，常规的使用本地验证，一般用户信息存在数据库中。`
 > 实现登录验证，添加session会话配置<br/>
 > 添加中间件，实现用户权限管理

###2. 后台功能模块

1. 后台管理文章列表（按照不同的要求，可排序查看）
 
2. 可对文章列表进行：查看，更新 <del>（未完成）</del>，删除
 
3. 文章按照分类，作者筛选进行管理，添加根据关键字筛选的功能
 
4. 添加文章功能，在内容方面添加文本编辑器-CKeditor, <br/>
    >添加后端校验功能，解决中文标题不能提交的问题**（express-validator, pinyin）**
5. 添加更新文章功能，添加中间件（getPostById），减少重复代码。
 
6. 添加管理博客分类功能，查看，修改，删除 `（bug：删除一个分类时，没有同时能删除该分类下的所有文章）` 

7. 可添加分类  

8. 用户可自行修改密码。**（未完成）**
 
###3. 待完成
1. 添加文章时，文章作者应为当前用户。
  
