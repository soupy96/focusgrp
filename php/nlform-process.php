<?php

$errorMSG = "";

// If the email is empty or invalid
if (empty($_POST["nlemail"])) {
    $errorMSG = "Email is required";
} else {
    $testingnlemail = test_input($_POST["nlemail"]);
    if (!filter_var($testingnlemail, FILTER_VALIDATE_EMAIL)) {
        $errorMSG = "Invalid email format";
        $nlemail = "";
    } else {
        $nlemail = $_POST["nlemail"];
    }
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$EmailTo = "michael@blackridgestrategy.com"; //This is for testing
//$EmailTo = "mike@focusgrp.ca"; //This is for testing
//$EmailTo = "dv27nfhr5nsl@a2plcpnl0377.prod.iad2.secureserver.net"; // This is for testing
//$EmailTo = "michael@focusgrp.ca"; // This is for testing
//$EmailTo = "laura@focusgrp.ca"; // This is for live
$Subject = "New Newsletter Subscription!";

// prepare email body text
$Body = "";
$Body .= "Email: ";
$Body .= $nlemail;
$Body .= "\n";

// redirect to success page
if ($errorMSG == ""){
   // send email if there are no errors
    $success = mail($EmailTo, $Subject, $Body, "From:".$nlemail);
    // echo success for the ajax part
    echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>