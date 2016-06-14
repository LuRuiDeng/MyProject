window.onload=function(){
	var achi_list= document.getElementById('achi_list');
	
	var timer=null;
        
    achi_move();

    achi_list.onmouseover=function(){
    	clearInterval(timer);
    }
    achi_list.onmouseout=function(){
    	achi_move();
    }

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
    }
}