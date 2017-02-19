

/*window.$=HTMLElement.prototype.$=function(selector)
  {
	var elems=
	(this==window?document:this).querySelectorAll(selector)
	if(!elems)
	  {return null;
	  }else if(elems.length==1){
		return elems[0];
	  }else{
		return elems;
	  }
  }
window.onload=function()
  {
	var lis=$(".app_jd,li.service");
	for(var i=0;i<lis.length;i++){
	  lis[i].addEventListener("mouseover",function(){
		this.$("[id$='_items']").style.display="block";
	},false);
	lis[i].addEventListener("mouseout",function(){
	  this.$("[id$='_items']").style.display="none";
	},false);
	};
	$("#category").onmouseover=
	  $("#category").onmouseout=function(){
	   $("#cate_box").style.display=
		  $("#cate_box").style.display=="block"?
									  "":"block";
	}
  }
  
 */

/*window.$=HTMLElement.prototype.$=function(selector){
	var elems=(this==window?window:this).querySelectorAll(selector);
	if(!elems){
		return null;
	}
	else if(elems.length==1){
		return elems[0];
	}
	else{
		return elems;
	}
}*/
window.$=HTMLElement.prototype.$=function(selector){
	var elems=(this==window?document:this).querySelectorAll(selector)
	if(!elems) {
		return null;
	  }
	   else if(elems.length==1){
		   return elems[0];
	  }
	   else{
		return elems;
	  }
  }
window.onload=function(){
	
	var lis=$(".app_jd,.service"); 
	var items=$("[id$='_items']");
	  
	for(var i=0;i<lis.length;i++){
		
	     lis[i].onmouseover=function(){
	     	this.$("[id$='_items']").style.display="block";
	     	
	     };
	     lis[i].onmouseout=function(){
	     	this.$("[id$='_items']").style.display="none"
	     }
	}
	  /*******************分类显示与隐藏*******************/
	 $("#category").onmouseover=$("#category").onmouseout=function(){
	 	  $("#cate_box").style.display=$("#cate_box").style.display=="block"?"":"block";
	 }
	 
	 var lis2=$("#cate_box>li");
	   for(var i=0;i<lis2.length;i++){
	   	lis2[i].addEventListener("mouseover",function(){
	   		  this.$(".sub_cate_box").style.display="block";
	   	},false);
	   	lis2[i].addEventListener("mouseout",function(){
	   		this.$(".sub_cate_box").style.display="none";
	   	},false);
	   }
	 
	 
	 var ul=$("#product_detail ul.main_tabs");
	 
	       ul.addEventListener("click",function(){
	       	                     var e=window.event||arguments[0];
	       	                     var target=e.target||e.srcElement;
	       	   
	       	                     if(target.nodeName=="A"){
	       	                                  	$("#product_detail ul.main_tabs li.current").className="";
	       	    	                              target.parentNode.className="current";
	       	    	
	       	    	                             var contents=$("#product_detail>ul~[id^='product_']");
	       	    	
	       	    	                            if(target.dataset.i!=-1){
	       	    		
	       	    	                                            	for(var i=0;i<contents.length;i++){
	       	    		                                               	/*contents[i].style.display=target.dataset.i!=i?"none":"block";*/
	       	    			                                               if(i!=target.dataset.i){                              
	       	    				                                                  contents[i].style.display="none";
	       	    			                                                 }
	       	    			                                               else{
	       	    				                                                   contents[i].style.display="block";
	       	    			                                                }
	       	    		                                            }
	       	    	                            }
	       	    	                          else{
	       	    		                            for(var i=0;i<contents.length;i++){
	       	    			                                        contents[i].style.display="none";
	       	    		                            }
	       	    	                          }
	       	    }
	       	   
	       },false);
	 
	 
	 
	 picture.init();
	 
	/*****************************购物按钮数量****************************/
	   $("#choose_amount a")[0].onclick=$("#choose_amount a")[1].onclick=function(){
	   	    $("#choose_amount input").value=this.className=="btn_add"?parseInt($("#choose_amount input").value)+1:
	   	                                                              parseInt($("#choose_amount input").value)-1;
	   	    if( parseInt($("#choose_amount input").value)<=0)  $("#choose_amount input").value=0;
	   	                      
	   	                                                              
	   }
	   
	 
	 
}

/*********************封装图片对象***********************/
var picture={
	  liWidth:62,
	  ul:null,
	  back:null,
	  forw:null,
	  move:0,
	  liCount:0,
	  maskH:0,
	  maskW:0,
	  maxTop:0,
	  maxLeft:0,
	  init:function(){
	  	self=this;
	  	self.ul=$("#icon_list");
	  	self.liCount=$("#icon_list>li").length;
	  	self.back=$("#preview>h1>a:first-child");
	  	self.forw=$("#preview>h1>a:first-child+a");
	  	/*添加函数*/
	  	
	  	self.back.onclick=self.forw.onclick=function(){
	  		   if(this.className.indexOf("_disabled")==-1){
	  		   	self.move+=this.className=="forward"?1:-1;
	  		   	   self.ul.style.left=20-self.move*self.liWidth+"px";
	  		   	   if(self.liCount-self.move==5){
	  		   	   	this.className+="_disabled";
	  		   	   }
	  		   	   else if(self.move==0){
	  		   	   	 this.className+="_disabled";
	  		   	   }
	  		   	   else{
	  		   	   	self.back.className="backward";
	  		   	   	self.forw.className="forward";
	  		   	   }
	  		   }
	  	}
	  	
	  	self.ul.onmouseover=function(){
	  		var e=window.event||arguments[0];
	  		var target=e.target||e.srcElement;
	  		if(target.nodeName=="IMG"){
	  			var src=target.src.slice(-30).slice(0,-4);
	  			    src+="-m.jpg";
	  			$("#mImg").src=src;
	  			
	  		}
	  	}
	  	
	  	$("#superMask").onmouseover=$("#superMask").onmouseout=function(){
	  		if($("#mask").style.display=="block"){
	  			$("#mask").style.display="none";
	  			$("#largeDiv").style.display="none";
	  		}
	  		else{
	  			$("#mask").style.display="block";
	  			$("#largeDiv").style.display="block";
	  			var i=$("#mImg").src.lastIndexOf(".");
	  			var src=$("#mImg").src.slice(0,i-1)+"l.jpg";
	  			$("#largeDiv").style.backgroundImage="url("+src+")";
	  			
	  		}
	  	}
	  	
	  	var Style=getComputedStyle($("#mask"));
	  	self.maskW=parseFloat(Style.width);
	  	self.maskH=parseFloat(Style.height);
	  	
	  	var Style=getComputedStyle($("#superMask"));
	  	self.maxTop=parseFloat(Style.height)-self.maskH;
	  	self.maxLeft=parseFloat(Style.width)-self.maskW;
	  	
	  	$("#superMask").onmousemove=function(){
	  		var e=window.event||arguments[0];
	  		var top=e.offsetY-self.maskH/2;
	  		var left=e.offsetX-self.maskW/2;
	  		
	  		                      top=top<0?0:
	  		 top>self.maxTop?self.maxTop:
	  		                          top;
	  		                          
	  	                        left=left<0?0:
	  		 left>self.maxTop?self.maxTop:
	  		                          left;
	  		                          
	  		    $("#mask").style.top=top+"px";                      
	  	      $("#mask").style.left=left+"px";
	  	      
	  	      $("#largeDiv").style.backgroundPosition=-left*16/7+"px -"+top*16/7+"px";
	    }
}
}