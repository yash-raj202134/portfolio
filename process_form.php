<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log incoming data
file_put_contents('form_debug.log', print_r($_POST, true), FILE_APPEND);
header('Content-Type: application/json');

$response = array('success' => false, 'message' => '');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if (empty($name) || empty($email) || empty($message)) {
        $response['message'] = 'Please fill in all fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Please enter a valid email address.';
    } else {
        // Process the form data (e.g., send an email)
        $to = "yashraj3376@gmail.com";
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            $response['success'] = true;
            $response['message'] = 'Thank you! Your message has been sent.';
        } else {
            $response['message'] = 'Oops! Something went wrong. Please try again later.';
        }
    }
} else {
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);