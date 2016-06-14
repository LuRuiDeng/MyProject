
window.onload=function(){
    var mem_content = document.getElementById('mem-select-content');
    var mem_select = document.getElementById('mem-select').getElementsByTagName('li');
    var timer=null;

    mem_select[0].onmouseover=function(){
        clearColor(mem_select);
        this.className='mem-active';
        startMove(mem_content,'left',0);
    }
    mem_select[1].onmouseover=function(){
        clearColor(mem_select);
        this.className='mem-active';
        startMove(mem_content,'left',-1348);
    }
    mem_select[2].onmouseover=function(){
        clearColor(mem_select);
        this.className='mem-active';
        startMove(mem_content,'left',-2696);
    }
    //运动函数
    function getStyle(element, attr) {
    //IE写法
    if (element.currentStyle) {
        return element.currentStyle[attr];
        //标准
    } else {
        return getComputedStyle(element, false)[attr];
    }
    }
    function startMove(element, attr, iTarget) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        //因为速度要动态改变，所以必须放在定时器中
        var iCurrent = 0;
        if (attr === "opacity") { //为透明度时执行。
            iCurrent = Math.round(parseFloat(getStyle(element, attr)) * 100);
        } else { //默认情况
            iCurrent = parseInt(getStyle(element, attr)); //实际样式大小
        }
        var iSpeed = (iTarget - iCurrent) / 10; //(目标值-当前值)/缩放系数=速度
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed); //速度取整
        if (iCurrent === iTarget) {//结束运动
            clearInterval(element.timer);
        } else {
            if (attr === "opacity") { //为透明度时，执行
                element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")"; //IE
                element.style.opacity = (iCurrent + iSpeed) / 100; //标准
            } else { //默认
                element.style[attr] = iCurrent + iSpeed + "px";
            }
        }
    }, 20);
    }
    function clearColor(aElement){
    for (var i = 0; i < aElement.length; i++) {
        aElement[i].className='';
    }

}
}