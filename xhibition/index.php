<?php require_once dirname(__FILE__) . "/../config.php"; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact | Xhibit App</title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="../xhibit.css">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">

    <?php include SITEPATH . "/includes/old-ie-head.php" ?>

    <!-- CSS -->

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
    
    <div class="xhibition wrapper">
        
        <div id="intro">

            <h1>Xhibition</h1>

            <p>The <em>Xhibition</em> is an upcoming feature which will allow you to share your designs in our theme library.</p>
            
            <p>You will also be able to browse other available themes and download for your own use.</p>
            
            <p>Please follow us on Twitter to receive future updates on the app. We will respond to any queries via Twitter as soon as we can!</p>
            
            <div class="btn-wrapper">
                    <a href="https://twitter.com/xhibitapp" target="_blank"><button type="button" class="button btn-twitter">@XhibitApp</button></a>
            </div>
            
        </div>
        
    </div>

       <div class="push"></div>
</div>

    <?php include SITEPATH . "/includes/footer.php" ?>

    <?php include SITEPATH . "/includes/old-ie-warning.php" ?>
    
</body>
    
</html>