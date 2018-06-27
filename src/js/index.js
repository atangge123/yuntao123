require(["config"],function(){
	require(["jquery","template","load"],function($,template){
		
		$.getJSON("/yuntao/src/mock/index.json",function(data){
			const html=template("list_template",{list:data.res_body.list});
			$(".goods1_img_center").html(html);
			
			$(".opacity_img").mouseenter(function(){
					$(this).stop().animate({opacity:"0.5"},200)
						   .animate({opacity:"1"});
			});
		});
		
		$.getJSON("/yuntao/src/mock/index2.json",function(data){
			const html=template("street_template",{list:data.res_body.list});
			$(".brand_street_goods").html(html);
			
			$(".opacity_img1").mouseenter(function(){
					$(this).stop().animate({opacity:"0.5"},200)
						   .animate({opacity:"1"});
			});
		});
		
		
		$.getJSON("/yuntao/src/mock/index3.json",function(data){
			
			const html=template("product_template",{list:data.res_body.list});
			
			$(".product_content_list").html(html);
				
		});
		
		$.getJSON("/yuntao/src/mock/index4.json",function(data){
			const html=template("product_template1",{list:data.res_body.list});
			$(".product_content_list1").html(html);
		});
		
		$.getJSON("/yuntao/src/mock/index5.json",function(data){
			const html=template("product_template2",{list:data.res_body.list});
			$(".product_content_list2").html(html);
		});
		
		$(window).load(function(){
			$(".bigbox").click(function(){
				console.log(147);
				console.log($(".content_box"));
			});
			
		});
	});
	
});