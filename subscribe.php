<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to PHPMailer autoload file

$from = "yashraj3376@gmail.com";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail = new PHPMailer(true);
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.your-email-provider.com'; // Set the SMTP server to send through
            $mail->SMTPAuth   = true;
            $mail->Username   = 'your-email@example.com'; // SMTP username
            $mail->Password   = 'your-email-password'; // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom($from, 'Yash Raj');
            $mail->addAddress($email); // Add recipient
            $mail->addReplyTo($from, 'Yash Raj');

            // Content
            $mail->isHTML(false);
            $mail->Subject = 'Subscription Confirmation';
            $mail->Body    = "Thank you for subscribing to our newsletter!\n\nWe'll keep you updated with the latest news and updates.";

            $mail->send();

            // Notify site owner
            $mail->clearAllRecipients();
            $mail->addAddress($from);
            $mail->Subject = 'New Newsletter Subscription';
            $mail->Body    = "A new subscriber has signed up for the newsletter.\n\nEmail: " . $email;

            $mail->send();

            echo "Subscription successful! A confirmation email has been sent to you.";
        } catch (Exception $e) {
            echo "There was an error sending the email. Mailer Error: {$mail->ErrorInfo}";
        }

        // Save to file
        $file = 'subscribers.txt';
        file_put_contents($file, $email . PHP_EOL, FILE_APPEND);
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request.";
}
?>
