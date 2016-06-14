window.onload = function(){
    var achi_list = document.getElementById('achi_list');
    var timer = null;
    var main_content = document.getElementById('main_content');
    var main_select = document.getElementById('main_select').getElementsByTagName('li');
    var main_select_2 = document.getElementById('main_select_2').getElementsByTagName('li');

    var num=0;

    main_select[0].onclick=function(){
        var j=0;
        if (num==0){
            num=2;
            j=(-1348)*num;
            startMove(main_content,'left',j);
        }
        else{
            num--;
            j=(-1348)*num;
            startMove(main_content,'left',j);
        }
        for (var i = 0; i < main_select_2.length; i++) {
            main_select_2[i].className='';
        }
        main_select_2[num].className='_active';
        
    }
    main_select[1].onclick=function(){
        var j=0;
        if (num==2) {
            num=0;
            j=(-1348)*num;
            startMove(main_content,'left',j);
        }else{
            num++;
            j= (-1348)*num;;
            startMove(main_content,'left',j);
        }
        for (var i = 0; i < main_select_2.length; i++) {
            main_select_2[i].className='';
        }
        main_select_2[num].className='_active';
        
    }

    for (var i = 0; i < main_select_2.length; i++) {
        main_select_2[i].index=i;
        main_select_2[i].onmouseover=function(){
            for (var i = 0; i < main_select_2.length; i++) {
                main_select_2[i].className='';
            }
            main_select_2[this.index].className='_active';
            var j=this.index*(-1348);
            startMove(main_content,'left',j);
            num=this.index;
        }
    }




    /*achi_move();

    achi_list.onmouseover=function(){
        clearInterval(timer);
    }
    achi_list.onmouseout=function(){
        achi_move();
    }






    //下面轮播的函数
    function achi_move(){
        var i= -5;
        var j = 0;
        timer=setInterval(function(){
            if (parseInt(j)<-1085) {
                achi_list.style['left']='0px';
                j=0;
            }
            var iCurrent = achi_list.offsetLeft;
            j=achi_list.style['left']=iCurrent+i+'px';
        },30);
    }*/


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
        var iSpeed = (iTarget - iCurrent) / 4; //(目标值-当前值)/缩放系数=速度
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
}