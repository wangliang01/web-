impress JS介绍

impressJS的github地址为: https://github.com/impress/impress.js
                           
impress大概分为几个主要函数：

	pfx()---它通过检测浏览器给css3属性加上当前浏览器可用的前缀，这样就不用人工手写

	“Webkit”, "O", "ms", "Khtml"等浏览器前缀

	arrayify()---将Array-Like对象转换成Array对象

	css() --- 将指定属性应用到指定元素上

	toNumber()---将参数转换成数字，如果无法转换返回默认值

	byId() --- 通过id获取元素

	$() --- 返回满足选择器的第一个元素

	$$() --- 返回满足选择器的所有元素

	triggerEvent() --- 在指定元素上触发指定事件

	translate() --- 将translate对象转换成css使用的字符串

	rotate() --- 将rotate对象转换成css使用的字符串

	scale() --- 将scale对象转换成css使用的字符串

	perspective() --- 将perspective对象转换成css使用的字符串

	getElementFromHash() --- 根据hash来获取元素，hash就是url中形如#step1的东西

	computeWindowScale() --- 根据当前窗口尺寸计算scale。用于放大和缩小    

	impressJS的几个API

		goto()     

		init()

		next()

		prev()

		initStep()     

	添加自己的按键处理函数

	document.addEventListener('impress:init', function(event){
		var api = event.detail.api
		document.addEventListener('keydown', function(event){
			if (event.keyCode === 9 || (event.keyCode >= 32 && event.keyCode <= 34) || (event.keyCode >= 37 && event.keyCode <= 40)) {
				event.preventDefault()
			}
		}, false)

		document.addEventListener('keyup', function(event){
			if (event.keyCode === 9 || (event.keyCode >= 32 && event.keyCode <= 34) || (event.keyCode >= 37 && event.keyCode <= 40) || event.keyCode==27) {
        switch (event.keyCode) {
          case 33:
          case 37:
          case 38:
              api.prev();
              break;
          case 32:
          case 34:
          case 39:
          case 40:
              api.next();
              break;
           case 27:
              api.end();
              break;

      	}
      	event.preventDefault();
      }
		}, false)
	}, false)         