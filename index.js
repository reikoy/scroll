//不纯的函数，依赖外面的变量min
var min=18
var checkage=age=>age>min

//纯的 缺点：把18写死了
var checkage=age=>age>18



//偏应用函数
const partial=(f,...args)=>(...moreArgs)=>f(...args,...moreArgs)
const add3=(a,b,c)=>a+b+c
const fivePlus=partial(add3,2,3)
fivePlus(4)

//柯里化函数：通过偏应用函数实现，他是把一个多参数函数转换为一个嵌套一元函数的过程 
//传递给函数一部分参数来调用他，让他返回一个函数去处理剩下的参数
//柯里化之前
function add(x,y){
    return x+y
}
add(1,2)

//柯里化之后
function addX(y){
    return function(x){
        return x+y
    }
}
addX(2)(1)


//用柯里化改造：
var checkage=min=>(age=>age>min)
var checkage18=checkage(18)
checkage18(20)

//柯里化函数的优缺点
//事实上柯里化是一种‘预加载’函数的方法，通过传递较少参数，得到一个已经记住了这些参数的新函数，某种意义上将，这是一种对参数的‘缓存’，是一种非常高效的编写函数的方法