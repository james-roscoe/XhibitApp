<?php
    // Fetching Values from URL.
    $name = $_POST['name1'];
    $email = $_POST['email1'];
    $message = $_POST['message1'];

    //Email address to send to
    $address = "info@xhibitapp.com";

    //Create subject line for email
    $subject = 'You\'ve been contacted from www.xhibitapp.com by ' . $name . '.';

    // To send HTML mail, the Content-type header must be set.
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From:' . $email. "\r\n"; // Sender's Email
    //Construct the email
    $template = 'You have recieved a message from ' . $name . ', via the contact form on xhibitapp.com!<br/>'
    . '<br/>Here are the details:<br/><br/>'
    . 'Name: ' . $name . '<br/>'
    . 'Email: ' . $email . '<br/><br/>'
    . 'Message:<br/><br/>' . $message . '<br/><br/>';

    //Compile the email
    $sendmessage = $template;

    // Message lines should not exceed 70 characters (PHP rule), so wrap it.
    $sendmessage = wordwrap($sendmessage, 70);

    // Send mail by PHP Mail Function.
    mail($address, $subject, $sendmessage, $headers);

    //Send confirmation to JQuery, so success message is launched.
    echo "Your message has been received and a member of the Xhibit App Team will contact you soon.";
?>