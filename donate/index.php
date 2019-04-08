<?php require_once dirname(__FILE__) . "/../config.php"; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Donate | Xhibit App</title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="../xhibit.css">
    <link rel="stylesheet" type="text/css" href="donate.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">

    <?php include SITEPATH . "/includes/old-ie-head.php" ?>
    
    <!-- CSS -->

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Open+Sans:400,400i,600,800" rel="stylesheet">
    <!-- Fonts -->

    <?php include SITEPATH . "/includes/twitter-card.php" ?>

    <?php include SITEPATH . "/includes/favicon.php" ?>

</head>
<body>
    
    <?php include SITEPATH . "/includes/analyticstracking.php" ?>

<div class="mainWrapper">

    <?php include SITEPATH . "/includes/header.php" ?>
    
    <div class="donate wrapper">
        
        <div id="intro">

            <h1>Donate to XhibitApp</h1>
            
            <p>XhibitApp is a non-commercial, open-source project developed by James Roscoe and Joel Reed. We don't receive any funding from organisations or employers for XhibitApp, and therefore pay the costs for the website out of our own pockets.</p>
            
            <p>In making a donation to XhibitApp, you are helping to give the project sustainability by contributing to the following costs:</p>
            
            <ul>
                <li>Domain and hosting: For the xhibitapp.com domain name and the server hosting costs</li>
                <li>SSL certificate: To keep XhibitApp and the resources we host safe and secure for our users</li>
                <li>Developer time: To help fund additional enhancements to the project</li>
            </ul>
            
            <h2>Make a donation</h2>
            
            <p>We would be hugely appreciative of any donations towards XhibitApp's running cost. You can make a donation via the Paypal button below. Thank you!</p>
            
            <br/>
            
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style="text-align: center">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="5R8J5QBX4BUV8">
                <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
            </form>
            
        </div>
        
    </div>

   <div class="push"></div>
</div>

    <?php include SITEPATH . "/includes/footer.php" ?>
    
    <?php include SITEPATH . "/includes/old-ie-warning.php"; ?>
    
</body>
    
</html>