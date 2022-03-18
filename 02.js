const http=require("http")  //导入http模块
const server=http.createServer(); //创建http对象
server.on("request",function(res,req) //绑定request方法，用于请求服务器
{
    console.log("绑定了方法")
}) 
server.listen(8080,function()
{
    console.log("127.0.0.1")
})

