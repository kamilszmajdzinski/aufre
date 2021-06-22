<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $phone = $_POST['topic'];
    $message = $_POST['message'];
    $formcontent=" Od: $name \n Telefon: $phone \n Temat: $topic \n Mail: $email \n Message: $message";
    $recipient = "wyceny@okna-konin.pll";
    $subject = "Formularz zgloszeniowy okna-konin.pl, $topic";
    $mailheader = "Od: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader);
    header('Location: contact.html')
?>