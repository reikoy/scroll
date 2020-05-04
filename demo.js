
function a(el){
    let par=el.offsetParent
    let top=el.offsetTop;
    while (par&&par.tagName!=='BODY') {
        top+=par.clientTop
        top+=par.offsetTop
        par = par.offsetParent
    }
    return top
}
window.addEventListener('scroll',function(){
    let top=a(el)
    console.log(top)
    let clientW=document.documentElement.clientHeight
    let clientT=document.documentElement.scrollTop
    console.log(clientT+clientW)
    if (top+el.clientHeight>=clientT&& top<=clientT+clientW) {
        console.log('进来了')
    }else {
        console.log('出去了')
    }

})