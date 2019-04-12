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

            <h1>Thank you</h1>
            
            <p>A huge thank you for donating to XhibitApp. Your kind contribution will help to fund our running costs and future developments for the project. We really appreciate it!</p>
            
            <br/>
            
            <h2>Spread the word</h2>
            
            <p>Why not tell your followers about your donation so that they can discover XhibitApp too?</p>
                
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just donated to @XhibitApp, the open-source Xerte Theme Generator at" data-url="https://www.xhibitapp.com" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            
            <br/>
            <br/>
            
            <hr/>
            
            <div class="btn-wrapper">
                    <a href="../"><button type="button" class="button btn-blue">Back to XhibitApp</button></a>
            </div>
            
        </div>
        
    </div>

   <div class="push"></div>
</div>

    <?php include SITEPATH . "/includes/footer.php" ?>
    
    <?php include SITEPATH . "/includes/old-ie-warning.php"; ?>
    
</body>
    
</html>