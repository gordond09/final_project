console.log('it works');
$(document).ready(function(){

	// when I click on an item in the nav 
	$('#primary-nav li').on('click', function(event){

		event.preventDefault();

		var section = $(this).find('a').attr('href');

		if ( $(this).hasClass('active') ) {
			console.log('has active class');

			// when I click the same item again
			// remove the active class
			$(this).removeClass('active');

			// slide up the #slide-down
			$('#slide-down').slideUp(500);

		} else {
			// add an active class to the thing I clicked
			$(this).addClass('active').siblings().removeClass('active');

			// show the articles
			$(section).show().siblings().hide();

			// slide down the #slide-down
			$('#slide-down').slideDown(500);

		}	
	});
	
});