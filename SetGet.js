// get() set()完成了数据绑定
const food={
    like:{beef:'牛肉',beefDry:'牛肉干'},
    get name(){
        return this.like.beef
    },
    set meat(val){
       this.like.beef=val
    }
}
console.log(food.name)
food.beefDry='牛肉肉rou'
console.log(food.beefDry)