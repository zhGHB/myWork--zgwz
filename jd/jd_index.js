$(function(){

   //a:客户服务
   //2:<li  class="service"> 鼠标移入 移出
   $("li.service").hover(function(){
   //3:移入 #service_items	 显示
    $("#service_items").show();
    //   li.service>a  添加 active class
    $("li.service>a").addClass("active");
   },function(){
   	//4:移出 #service_items   隐藏
    //li.service>a  移除 active class
    $("#service_items").hide();
    //   li.service>a  添加 active class
    $("li.service>a").removeClass("active");     
   });




   //b:商品类别二级菜单
   // ?移入
   //1: ?<div class="sub_cate_box"> 显示
   $("#cate_box>li").mouseover(function(){
    $(this).children("h3").addClass("active");
    $(this).children("div.sub_cate_box").show();
   });

   $("#cate_box>li").mouseout(function(){
    $(this).children("h3").removeClass("active"); 
    $(this).children("div.sub_cate_box").hide(); 	
   });  

   //点击x父元素隐藏
   $(".close").click(function(){
   	  $(this).parent().hide();
   });





   //图片轮播
   //1:创建函数切换到下一张图片
   //1.1:创建变量保存当前显示图片下标
   var index = 0;
   //1.2:保存所有图片路径数组
   var rows = [
   "Images/index/banner_01.jpg",
   "Images/index/banner_02.jpg",
   "Images/index/banner_03.jpg",
   "Images/index/banner_04.jpg",
   "Images/index/banner_05.jpg"
   ];

   function changeImage(){
   	 //1:依据下标修改图片地址
   	 $("#slider>img").attr("src",rows[index]);
   	 //2:清除数字高亮显示
   	 $("#slider>ul>li").removeClass("current");
   	 //3:添加数字高亮显示
   	  $("#slider>ul>li").eq(index).addClass("current");
   	 //4:判断是否越界
   	 index++;
   	 if(index == 5){
   	 	index = 0;
   	 }
   	 //5:如果越界清零
   }
   //2:立即执行
   changeImage();
   //3:启动定时器1500执行函数
   var timer = setInterval(changeImage,1500);
   //4:鼠标移动图片  停止定时器
   $("#slider>img").hover(function(){
   	 clearInterval(timer);
   },function(){
      timer = setInterval(changeImage,1500);
   });

   //添加新功能:点击数字图片->将图片切换相应位置
   $("#slider li").click(function(){
     //1:停止定时器
     clearInterval(timer);
     //2:获下数字
     var i = parseInt($(this).html())-1;
     //3:修改图片
     $("#slider img").attr("src",rows[i]);
     //4:清除数字高亮
     $("#slider li").removeClass("current");
     //5:添加当前数字高亮
     $(this).addClass("current");
     //6:修改index
     index = i;
   });
   //停止定时器
   //鼠标离开，从停止位置开始显示图片




//分页
//2.1 数组
var images = [
"Images/index/ad_01.jpg", //0
"Images/index/ad_02.jpg", //1
"Images/index/ad_03.jpg", //2
"Images/index/ad_04.jpg", //3
"Images/index/ad_05.jpg", //4
"Images/index/ad_06.jpg", //5
"Images/index/ad_07.jpg", //6
"Images/index/ad_08.jpg", //7
"Images/index/ad_09.jpg", //8
];
/*
//2.2 7页 总页数
var totalPage = 7
//[0 1 2] [1 2 3] [2 3 4] [3 4 5] [4 5 6] [5 6 7] [6 7 8] 
//  一页    二页    三页    四页    五页    六页    七页
//2.3 一次改变一张图片
var pageSize = 1;
//2.4 当前pageNo 当前页数
var pageNo = 1;
//2.5 添加点击事件preview  上一页
$(".preview").click(function(){
 //1:当前页数加1
 pageNo--;
 if(pageNo < 1){
 	pageNo = 1;
 }

 //2:依据页数计算第一张图片位置
 var offset = pageNo - 1;
 //3:
 $(".ad ul li a img").eq(0).attr("src",images[offset]);
 $(".ad ul li a img").eq(1).attr("src",images[offset+1]);
 $(".ad ul li a img").eq(2).attr("src",images[offset+2]);
});
//2.6 添加点击事件next     下一页
$(".next").click(function(){
 //1:当前页数加1
 pageNo++;
 if(pageNo >= 8){
 	pageNo = totalPage;
 }

 //2:依据页数计算第一张图片位置
 var offset = pageNo - 1;
 //3:
 $(".ad ul li a img").eq(0).attr("src",images[offset]);
 $(".ad ul li a img").eq(1).attr("src",images[offset+1]);
 $(".ad ul li a img").eq(2).attr("src",images[offset+2]);
 
});


*/
//一次换三张图片
var totalPage = 3
//[0 1 2] [3 4 5] [6 7 8] 
//  1页    2页     3页    
//2.3 一次改变一张图片
var pageSize = 3;
//2.4 当前pageNo 当前页数
var pageNo = 1;
//2.5 添加点击事件preview  上一页
$(".preview").click(function(){
 //1:当前页数加1
 pageNo--;
 if(pageNo < 1){
 	pageNo = 1;
 }

 //2:依据页数计算第一张图片位置
 var offset = (pageNo - 1)*pageSize;
 //3:
 $(".ad ul li a img").eq(0).attr("src",images[offset]);
 $(".ad ul li a img").eq(1).attr("src",images[offset+1]);
 $(".ad ul li a img").eq(2).attr("src",images[offset+2]);
});
//2.6 添加点击事件next     下一页
$(".next").click(function(){
 //1:当前页数加1
 pageNo++;
 if(pageNo > totalPage){
 	pageNo = totalPage;
 }

 //2:依据页数计算第一张图片位置
 var offset =(pageNo - 1)*pageSize;;
 //3:
 $(".ad ul li a img").eq(0).attr("src",images[offset]);
 $(".ad ul li a img").eq(1).attr("src",images[offset+1]);
 $(".ad ul li a img").eq(2).attr("src",images[offset+2]);
 
});






});