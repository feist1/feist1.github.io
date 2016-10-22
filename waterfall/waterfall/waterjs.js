/**
 * Created by ztf on 2016/9/27.
 */
window.onload=function(){
    waterfall('main','pin');
    //模拟后台传进来的数据
    var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'3.jpg'}]};
    //设置加载次数限制
    var n=1;
    window.onscroll=function(){
        if(n<4){
            if(checkScrollSlide){
                var oParent=document.getElementById('main');
                //    将数据块渲染到页面底部
                for(var i=0;i<dataInt.data.length;i++){
                    var oPin=document.createElement('div');
                    oPin.className='pin';
                    oParent.appendChild(oPin);
                    var oBox=document.createElement('div');
                    oBox.className='box';
                    oPin.appendChild(oBox);
                    var oImg=document.createElement('img');
                    oImg.src="../waterfall-img/"+dataInt.data[i].src;
                    oBox.appendChild(oImg);
                }
                waterfall('main','pin');
                n++;
            }
        }else{
            return 0;
        }
    }
}

function waterfall(parent,box){
//将main下的所有class为box的元素取出来
    var oParent = document.getElementById(parent);
    var oBoxs=getByClass(oParent,box);
//    计算整个页面显示的列数（页面宽度/box宽度）
    var oBoxW=oBoxs[0].offsetWidth;//不包含单位，获取的是数值
    console.log(oBoxW);
    var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
    console.log(cols);
//    设置main的宽
    oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;';
//    获取高度的数组
    var hArr=[];
    for(var i=0;i<oBoxs.length;i++){
        if(i<cols){
            hArr.push(oBoxs[i].offsetHeight);
        }else{
            var minH=Math.min.apply(null,hArr);
            console.log(minH);
            var index=getMinhIndex(hArr,minH);
            oBoxs[i].style.position='absolute';
            oBoxs[i].style.top=minH+'px';
            oBoxs[i].style.left=index*oBoxW+'px';//oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
            hArr[index]+=oBoxs[i].offsetHeight;
        }
    }
    console.log(hArr);

}
//根据class获取元素
function getByClass(parent,clsName){
    var boxArr = new Array(); //用来存储获取到的所有class为box的元素
    oElements=parent.getElementsByTagName('*');
    for(var i=0;i<oElements.length;i++){
        if(oElements[i].className==clsName){
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}
//获取最小值的索引
function getMinhIndex(arr,val){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==val){
            return i;
        }
    }
}
//检测是否具备了滚动加载数据块的条件
function checkScrollSlide(){
    var oParent=document.getElementById('main');
    var oBOXs=getByClass(oparent,'pin');
    var lastBoxH=oBOXs[oBOXs.length-1].offsetTop+Math.floor(oBOXs[oBOXs.length-1].offsetHeight/2);
//    获得滚走的距离
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;//混杂模式通过body获取滚动高度，
    // 标准模式通过html元素获取滚动高度
    //获取滚动高度
    var height=document.body.clientHeight||document.documentElement.clientHeight;
    return (lastBoxH<scrollTop+height)?true:false;
}