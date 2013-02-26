/* Modelo de Patron Modular */

$(document).ready(function(){

	var EC = (function(){
		var dom = {element1 : $("#element1")},
			init = function(){
				accion1();
			},
		    accion1 = function(){
				dom.element1.on('click',function(){
				});
		    }
		    return {init:init}
	})();
	//iniciamos todo
	EC.init();
});
