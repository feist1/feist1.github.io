/**
 * Created by ztf on 2016/9/28.
 */
$(window).on('load',function(){
    waterfall();
    var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'3.jpg'}]};
    $(window).scroll(function(){
        if(checkScrollSlide){
            $.each(dataInt.data,function(key,value){
                var oBox=$('<div>').addClass('pin').appendTo($('#main'));
                var oPic=$('<div>').addClass('box').appendTo($(oBox));
                var pImg=$('<img>').addClass('lazy').attr('data-original','../waterfall-img/'+$(value).attr('src')).appendTo($(oPic));
            });
            $(function() {
                $("img.lazy").lazyload({
                    event : "sporty"
                });
            });

            $(window).bind("load", function() {
                var timeout = setTimeout(function() { $("img.lazy").trigger("sporty") }, 10000);
            });
            waterfall();
        }
    });
});
function waterfall(){
    var $boxs=$('#main').find('.pin');
    var w=$boxs.eq(0).outerWidth();//outerWidth包含定义的padding，width只包含自身
    var cols=Math.floor($(window).width()/w);
    $('#main').width(w*cols).css('margin','0 auto');
    var hArr=[];
    $boxs.each(function(index,value){
        var h=$boxs.eq(index).outerHeight();
        if(index<cols){
            hArr.push(h);
        }else{
            var minH=Math.min.apply(null,hArr);
            var minHIndex= $.inArray(minH,hArr);
            $(value).css({
                'position':'absolute',
                'top':minH+'px',
                'left':minHIndex*w+'px'
            })
            hArr[minHIndex]+=$boxs.eq(index).outerHeight();
        }
    });
}
function checkScrollSlide(){
    var $lastBox=$('#main>div').last();
    var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    var scrollTop=$(window).scrollTop();
    var documentH=$(window).height();
    return (lastBoxDis<scrollTop+documentH)?true:false;
}