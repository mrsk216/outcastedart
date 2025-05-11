<?php
    //if(isset($_POST['submit'])){
    // Gather Data for EMail
    $to = 'masadmalik2000@gmail.com'; // note the comma
    $to_name = 'Test Receiver';
    $from_name = $_POST['name'];
    $address = $_POST['address'];
    $from = $_POST['email']; 
    $number = $_POST['number']; 
    $message = $_POST['message'];
    $country = $_POST['country'];
    $specification = $_POST['specification'];
    $quantity = $_POST['quantity'];
    $deadline = $_POST['deadline'];
    
    //   make message body
    $MESSAGE_BODY = "Name: ".$from_name."<br>"; 
    $MESSAGE_BODY .= "Contact No: ".$number."<br>"; 
    $MESSAGE_BODY .= "Email: ".$from."<br>"; 
    $MESSAGE_BODY .= "Message From Sender: ".$message."<br>"; 
    $MESSAGE_BODY .= "Address: ".$address."<br>"; 
    $MESSAGE_BODY .= "Country: ".$country."<br>"; 
    $MESSAGE_BODY .= "Art Spectifications / Description: ".$specification."<br>"; 
    $MESSAGE_BODY .= "Quantity: ".$quantity."<br>"; 
    $MESSAGE_BODY .= "Deadline: ".$deadline."<br>"; 

    // To send HTML mail, the Content-type header must be set
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= "To: $to_name <$to>";
    $headers .= "From: <$from>";
    $message = "Name: $from . echo </br>  echo Email : $from_name"; 
    
    $result = mail($to, $number, $MESSAGE_BODY, $headers);
            
            // Mail it
            if($result){
                $success = true;
                echo json_encode($success);
            }else{
                $success = false;
            echo json_encode($success);
            }
    

?>