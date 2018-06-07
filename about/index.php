<?php require_once dirname(__FILE__) . "/../config.php"; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>About | Xhibit App</title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="../xhibit.css">
    <link rel="stylesheet" type="text/css" href="about.css">
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
    
    <div class="about wrapper">
        
        <div id="intro">

            <h1>About</h1>
            
            <p>In this section:</p>
            
            <ul>
                <li><a href="#aboutWhat">What is Xhibit?</a></li>
                <li><a href="#aboutHow">How do I use Xhibit?</a></li>
                <li><a href="#aboutInstitution">Creating a theme for your whole institution</a></li>
                <li><a href="#aboutLaunch">Watch the Xhibit Launch Event</a></li>
                <li><a href="#aboutTweets">What are people saying about Xhibit?</a></li>
            </ul>
            
            <hr/>
            
            <h2 id="aboutWhat">What is Xhibit?</h2>
            
            <p>Xhibit gives users of Xerte Online Toolkits the ability to produce a theme without having to write any HTML or CSS. It allows anyone to customise the appearance of their learning object within minutes, before bringing it into their live project.</p>
            
            <p>Whether you want to change your colour schemes, backgrounds, fonts, icons or menus, Xhibit allows you to easily create any look-and-feel that you want for your next e-learning project.</p>
            
            <p>Xhibit is the creation of James Roscoe and Joel Reed, who saw an opportunity to enable non-coders to customise the appearance of their Xerte objects (a process which, before Xhibit, required reasonable coding skills). Xhibit was first launched at the Xerte Conference held in April 2016 in Nottingham, and continues to be under development. Like Xerte, the project is completely free and open source.</p>
            
            <hr/>
            
            <h2 id="aboutHow">How do I use Xhibit?</h2>
            
            <h3>Step 1: Design</h3>
            
            <p>Click on <a href="../design/">Start Your Design</a> to begin creating your own custom Xerte theme. Using the editing controls along the top, you can select particular areas of your learning object (e.g. header, body, footer) before targeting specific elements within those sections (e.g. paragraph colour). </p>
            
            <p>You will be able to monitor the progress of your design in real-time via the Xerte preview window. Note that the preview window consists of just a single static sample page, and many of the usual interactive features of Xerte are not intended to work in this preview environment (e.g. slides changes or the accessibility menu).</p>
            
            <p>You can capture a snapshot of your work-in-progress at any time via the 'Save' button, which will mean your theme automatically reloads the next time you visit Xhibit, allowing you to continue work on it. Note that you will need to revisit your theme from the same device and web browser that you saved it from in order for this feature to work.</p>
            
            <p>As you make changes to your design, you may notice some WCAG colour contrast recommendations. These are in place to help you create the most accessible and user-friendly theme possible. We strongly encourage you take note of these recommendations, and if possible try to aim for a high colour contrast ratio across all your elements. Your end-users will really appreciate it!</p>
            
            <p>You can also change the Xerte interface buttons by choosing from a selection of <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> icons. Note that producing an Xhibit theme will implement Font Awesome icons by default (even if you haven't changed any), and this will therefore overwrite any existing icons that may be in place on your project (e.g. PNG icons). If you would prefer this didn't happen, you will need to manually remove the icons section from the generated Xhibit stylesheet before uploading it to your project.</p>
            
            <figure>
                <img src="../images/xhibit-design-screeshot.png" alt="Screenshot of the Xhibit design page"/>
                <figcaption>Design: Changing the colours for particular sections and elements.</figcaption>
            </figure>
                
            <h3>Step 2: Export</h3>
            
            <p>There are two export options available in Xhibit. Most users will wish to use the '<em>Personal</em>' export option. Clicking on this option will allow you to save the theme to your computer in the form of a CSS file. This can then be attached to your project in Xerte Online Toolkits (see '<em>Step 3: Attach</em>' below).</p>
            
            <p>If you are accessing Xhibit from a mobile device, you may find that you don't have the ability to download the file. Some devices may show you the raw CSS code, in which case we advise copying this code to your clipboard and pasting it into an email to yourself so that you can save it into a CSS file manually via a computer at a later date.</p>
            
            <p>There is also an option to export an '<em>Institution</em>' theme, allowing Xerte admins to install a theme across an institution. For further information, see '<em>Creating a theme for your whole institution</em>' further below.</p>
            
            <figure class="figMedium">
                <img src="../images/xhibit-export-options.png" alt="Screenshot of the Xhibit design page"/>
                <figcaption>Export: Two options are available (personal or institution).</figcaption>
            </figure>
                
            <h3>Step 3: Attach</h3>
            
            <p>Within Xerte Online Toolkits, open the editor for your project, and then at the top-level add the 'Stylesheet' option via the Optional Properties. If you can't see the optional properties, click the arrow in the top-right of the editor.</p>
            
            <p>Next, upload your Xhibit CSS file via the stylesheet upload feature, just like you would upload any other file in Xerte.</p>
            
            <p>If you are using the most recent version of Xerte Online Toolkits, you should also choose the '<em>Xhibit Base Theme</em>' option from the dropdown of installed themes. This will ensure that you are using the same base theme as xhibitapp.com, on top of which your own design will be placed. If you are using an older version of Xerte Online Toolkits, choose the standard 'Xerte Online Toolkits' theme instead, and most features should still work.</p>
            
            <figure>
                <img src="../images/xot-attach-theme.png" alt="Screenshot of Xerte theme settings"/>
                <figcaption>Inside Xerte: Set the theme and stylesheet as above.</figcaption>
            </figure>
            
            <hr/>
            
            <h2 id="aboutInstitution">Creating a theme for your whole institution</h2>
            
            <p>Documentation coming soon.</p>
            
            <hr/>
            
            <p>So what are you waiting for? Start designing your theme today and create a great-looking Xerte theme within minutes. Any questions, comments, or feedback? Get in touch via our <a href="../contact/">contact page</a>. Good luck!</p>

            <div class="btn-wrapper">
                    <a href="../design/"><button type="button" class="button btn-blue">Start Your Design</button></a>
            </div>
            
            <hr/>
            
            <h2 id="aboutLaunch">Watch the Xhibit Launch Event</h2>
            
            <p>You can watch a recorded demonstration below (including how to generate and attach a stylesheet) from the Xhibit Launch Event at the 2016 Xerte Conference.</p>
            
            <p>Please note that video shows an earlier version of Xhibit, and therefore some features may vary. It also does not feature the 'Xhibit Base Theme' as described above, which should now be utilised on any up-to-date Xerte install.</p>

            <div class='launchVideoContainer'>
                <iframe src='https://www.youtube.com/embed/xlvxlXyUFx4' frameborder='0' allowfullscreen></iframe>
			</div>
            
            <hr/>
            
            <h2 class="tweet-share" id="aboutTweets">What are people saying about Xhibit?</h2>
            
            <p class="tweet-share">We've had a great response so far from the <a href="http://www.xerte.org.uk/" target="blank_">Xerte</a> community. Take a look at just some of the comments from developers, learning technologists and educators who have seen what Xhibit can do: </p>
            
            <div class="tweets">
            
                <blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Great!! A web app to create themes in Xerte. Very easy to use made by AgriFood ATP <a href="https://twitter.com/hashtag/xerte16?src=hash">#xerte16</a></p>&mdash; Inge Donkervoort (@12ChangeLearn) <a href="https://twitter.com/12ChangeLearn/status/720546563756539904">14 April 2016</a></blockquote>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

                <blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">I love it when talented people create a solution to an issue that makes technology more usable for all. <a href="https://twitter.com/XhibitApp">@XhibitApp</a> <a href="https://twitter.com/hashtag/xhibitapp?src=hash">#xhibitapp</a> <a href="https://twitter.com/hashtag/xerte16?src=hash">#xerte16</a></p>&mdash; Kerry Pinny (@KerryPinny) <a href="https://twitter.com/KerryPinny/status/720548973090598912">14 April 2016</a></blockquote>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

                <blockquote class="twitter-tweet" data-conversation="none" data-lang="en-gb"><p lang="en" dir="ltr"><a href="https://twitter.com/_JamesRoscoe">@_JamesRoscoe</a> <a href="https://twitter.com/XhibitApp">@xhibitapp</a> It looks a really good tool, I’m looking forward to using it</p>&mdash; Helen Davies (@HelenMD) <a href="https://twitter.com/HelenMD/status/720936865851969536">15 April 2016</a></blockquote>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

                <blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Brilliant work guys, nice one! <a href="https://t.co/8xedwbatMj">https://t.co/8xedwbatMj</a></p>&mdash; Xerte Project (@xerte_project) <a href="https://twitter.com/xerte_project/status/824177245191340032">25 January 2017</a></blockquote>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                
                <blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Well, <a href="https://twitter.com/XhibitApp">@XhibitApp</a> looks fabulous already - live preview is great! And more features to come <a href="https://t.co/SIvwg4q53m">https://t.co/SIvwg4q53m</a> <a href="https://twitter.com/hashtag/xerte16?src=hash">#xerte16</a> <a href="https://twitter.com/hashtag/XhibitApp?src=hash">#XhibitApp</a></p>&mdash; Simon Wood (@MrSimonWood) <a href="https://twitter.com/MrSimonWood/status/720543616754675713">14 April 2016</a></blockquote>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

    <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Very neat, very usable! <a href="https://t.co/1HWonSzMAt">https://t.co/1HWonSzMAt</a></p>&mdash; Simon Thompson (@bizzypeople) <a href="https://twitter.com/bizzypeople/status/824705444660776960">January 26, 2017</a></blockquote>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                
                
                
            </div>
            
            <p><a href=".">Back to the top</a></p>
            
        </div>
        
    </div>

   <div class="push"></div>
</div>

    <?php include SITEPATH . "/includes/footer.php" ?>
    
    <?php include SITEPATH . "/includes/old-ie-warning.php"; ?>
    
</body>
    
</html>