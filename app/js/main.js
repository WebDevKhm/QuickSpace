$(document).ready(function () {
  // $('.modal form').each(function(index, el) {
  // 		$(this).submit(function (e) {
  // 			e.preventDefault();
  // 			var msg = $(this).serialize();
  // 			$.ajax({
  // 				type: 'POST',
  // 				url: 'send.php',
  // 				data: msg,
  // 				success: function (data) {
  // 					$.fancybox.close();
  // 					$.fancybox.open({src: '#success'});
  // 				},
  // 				error: function (xhr, str) {
  // 					$.fancybox.close();
  // 					$.fancybox.open({src: '#notsended'});
  // 				}
  // 			});
  // 			return false;
  // 		});
  // 	});

  // 	$('#email').submit(function (e) {
  // 		e.preventDefault();
  // 		var msg = $(this).serialize();
  // 		$.ajax({
  // 			type: 'POST',
  // 			url: 'send.php',
  // 			data: msg,
  // 			success: function (data) {
  // 				$.fancybox.close();
  // 				$.fancybox.open({src: '#email_success'});
  // 			},
  // 			error: function (xhr, str) {
  // 				$.fancybox.close();
  // 				$.fancybox.open({src: '#notsended'});
  // 			}
  // 		});
  // 		return false;
  // 	});
});