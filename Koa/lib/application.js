const http=require('http')
const Strem=require('stream')
const EventEmitter=require('events')
const context=require('./request')
const response=require('./response')
const request=require('./request')
class Koa extends EventEmitter{
    constructor(){
        super()
        this.fn
        this.context=context;
        this.request=request;
        this.response=response;
    }
    // use()是中间件：实现别人的函数通过use
    use(){
        this.fn=fn;
    }
    // 创建ctx
   createContext(req,res){
       //  深拷贝，新加属性后，不会影响原先对象  
       const ctx=Object.create(this.context)
       const request=ctx.request=Object.create(this.request);
       const response=ctx.response=Object.create(this.response);
        // 交叉赋值
        ctx.req=request.req=response.req=req;
        ctx.res=request.res=response.res=res;
        request.ctx=response.ctx;
        response.request=request;
        request.response=response;
        return ctx;
   }
    //创建处理请求的函数
    handleRequest(req,res){
        let ctx=this.createContext(req,res)/* 创建了ctx */
        this.fn(ctx)
        if(typeof ctx.body=='object'){
            res.setHeader('Content-Type','application/json;charset=utf8')
            res.end(Json.stringfy(ctx.body))
        }else if(ctx.body instanceof Stream){
            ctx.body.pipe(res)/* 处理流类型 */
        }else if(typeof ctx.body ==='string'||Buffer.isBuffer(ctx.body)){
            res.setHeader('Content-Type','text/html;charset=utf8')
            res.end(ctx.body)
        }else{
            res.end('Not found')
        }
    }
    // listen()中参数个数不确定
    listen(...args){
        const server=http.createServer(this.handleRequest().bind(this))
        server.listen(...args)
    }
}

