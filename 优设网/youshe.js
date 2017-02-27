window.onload=function(){
    var con_1_tab1=document.getElementById('1')
        con_1_tab2=document.getElementById('2')
        par1=document.getElementById('par1')
        par2=document.getElementById('par2')
     con_1_tab1.onmouseover=function(){
     par1.style.display='block';
   }  
    con_1_tab1.onmouseout=function(){
     par1.style.display='none';
   }
    con_1_tab2.onmouseover=function(){
     par2.style.display='block';
   }  
    con_1_tab2.onmouseout=function(){
     par2.style.display='none';
   }
   par1.onmouseover=function(){
    par1.style.display='block';
   }
   par1.onmouseout=function(){
    par1.style.display='none';
   }
   par2.onmouseover=function(){
    par2.style.display='block';
   }
   par2.onmouseout=function(){
    par2.style.display='none';
   }


//tab切换
var  titles=document.getElementById('head_').getElementsByTagName('li')
var  divs=document.getElementById('content_').getElementsByClassName('mod')
//遍历titles下所有的li
for(var i=0;i<titles.length;i++){
	titles[i].id=i;
	
	titles[i].onmouseover=function(){
	for(var j=0;j<titles.length;j++) {divs[j].style.display='none'}
	
	divs[this.id].style.display='block';
	}
}
 
//轮播
var num_=document.getElementById('lunbo').getElementsByTagName('img');
var stop=document.getElementById('lunbo');
var astop=document.getElementById('s-lunbo');
var cir=document.getElementById('s-lunbo').getElementsByTagName('img');

var i;var j;
    for(j=0;j<6;j++){
    	num_[j].style.display='none'
    }
    num_[0].style.display='block';
    function auto(){
	timer = setInterval(function(){
        i++;
		if (i==6) {i=0};
		for(j=0;j<6;j++){
    	num_[j].style.display='none';
    	cir[j].style.opacity="1";
        
    }
		num_[i].style.display="block";     
        cir[i].style.opacity="0.5"; 
        
	},2000)
}
auto();
stop.onmouseover=function(){
	clearInterval(timer);
}
astop.onmouseover=function(){
	clearInterval(timer);
cir.onmouseover=function(){
	cir[a].style.opacity='1';
    cir[this.index].style.opacity='0.5';
	}
}
stop.onmouseout=function go(){
	auto();
}
astop.onmouseout=function go(){
	auto();
}
for(j=0;j<6;j++){
cir[j].onmouseover=function(){
	this.style.opacity="0.5";
}
cir[j].onmouseout=function(){
	this.style.opacity='1';
}
}
var bt1=document.getElementById('bt1');
var bt2=document.getElementById('bt2');
bt1.onclick=function(){
	i--;
	if(i==-1) i=5;
	for(var a=0;a<6;a++){
		num_[a].style.display='none';
		cir[a].style.opacity='1';
	}
	num_[i].style.display='block';
	cir[i].style.opacity='0.5'
}
bt2.onclick=function(){
	i++;
    if(i==6) i=0;
    for(var a=0;a<6;a++){
        num_[a].style.display='none';
        cir[a].style.opacity='1';
    }
    num_[i].style.display='block';
    cir[i].style.opacity='0.5';
}



cir[0].onclick=function(){     
    for(var a=0;a<6;a++){
    num_[a].style.display='none';
    cir[a].style.opacity='1';
    }
    cir[0].style.opacity='0.5';
    num_[0].style.display='block';
    i=0;
}
cir[1].onclick=function(){     
    for(var a=0;a<6;a++){
    num_[a].style.display='none';
    cir[a].style.opacity='1';
    }
    cir[1].style.opacity='0.5';
    num_[1].style.display='block';
    i=1;
}
cir[2].onclick=function(){     
    for(var a=0;a<6;a++){
    num_[a].style.display='none';
    cir[a].style.opacity='1';
    }
    cir[2].style.opacity='0.5';
    num_[2].style.display='block';
    i=2;
}
cir[3].onclick=function(){     
    for(var a=0;a<6;a++){
    num_[a].style.display='none';
    cir[a].style.opacity='1';
    }
    cir[3].style.opacity='0.5';
    num_[3].style.display='block';
    i=3;
}
cir[4].onclick=function(){     
    for(var a=0;a<6;a++){
    num_[a].style.display='none';
    cir[a].style.opacity='1';
    }
    cir[4].style.opacity='0.5';
    num_[4].style.display='block';
    i=4;
}
cir[5].onclick=function(){     
    for(var a=0;a<6;a++){
    num_[a].style.display='none';
    cir[a].style.opacity='1';
    }
    cir[5].style.opacity='0.5';
    num_[5].style.display='block';
    i=5;
}





}

