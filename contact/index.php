<?php require_once dirname(__FILE__) . "/../config.php"; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact | Xhibit App</title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="../xhibit.css">
    <link rel="stylesheet" href="contact-form.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">

    <?php include SITEPATH . "/includes/old-ie-head.php" ?>

    <!-- CSS -->

    <!-- JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <script type="text/javascript" src="contact.js"></script>

    <!-- JS -->

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Open+Sans:400,400i,600,800" rel="stylesheet">
    <!-- Fonts -->

    <?php include SITEPATH . "/includes/twitter-card.php"; ?>

    <?php include SITEPATH . "/includes/favicon.php"; ?>
    
</head>
<body>
    
    <?php include SITEPATH . "/includes/analyticstracking.php"; ?>

<div class="mainWrapper">

    <?php include SITEPATH . "/includes/header.php"; ?>
    
    <div class="contact wrapper">
        
        <div id="intro">

            <h1>Contact</h1>

            <h2>We would love to hear from you!</h2>

            <p>Please use the contact form to get in touch with the Xhibit App Team. We look forward to hearing from you and will respond to your enquiry at the first available opportunity.</p>

            <div class="contact-form-container"><!-- #form -->  
                    <form id="contact">
                        <fieldset>
                            <label>Name: <span class="red">*</span></label>
                            <input placeholder="Type your name here..." name="name" id="name" type="text" tabindex="1">
                            <div id="nameError">Please enter your name!</div>
                        </fieldset>
                        <fieldset>
                            <label>Email Address: <span class="red">*</span></label>
                            <input placeholder="Type your email address here..." name="email" id="email" type="email" tabindex="2">
                            <div id="emailError">Please enter a valid email address!</div>
                        </fieldset>
                        <fieldset>
                            <label>Message: <span class="red">*</span></label>
                            <textarea placeholder="Type your message here...." name="message" id="message" tabindex="3"></textarea>
                            <div id="msgError">Please enter your message!</div>
                        </fieldset>
                        <div id="honeypot-field">
                            <label>Keep this field blank</label>
                            <input type="text" name="honeypot" id="honeypot" />
                        </div>
                        <fieldset>
                            <button name="submit" type="submit" id="submit" data-submit="...Sending">Submit</button>
                        </fieldset>
                        <div id="returnmessage"></div>
                        </form>
                        
                </div><!-- #form -->

            <p>Please follow us on Twitter to receive future updates on the app. We will respond to any queries via Twitter as soon as we can!</p>
            
            <div class="btn-wrapper">
                    <a href="https://twitter.com/xhibitapp" target="_blank"><button type="button" class="button btn-twitter">@XhibitApp</button></a>
            </div>

            <p>Xhibit is developed by James Roscoe (University of Warwick) and Joel Reed.</p>

                    <!-- Two columns of text and rounded images -->
        <div class="row">

        <div class="developer">
          <img class="img-circle" src="../images/james.jpg" alt="James Roscoe" width="150" height="150">
          <h3>James Roscoe</h3>
           <div class="btn-wrapper">
                    <a href="https://twitter.com/_jamesroscoe" target="_blank"><button type="button" class="button btn-twitter">@_jamesroscoe</button></a>
            </div>
        </div>

       <div class="developer">
          <img class="img-circle" src="../images/joel.jpg" alt="Joel Reed" width="150" height="150">
          <h3>Joel Reed</h3>
           <div class="btn-wrapper">
                    <a href="https://www.joelreed.co.uk" target="_blank"><button type="button" class="button btn-twitter">joelreed.co.uk</button></a>
            </div>
        </div>

        </div><!-- /.row -->

            
        </div>
        
    </div>

    <div class="push"></div>
</div>

    <?php include SITEPATH . "/includes/footer.php" ?>

    <?php include SITEPATH . "/includes/old-ie-warning.php" ?>
    
</body>
    
</html>