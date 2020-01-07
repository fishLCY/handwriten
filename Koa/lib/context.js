let proto={}
// prop:要代理的对象，name:对象上的属性 
function defineGetter(prop,name){
    proto._defineGetter_(name,function(){
        return this[prop][name]/* this指向ctx */
    })
}
function defineGetter(prop,name){
    proto._defineGetter_(name,function(val){
        this[prop][name]=val/* this指向ctx */
    })
}
module.exports=proto