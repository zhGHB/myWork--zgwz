/**
 * Created by Administrator on 2017/1/14.
 */
$(document).ready(function(){
      myPhoto();

})


function myPhoto(){
	//��ʼ��ͼƬ
    for(var i=1;i<8;i++){
        $("#img"+i).css({
            backgroundImage:"url("+"'img/Myphoto/"+i+".jpg')"
        })
    }

    $(".page-btn").click(function(){
       var j=$(this).html()-1;
        for(var i=1;i<8;i++){
            var n=j*7+i;
            $("#img"+i).stop().css({
                backgroundImage:"url("+"'img/Myphoto/"+n+".jpg')",
                width:0
            }).stop().animate({
                width:215
            },3000)
        }
        $("#active-btn").attr("id","");
        $(this).attr("id","active-btn");
    });
    //ͼƬ�Ŵ�
    $(".img-s").click(function(){
        var bg=$(this).parent().css("backgroundImage");

       $(".masked").css({
            display:"block"
        });
        $(".big-img").css({
            backgroundImage:bg
        })
    })
    $(".close-btn").click(function(){
        $(".masked").css({
            display:"none"
        });
    })

    $(".masked-main a").click(function(){
        var Bg=$(".big-img").css("backgroundImage");
        var i=Bg.lastIndexOf(".")-1;
        var num=Bg.slice(i-4);
        num=num.replace(/^\D*/,"").replace(/\D*$/,"");
        $(this).attr("class")=="left-btn"?num--:num++;
         if(num<1){
         	num=1;
         	return;
         }  
         if(num>21) {
         	num=21;
         	return;
         }
         
        $(".big-img").css({
            backgroundImage:"url("+"'img/Myphoto/"+num+".jpg')"
        })

    })

}
