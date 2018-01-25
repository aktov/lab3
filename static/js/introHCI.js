'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


function projectClick(e) {
	e.preventDefault();

	//s$(this).css("background-color", "#7fff00");

    
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'>" + 
			"<p>Description of the project.</p></div>");
	}
    else {
    	//description.html("<p> Stop clicking on me pls. You just did it at "
    	//	+ (new Date()) + "</p>")
        description.html("<p> Bye friend. </p>");

    	$(containingProject).fadeOut();
    	//$(containingProject).fadeIn();
    }
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$("#testjs").addClass("active");
		$("#testjs").toggleClass("active");
		$("#testjs").text("Why did you click me?");

		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}