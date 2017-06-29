angular.module('yjp',['ngRoute','angularCSS'])
.config(['$routeProvider',function($routProvider){
	$routProvider.otherwise({redirectTo:'/home'})
}])
$(function(){
	//rem布局
	var windowW = $(window).width();
	$(".input-box").css('width',(windowW-50)+"px");
	$('html').css('font-size',parseInt(windowW/5)+'px');
	window.onresize = function(){
		var windowW = $(window).width();
		$('html').css('font-size',parseInt(windowW/5)+'px');
		//搜索框宽度
		$(".input-box").css('width',(windowW-50)+"px");
	}
	
	//搜索列表
	$.getJSON('json/discovery.json',function(reg){
		console.log(reg.data);
		categoryList(reg.data);
	})
	
	function categoryList(arr){
		for(var i=0;i<arr.length;i++){
			var div = $("<div class='category-item'></div>").appendTo(".category-list");
			var p = $("<p></p>").appendTo(div);
			p.html(arr[i].name);
		}
	}
})
