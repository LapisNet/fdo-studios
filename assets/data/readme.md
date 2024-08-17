# 静态数据说明

0. 为保证旧版页面兼容性请不要大改文件内容与格式,谢谢喵

   ---- XiaozhiSans

1. [新闻](./news.txt) --> `./news.txt`文件，每条新闻独占一行，如：   

   ```text news.txt
   新闻1
   新闻2
   新闻3
   ```

2. [成员](./members.json) --> `./members.json`文件，key递增即可，如：

   ```json members.json
   {
     "0": {
       "name": "Love-Kogasa" // 页面中显示的名字与跳转页面
     },
     "1": {
       "name": "不甜"
     }
   }
   ```
   添加后请不要忘记在[成员目录](../../members/)(`../../members/`)下添加对应的文件夹并放入`index.html`

3. [项目](./projects.json) --> `./projects.json`文件，key递增即可，如：

   ```json projects.json
   {
     "0": {
       "title": "项目名称",
       "titb": "项目小标题",
       "info1": "内容1",
       "info2": "内容2"
     }
   }
   ```

4. 获取仓库push权限请在群里`@XiaozhiSans`并发送你的github用户名
