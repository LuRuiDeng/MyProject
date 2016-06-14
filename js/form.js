(function(){
	var form=document.getElementById("form-top");
	var corner=document.getElementById("corner-top");
	var ftop=form.offsetTop;
	var fleft=form.offsetLeft;
	var switchopen=0;
	corner.onmousedown=function(e){
		e.preventDefault(); 
        form.style.cursor="move";
		switchopen=1;
		}
	form.onmousemove=function(e){
		if(switchopen==1){
			if(e.pageX-fleft>90 ||e.pageY-ftop>90){
				corner.style.width=corner.style.height=90+"px";
				corner.style.left=corner.style.top=-4+"px"
				}
			else{
				corner.style.width=corner.style.height=e.pageY-ftop+"px";
				}
		}
	}
	form.onmouseup=function(){
		switchopen=0;
                this.style.cursor="default";
}

})()
