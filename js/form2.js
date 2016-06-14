(function(){
	var form=document.getElementById("form-right");
	var corner=document.getElementById("corner-right");
	var ftop=form.offsetTop;
	var fright=form.offsetRight;
	var switchopen=0;
	corner.onmousedown=function(e){
		e.preventDefault(); 
        form.style.cursor="move";
		switchopen=1;
		}
	form.onmousemove=function(e){
		if(switchopen==1){
			if(e.pageX-fright<410 ||e.pageY-ftop>90){
				corner.style.width=corner.style.height=80+"px";
				corner.style.right=corner.style.top=-4+"px"
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
