var option;
var shop={};
Page({
  data:{
    // text:"这是一个页面"
    num:1,
    shops: [
      {
        id: "1",
        imgUrl: "img/bao.jpg",
        info: "时尚潮流",
        price: "100"

      },
      {
        id: "2",
        imgUrl: "img/danxie.jpg",
        info: "单鞋最爱，透气",
        price: "150"

      },
      {
        id: "3",
        imgUrl: "img/nvxue.jpg",
        info: "时尚潮流，爱就选购吧",
        price: "100"
      },
      {
        id: "4",
        imgUrl: "img/bao.jpg",
        info: "时尚潮流",
        price: "200"
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    option = options;
    var id = option.id;
    var shops = this.data.shops;
    shops.forEach(function(item){
        if(item.id==id){
            shop = item;
        }
    })
    var amount=this.data.num*shop.price;
    this.setData( {
      shop: shop,
      amount:amount
    })
    },
  onReady:function(){
    // 页面渲染完成
    wx.setNavigationBarTitle({
      title:"商品信息"
    })
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
   addNum:function(){
    var num=this.data.num;
    var price=shop.price;
    num+=1;
    price*=num;
    this.setData({
      num: num,
      amount:price
    })

  },
  reduceNum:function(){
    var num=this.data.num;
    var price=shop.price;
    if(num*1<=0){
      return false;
    }
    num-=1;
    
    price*=num;
    this.setData({
      num: num,
      amount:price
    })
  },
    navgateInfo:function(e){
    var id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url:"info?id="+id
    })
  }

})