var template2='<button class="css3button btn1" id="input_get">recover</button>';
if ($("#message_typing").length > 0 ){
	//alert("exist");
	//$('body').prepend(template2);
	$('#message_typing').parent().prepend(template2);
	//console.log(template2);
	bindFunction("#message_typing");
}
else if ($("#article_content").length > 0 ){
	//alert("exist");
	//$('body').prepend(template2);
	$('#article_content').parent().prepend(template2);
	//console.log(template2);
	bindFunction("#article_content");
}
