<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact | Xhibit App</title>
    <link rel="stylesheet" type="text/css" href="../xhibit.css">

    <!--[if lt IE 9]>
      <link rel="stylesheet" type="text/css" href="../old-ie.css">
      <style>.mainWrapper,.sticky {display: none;}</style>
    <![endif]-->

    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans" rel="stylesheet">

    <!-- TWITTER -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="http://www.xhibitapp.com/">
    <meta name="twitter:title" content="Xhibit App">
    <meta name="twitter:description" content="Xhibit offers non-coding Xerte users the opportunity to produce a theme without having to learn HTML and CSS. The user's edits appear in real-time via a Xerte project preview window.">
    <meta name="twitter:image" content="http://www.xhibitapp.com/images/xhibit-social.jpg">
    <!-- TWITTER -->
    
</head>
<body>
    
    <?php include_once("../includes/analyticstracking.php") ?>

<div class="mainWrapper">

    <?php 
    include('../includes/header.html');
    ?>
    
    <div class="contact wrapper">
        
        <div id="intro">

            <h1>Contact</h1>

            <h2>We would love to hear from you!</h2>

            <p>Please follow us on Twitter to receive future updates on the app. We will respond to any queries via Twitter as soon as we can!</p>
            
            <div class="btn-wrapper">
                    <a href="https://twitter.com/xhibitapp" target="_blank"><button type="button" class="button btn-twitter">@XhibitApp</button></a>
            </div>

            <p>Xhibit is developed by James Roscoe and Joel Reed, University of Nottingham.</p>

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
                    <a href="https://twitter.com/joelreed_" target="_blank"><button type="button" class="button btn-twitter">@JoelReed_</button></a>
            </div>
        </div>

        </div><!-- /.row -->

            
        </div>
        
    </div>

    <div class="push"></div>
</div>

    <?php 
    include('../includes/footer.html');
    ?>

    <!--[if lte IE 8]><div id="ie" class="ie-only">
            <div id="message">
                <img src="../images/xhibit-logo.png" width="190px">
                <div id="alert">
                    Your current browser is out-of-date. Please <a href="https://updatemybrowser.org/" target="_blank">upgrade it now</a> to enjoy the best possible experience on Xhibit App.
                </div>
            </div>
            <div id="warning-image">
                <img src="../images/sad-pc.png" width="446px" alt="Upgrade your browser now">
            </div>
   </div><![endif]-->
    
</body>
    
</html>