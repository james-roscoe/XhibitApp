<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Xhibit App</title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="xhibit.css">

    <!--[if lt IE 9]>
      <link rel="stylesheet" type="text/css" href="old-ie.css">
      <style>.mainWrapper,.sticky {display: none;}</style>
    <![endif]-->

    <!-- CSS -->

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Open+Sans:400,400i,600,800" rel="stylesheet">
    <!-- Fonts -->

    <!-- TWITTER -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="http://www.xhibitapp.com/">
    <meta name="twitter:title" content="Xhibit App">
    <meta name="twitter:description" content="Xhibit offers non-coding Xerte users the opportunity to produce a theme without having to learn HTML and CSS. The user's edits appear in real-time via a Xerte project preview window.">
    <meta name="twitter:image" content="http://www.xhibitapp.com/images/xhibit-social.jpg">
    <!-- TWITTER -->

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="images/favicons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="images/favicons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/favicons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/favicons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/favicons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/favicons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/favicons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/favicons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="images/favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="images/favicons/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="images/favicons/favicon-194x194.png" sizes="194x194">
    <link rel="icon" type="image/png" href="images/favicons/android-chrome-192x192.png" sizes="192x192">
    <!-- Favicon -->

</head>
<body>
    
    <?php include_once("includes/analyticstracking.php") ?>

    <div class="mainWrapper">

    <?php 
    include('includes/header.html');
    ?>
    
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
                    <a href="/design/"><button type="button" class="button btn-blue">Start Your Design</button></a>
            </div>

            <p>Xhibit is a web app offering non-coding Xerte users the opportunity to produce a theme without having to learn HTML and CSS. The user's design edits appear in real-time via a Xerte project preview window and the theme can be exported into a CSS document at the click of a button. Simple!</p>

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

    <?php 
    include('includes/footer.html');
    ?>

   <!--[if lte IE 8]><div id="ie" class="ie-only">
            <div id="message">
                <img src="../images/xhibit-logo.png" width="190px">
                <div id="alert">
                    Your current browser is out-of-date. Please <a href="https://updatemybrowser.org/" target="_blank">upgrade it now</a> to enjoy the best possible experience on Xhibit App.
                </div>
            </div>
            <div id="warning-image">
                <img src="images/sad-pc.png" width="446px" alt="Upgrade your browser now">
            </div>
   </div><![endif]-->
    
</body>
    
</html>