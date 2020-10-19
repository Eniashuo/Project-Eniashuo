jQuery(function($) {
	
	$( ".markNotifAsRead" ).click(function(e) {
		
		e.preventDefault();
		
		notif_id = $( this ).data( "notif_id" );
		
		$.ajax({
			type: "POST",
			url: "/ajax/read_notif",
			dataType: "json",
			data: { notif_id: notif_id},
			success: function(response){
				
				if (response.type == 'success') {
					//
				} else {
					//
				}
			},
			error: function(){
				//
			}
		});
		
		$( this ).hide();
	});
	
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.mirrorace.com;path=/";
	}
	
	$( ".change-language" ).click(function(e) {
		e.preventDefault();
		
		var language = $( this ).data( "language" );
		
		cookie_days = 999;
		var d = new Date();
		d.setTime(d.getTime() + (cookie_days*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = "language=" + language + ";" + expires + ";domain=.mirrorace.com;path=/";
		
		//window.location.reload(true);
		//fix for Post resend when reloading
		//next time use Post/Redirect/Get format
		//https://en.wikipedia.org/wiki/Post/Redirect/Get
		window.location = window.location.href;
	});
	
});