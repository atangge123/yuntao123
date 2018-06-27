require(["config"],function(){
	require(["jquery","template","cookie","fly","load"],function($,template){
		//页面加载完毕执行
		$(window).load(function(){
			
		
		//图片切换，分清DOM元素和jquery对象；
		let lis = $(".relist");
		$(".rou_list").on("click",".relist",function(){
			var url=$(this).attr("src");
			$(".fdimg").attr({src:url});
			
			lis.each(function(curr){
				$(lis[curr]).removeClass("imgcurr");
			});
			$(this).addClass("imgcurr");
		});
		
		
		
		
		var ofLT=$(".rouleifd").offset();
		console.log(ofLT.left,ofLT.top);
		$(".rouleifd").mousemove(function(e){
			
			$(".len").show();
			$(".rouleifd1").show();
			
			var _left = e.pageX-ofLT.left-100,
				_top = e.pageY-ofLT.top-100;
			if(_left<0){
				_left=0;
			}else if(_left>200){
				_left=200;
			}
			if(_top<0){
				_top=0;
			}else if(_top>200){
				_top=200;
			}
			$(".len").css({"left":_left,"top":_top});
			$(".fdg").css({"left":_left*-2,"top":_top*-2});
		});
		$(".rouleifd").mouseleave(function(){
			$(".len").hide();
			$(".rouleifd1").hide();
		});
		
		
		
		
		
		
		
		
			//点击X之后关闭提示框
			$("#disapper").click(function(){
				$(".addsuccess").hide();
			});
			
			//点击减号按钮商品数量减1；
			$(".intro_con_main").on("click",".jian,.addja",function(){
				var amount=$(".godamout").val();
				
				if($(this).is(".jian")){
					if(amount<=1){
						return;
					}
					amount--;
				}else{
					amount++;
				}
				$(".godamout").val(amount);
			});
				let amun= $(".godamout").val();
			$(".intro_con_main").on("blur",".godamout",function(){
				var amout=$(this).val();
				if(/^[0-9]\d*$/.test(amout)){
					if(amout==0){
						$(this).val(1);
					}else{
						$(this).val(amout);
					}
					
				}else{
					$(this).val(amun);
				}
			});
			
		});
	});
});
