var input_text;
var bindFunction=function(input_id){
	/*$(input_id).change(function(){
		//console.log("store");
		//alert("store");
		input_text=$(input_id).val();
		localStorage.setItem(input_id, input_text);
	});*/

	$(window).unload(function(){
	  //alert("Goodbye!");
	  		input_text=$(input_id).val();
			localStorage.setItem(input_id, input_text);
	});

	$("#input_get").click(function(){
		//console.log(localStorage.dc_temp);
		//alert(localStorage.dc_temp);
		$(input_id).val(localStorage[input_id]);
	});
}