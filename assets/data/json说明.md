0. 为保证旧版页面兼容性请不要大改文件内容与格式,谢谢喵		---- XiaozhiSans

1.  新闻 ---> `/configs/news.txt`文件，每条新闻独占一行，如：   

   ```
   新闻1
   新闻2
   新闻3
   ```

2.  成员 ---> `/configs/members.json`文件，key递增即可，如：

   ```json
   {
     "0": {
       "name": "怀有一颗瑕疵的心" // 页面中显示的名字与跳转页面
     },
     "1": {
       "name": "不甜"
     }
   }
   ```

   添加后请不要忘记在`/members/`目录下添加对应的文件夹与`index.html`

3.  项目 ---> `/configs/projects.json`文件，key递增即可，如：

   ```json
   {
     "0": {
       "title": "项目名称",
       "titb": "项目小标题",
       "info1": "内容1",
       "info2": "内容2"
     }
   }
   ```

4. 获取push权限请在群里`@不甜`并发送你的github名称
