define(["jquery","cookie"],function($){
	$(function(){
		$(".header").load("/yuntao/src/html/include/header.html",function(){
			$(window).scroll(function(){
			   let winscrollTop= $(window).scrollTop();
			   if(winscrollTop>0){
			   	$(".bigbox").css({"position":"fixed","z-index":"99"});
			   }else{
			   		$(".bigbox").css({"position":"relative"});
			   }
			});
			
			
		});
		
		$(".gouwu_right").load("/yuntao/src/html/include/gouwu.html",function(){
			
			$(".gouwuxq").on("click",".membercenter,.mHY",function(){
			$(".mxiangqin").css({"display":"block"});
			});
			$(".membercenter").mouseenter(function(){
				$(".mHY").stop().animate({right:"40px"},100);
			});
			$(".membercenter").mouseleave(function(){
				$(".mHY").css({"right":"100px"});
				$(".mxiangqin").css({"display":"none"});
			});
			
			
			$(".gouwuxq").on("click",".cartxq",function(){
				$(".goodym").css({"display":"block"});
			});
			$(".cartxq").mouseleave(function(){
				$(".goodym").css({"display":"none"});
			});
			
			
			
			$(".gouwuxq").on("click",".liulan,.ii",function(){
				$(".liuii").css({"display":"block"});
			});
			$(".liulan").mouseenter(function(){
				$(".ii").stop().animate({right:"40px"},100);
			});
			$(".liulan").mouseleave(function(){
				$(".ii").css({"right":"100px"});
				$(".liuii").css({"display":"none"});
			});
			
			
			$(".gouwuxq").on("click",".xiazai,.xapp",function(){
				$(".ximg").css({"display":"block"});
			});
			$(".xiazai").mouseenter(function(){
				$(".xapp").stop().animate({right:"40px"},100);
			});
			$(".xiazai").mouseleave(function(){
				$(".xapp").css({"right":"100px"});
				$(".ximg").css({"display":"none"});
			});
			
			
			//返回顶部点击按钮
			 
			$(".sclltop").click(function(){
				var start=$(window).scrollTop();
				var end = 0;
				var ranges=end-start;
					var news=+new Date(),
						speed=1000;
						let timer=setInterval(function(){
						let elaped=Math.min(+new Date()-news,speed);
						let result=elaped*ranges/speed+start;
						$(window).scrollTop(result);
						
						if(elaped===1000){
							clearInterval(timer);
						}
						},1000/60);	
			});
			
			
			
//			********************************************************
			//获取cookie中的数据
		$.cookie.json=true;
		let products=$.cookie("products")||[];
			
		//抛物线效果
		var num=0;
		for(var i=0;i<products.length;i++){
			num+=products[i].amounts;
		}
		$(".goodnums").text(num);
		$(".goodnum").text(num);
		
		//加入购物车点击事件；
		$(".jiarucart").on("click",function(e){
			
			let goodsnum={
				id:$(".id").text(),
				img:$(".imgs").attr("src"),
				title:$(".intro_con_name p").text(),
				price:$("#price").text().slice(1),
				amounts:$(".godamout").val()
				
			};
			
			var index=express(goodsnum.id,products);
				console.log(index);
				if(index==-1){
					products.push(goodsnum);
				}else{
					products[index].amounts++;
				}
			
			
			
			$.cookie("products",products,{expires:7,path:"/"});
			
			
			function express(id,products){
				for(var i=0;i<products.length;i++){
					if(id===products[i].id){
						return i;
					}
				}
				return -1;
			}
			
//			console.log(goodsnum);
			
			num++;
			$(".goodnums").text(num);
			$(".goodnum").text(num);
			//点击加入购物车成功后弹出成功加入提示框；
			$(".addsuccess").show();
			
			$(".animatcart").show().animate({right:"10"},1000)
							.animate({right:"0"}).hide(200);
							
							
			
			let end=$(".cartxq").offset();
			let flyer=$("<img src='/yuntao/src/images/p2.jpg' style='width:40px'>");
			flyer.fly({
					start:{
						left:e.pageX-$(window).scrollLeft(),
						top:e.pageY-$(window).scrollTop()
					},
					end:{
						left:end.left-$(window).scrollLeft(),
						top:end.top-$(window).scrollTop()
					},
					onEnd : function(){ // 运动结束，销毁资源
						this.destroy();
					}
				});
			
			return false;
			});
//			********************************************************			
			
			});							
		
		$(".footer").load("/yuntao/src/html/include/footer.html");
	});
});