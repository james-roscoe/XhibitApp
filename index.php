<?php include dirname(__FILE__) . "/config.php"; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Xhibit App</title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="<?php echo SITEURL ?>/xhibit.css">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">

    <?php include SITEPATH . "/includes/old-ie-head.php" ?>

    <!-- CSS -->

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Open+Sans:400,400i,600,800" rel="stylesheet">
    <!-- Fonts -->

    <?php include_once SITEPATH . "/includes/twitter-card.php"; ?>

    <?php include SITEPATH . "/includes/favicon.php"; ?>

</head>
<body>
    
    <?php include_once SITEPATH . "/includes/analyticstracking.php" ?>

    <div class="mainWrapper">

    <?php include SITEPATH . "/includes/header.php"; ?>
    
    <div class="index wrapper">
        
        <div id="intro">

            <h1>Create your Xerte theme in minutes!</h1>

            <h2>Xhibit. Add style to your Xerte resources in three simple steps.</h2>
            
           <div class="itemContainer">
                    <div class="column-left">
                        <img src="images/design-icon.png" alt="Design">
                        <h3>Design</h3>
                    </div>
                    <div class="column-center">
                        <img src="images/save-icon.png" alt="Save">
                        <h3>Save</h3>
                    </div>
                    <div class="column-right">
                        <img src="images/attach-icon.png" alt="Attach">
                        <h3>Attach</h3>
                    </div>
            </div>

            <div class="btn-wrapper">
                    <a href="design/"><button type="button" class="button btn-blue">Start Your Design</button></a>
            </div>

            <p>Xhibit is a web app offering non-coding <a href="http://www.xerte.org.uk/" target="blank_">Xerte</a> users the opportunity to produce a theme without having to learn HTML and CSS. The user's design edits appear in real-time via a Xerte project preview window and the theme can be exported into a CSS document at the click of a button. Simple!</p>

            <div class="itemContainer">
                    <div class="column-left">
                        <img src="images/basic-xerte.png" alt="Basic version of Xerte">
                    </div>
                    <div class="column-center">
                        <img src="images/conversion.png" alt="Conversion">
                    </div>
                    <div class="column-right">
                        <img src="images/xhibit-xerte.png" alt="Xhibit Applied">
                    </div>
            </div>
            
            <p>The web app is accessible on desktop, tablet and smartphones.</p>
            
            <p>Please note that Xhibit is still a work-in-progress. A preview version was launched at the Xerte Conference on 14th April 2016 in Nottingham, UK, and we continue to make adjustments and improvements.</p>
            
        </div>
        
    </div>

    <div class="push"></div>
</div>

    <?php include SITEPATH . "/includes/footer.php"; ?>
    
    <?php include SITEPATH . "/includes/old-ie-warning.php"; ?>
    
</body>
    
</html>