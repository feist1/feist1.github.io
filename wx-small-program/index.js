Page({
  data:{
    // text:"这是一个页面"
    imgUrls:[
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg"
    ],
    indicatorDots:true,
    autoplay:true,
    interval:5000,
    duration:1000,
    //新商品
    shops:[
        {
            id:'1',
            imgUrl:'img/bao.jpg',
            info:'时尚潮流',
            price:'100'
        },
        {
            id:'2',
            imgUrl:'img/danxie.jpg',
            info:'时尚潮流',
            price:'100'
        },
        {
            id:'3',
            imgUrl:'img/nvxue.jpg',
            info:'时尚潮流',
            price:'100'
        }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  navigateInfo:function(e){
     var id = e.currentTarget.dataset.id;
     wx.navigateTo({
         url:"info?id="+id
     })
  }
})