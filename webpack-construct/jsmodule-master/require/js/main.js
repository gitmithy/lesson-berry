requirejs.config({
	path:{
		jquery:'jquery.js'
	}
})

requirejs(['jquery','check'],function($,check){
	console.log(check.isEqual(2,2));
})
