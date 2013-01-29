var recover_button='<button class="css3button btn1" style="display:none" id="input_recover">回復暫存</button>';
//var clear_button='<button class="css3button btn1" style="display:none" id="input_clear">清除</button>';


if ($("#message_typing").length > 0 ){
	//alert("exist");
	//$('body').prepend(template2);
	$('#message_typing').parent().prepend(recover_button);
	//console.log(template2);
	//bindFunction("#message_typing");
	$("#want_type").click(function(){
		if(  (localStorage['dcard_msg_tp'] != '') &&  
			(!(typeof(localStorage['dcard_msg_tp']) === 'undefined')) ){
				$("#input_recover").show();
		};
		$(this).hide();
		$("#message_typing").slideDown();
		$("#message_submit").slideDown();
		$("#want_profile").removeClass("btn2").addClass("btn1");
	});


	$(window).unload(function(){
	  		//input_text=$('#message_typing').val();
			localStorage.setItem('dcard_msg_tp', $('#message_typing').val());
	});

	$("#input_recover").click(function(){
		//console.log(localStorage.dc_temp);
		//alert(localStorage.dc_temp);
		$('#message_typing').val(localStorage['dcard_msg_tp']);
		localStorage.removeItem('dcard_msg_tp');
	});
	/*$("#input_clear").click(function(){
		localStorage.removeItem('#message_typing');
	});*/
}


else if ($("#article_content").length > 0 ){
	$('#article_content').parent().prepend(recover_button);

	if( (  (localStorage['dcard_art_ct'] != '')||(localStorage['dcard_tt'] != '') ) &&  
			(!(typeof(localStorage['dcard_art_ct']) === 'undefined')) ){
				$("#input_recover").show();
	};

	$(window).unload(function(){

			localStorage.setItem('dcard_tt', $('#title').val());
			localStorage.setItem('dcard_art_ct', $('#article_content').val());
	});
	$("#input_recover").click(function(){
		$('#title').val(localStorage['dcard_tt']);
		$('#article_content').val(localStorage['dcard_art_ct']);
		localStorage.removeItem('dcard_tt');
		localStorage.removeItem('dcard_art_ct');
	});
}

else if ($(".comment_content").length > 0 ){
	$('.comment_content').parent().prepend(recover_button);

	if( (localStorage['dcart_com_ct'] != '') &&  
			(!(typeof(localStorage['dcart_com_ct']) === 'undefined')) ){
		$("#input_recover").show();
	};

	$(window).unload(function(){
		localStorage.setItem('dcart_com_ct', $('.comment_content').val());
	});
	$("#input_recover").click(function(){
		$('.comment_content').val(localStorage['dcart_com_ct']);
		localStorage.removeItem('dcart_com_ct');
	});
}
