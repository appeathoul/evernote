### 项目介绍
这个项目主要用来分享看到的一些优秀文章和分享一些知识总结，主要是人工智能和前端相关的。本人会撰写在印象笔记内，然后分享为公开链接。

### 分享内容
人工智能、前端、开发语言、GIS、图形图像、乐高

### 资源分享，参与奉献
项目安装方式极其简单，如果有更好的资源非常欢迎给大家分享出来，你可以选择提交 Issue 或提交 PR。
如何提交 PR，参考 [GitHub Help](https://help.github.com/articles/working-with-forks/) 即可。

### 安装

下载源码, 请执行下列命令：  
```bash
# 克隆代码
$ git clone https://github.com/appeathoul/evernote.git
$ cd evernote
```

代码下载完成后, 需要安装依赖：
  原项目采用yarn，但是yarn和hadoop的yarn冲突，这里也可以采用npm
```bash
# 安装依赖
$ yarn 
$ npm install

# 检查是否符合文档规范
$ yarn lint:md
$ npm run lint:md

# 开始阅读
$ yarn docs:dev 
$ npm run docs:dev 
```

在浏览器中打开 <http://localhost:8080/evernote/>

### 更新

在 `evernote` 文件夹中运行下面的命令就会从 GitHub 仓库拉取最新版本。

```bash
# 拉取代码
$ git pull
```
