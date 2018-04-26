
 $(document).ready(function() {
  $("#submit").click(function(e) {

	//Stop Form Submitting
	e.preventDefault();

	//Disable the submit button to stop multiple attempts
	$('#submit').attr('disabled', 'disabled');

	//Capture the field data and place in variables
	var name = $("#name").val();
	var email = $("#email").val();
	var message = $("#message").val();
	//This should be blank on capture, otherwise we know it's spam bots
	var honeypot = $("#honeypot").val();

	// Empty previous error/success messages
	$("#returnmessage").html("");
	$("#returnmessage").hide();

	$("#nameError").hide();
	$("#emailError").hide();
	$("#msgError").hide();

	//After a successful submission, hide the green success msg when clicking inside a field on focus
	$('#name').focus(function() {
       $('#returnmessage').fadeOut(1000);
    });
    $('#email').focus(function() {
       $('#returnmessage').fadeOut(1000);
    });
    $('#message').focus(function() {
       $('#returnmessage').fadeOut(1000);
    });

    //Hide our red error messages when a keypress has been made inside the field (after a validation fail has taken place)

    $("#name").keypress(function(){
        $('#nameError').fadeOut(1000);
    });

    $("#email").keypress(function(){
        $('#emailError').fadeOut(1000);
    });
    $("#message").keypress(function(){
        $('#msgError').fadeOut(1000);
    });

	//Perform Email Validation (RegEx @.co.uk etc.)
	function isValidEmail(emailAddress) {
    	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    	return pattern.test(emailAddress);
  	};

	// Perform full submission validation. Checking for blank fields, erroneous email addresses (no @ or .com etc.) and whether there is spam in our honeypot.
	if (!isValidEmail(email) || name == '' || message == '' || honeypot != '') {

	//If any of the fields are incorrectly used, then we put out error messages
	//Form Field Validation - Which errors will we show (if any)?

  	if (name == '') {
		$('#nameError').fadeIn(1000);
	}

  	if (!isValidEmail(email)) {
		$('#emailError').fadeIn(1000);
	}

	if (message == '') {
		$('#msgError').fadeIn(1000);
	}

	//Hide the green success msg if we click the submit button straightaway after the successful msg has been sent. 
	$('#returnmessage').fadeOut(1000);

	//Allow the submit button to become active again, since a mistake has been made entering data into the fields
	$('#submit').removeAttr('disabled');

	} else {
	// If our criteria is met, we send across our data (via post) to our PHP file. The PHP file sends the email and returns a successful data submission message when the entered information is stored in database.
	$.post("post-message.php", {
		name1: name,
		email1: email,
		message1: message
	}, function(data) {
		$("#returnmessage").append(data); // Append returned message to message paragraph.
			if (data == "Your message has been received and a member of the Xhibit App Team will contact you soon.") {
				//Add our green success msg
				$('#returnmessage').fadeIn(1000);
				// Reset form fields on success
				$("#contact")[0].reset();
				//Scroll to success msg (mainly for mobiles or small screens)
				$("#returnmessage").animate({ scrollTop: 0 }, "slow");
				//Allow the submit button to become active again
				$('#submit').removeAttr('disabled');
			}
		});
	 }
  });
});

 /* This contact form was originally from https://joelreed.co.uk/ and can be used and adapted in anyway for your web own project */
