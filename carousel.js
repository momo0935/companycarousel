//封裝一個代替getElementById()方法

function byId(id){
return typeof(id)==="string"?document.getElementById(id):id;
}

let index=0
    timer=null
    pics=byId("banner").getElementsByTagName("img")
    len=pics.length
    dots=byId("dots").getElementsByTagName("span")
    pre=byId("pre")
    next=byId("next");
    // console.log(dots);
    

function sliderImg(){

let main=byId("main");
//停留清除定時器
main.onmouseover=function(){
    if(timer)clearInterval(timer);

}

//mouse事件
// 滑過開始定時器
main.onmouseout=function(){
    timer=setInterval(function(){index++;
        if(index>=len)index=0
//切換圖片
changeImg();
    },2500);

}

//mouse方法
main.onmouseout();

//圓點綁定
for(let d=0;d<len;d++){
    dots[d].onclick=function(){
        index=d;
        // console.log(this);

        changeImg();

    }
}
//下一張
next.onclick=function(){
    index++; 
if(index>=len) index=0;
changeImg();
}

//上一張
pre.onclick=function(){
    index--; 
if(index<0) index=len-1;
changeImg();
}


}



function changeImg(){
    //所有div/dots
for(let i=0; i<len;i++){
    pics[i].style.display="none";
    dots[i].className="";
}
pics[index].style.display="block";
dots[index].className="active";
}
sliderImg();