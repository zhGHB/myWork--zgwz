window.onload = function(){
    leftSwipe();
    rightSwipe();
}
/*左菜单*/
function leftSwipe(){

    var parentBox = document.querySelector('.jd_category_left');
    var childBox = parentBox.querySelector('ul');
    var parentHeight = parentBox.offsetHeight;
    var childHeight = childBox.offsetHeight;


    var maxY = 0;
    var minY = parentHeight-childHeight;
    /*自己定义缓冲的距离*/
    var distance = 100;
    /*translateY 最大滑动定位*/
    var maxSwipe = maxY + 100;
    /*translateY 最小滑动定位*/
    var minSwipe = minY - 100;

    /*第一步  1.菜单滑动起来*/
    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    var isMove  = false;

    var currY = 0;/*记录当前的定位 全局  相当于轮播图当中的index*/

    /*定义公用的方法*/
    var addTransition = function(){
        childBox.style.webkitTransition = "all .2s";
        childBox.style.transition = "all .2s";
    }
    var removeTransition = function(){
        childBox.style.webkitTransition = "none";
        childBox.style.transition = "none";
    }
    var setTranslateY = function(y){
        childBox.style.webkitTransform = "translateY("+y+"px)";
        childBox.style.transform = "translateY("+y+"px)";
    }

    /*绑定事件*/
    childBox.addEventListener('touchstart',function(e){
        startY = e.touches[0].clientY;
    });
    childBox.addEventListener('touchmove',function(e){
        moveY = e.touches[0].clientY;
        distanceY = moveY-startY;
        console.log(distanceY);
        /*清除过度*/
        removeTransition();

        if((currY + distanceY) < maxSwipe &&　(currY + distanceY) > minSwipe){
            setTranslateY(currY + distanceY);
        }

    });
    window.addEventListener('touchend',function(e){

        if(( currY + distanceY)>maxY){
            currY = maxY;
            addTransition();
            setTranslateY(currY);
        }

        else if(( currY + distanceY)<minY){
            currY = minY;
            addTransition();
            setTranslateY(currY);
        }
        else{
            /*记录当前的定位   上一次当前的定位 + 这一次改变的定位*/
            currY = currY + distanceY;
        }

        /*重置所有的参数  不重置currY */
        startY = 0;
        moveY =0;
        distanceY = 0;
        isMove = 0;
    });

    /*绑定tap*/
    /*所有的li*/
    var lis = childBox.querySelectorAll('li');
    myjs.tap(childBox,function(e){
        /*找到事件触发源 然后找到点击的那个li元素*/
        //console.log(e.target.parentNode);
        var li = e.target.parentNode;
        for(var i = 0 ; i < lis.length ; i ++){
            lis[i].className = " ";
            /*设置索引*/
            lis[i].index = i;
        }
        /*4.点击菜单的时候  改变当前的样式*/
        li.className = "now";

        var translateY = -li.index * 50;/*通过索引来计算*/
        /*判断当前的定位要大于  定位区间的  最小定位*/
        if(translateY > minY){
            currY = translateY;
            addTransition();
            setTranslateY(currY);
        }
        else{
            currY = minY;
            addTransition();
            setTranslateY(currY);
        }
    });






}

/*右侧内容*/
function rightSwipe(){

    myjs.iScroll({
        swipeDom:document.querySelector('.jd_category_right'),/*父容器对象*/
        swipeType:'y',/*滑动的方向*/
        swipeDistance:100/*缓冲的距离*/
    });
}