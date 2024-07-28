<?php
require 'vendor/autoload.php'; // You'll need to install PhpSpreadsheet and PHPMailer via Composer

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

$response = ['success' => false, 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    if ($name && $email && $message) {
        // Store in Excel
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Name');
        $sheet->setCellValue('B1', 'Email');
        $sheet->setCellValue('C1', 'Message');
        $sheet->setCellValue('D1', 'Date');

        $row = $sheet->getHighestRow() + 1;
        $sheet->setCellValue('A' . $row, $name);
        $sheet->setCellValue('B' . $row, $email);
        $sheet->setCellValue('C' . $row, $message);
        $sheet->setCellValue('D' . $row, date('Y-m-d H:i:s'));

        $writer = new Xlsx($spreadsheet);
        $writer->save('contact_messages.xlsx');

        // Send email
        $mail = new PHPMailer(true);
        try {
            $mail->setFrom('yashraj3376@gmail.com', 'Yash');
            $mail->addAddress('yashraj3376@gmail.com', 'Yash');
            $mail->Subject = 'New Contact Form Submission';
            $mail->Body    = "Name: $name\nEmail: $email\nMessage: $message";
            $mail->send();
        } catch (Exception $e) {
            $response['message'] = 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
            echo json_encode($response);
            exit;
        }

        $response['success'] = true;
        $response['message'] = 'Message sent successfully!';
    } else {
        $response['message'] = 'Please fill all fields.';
    }
} else {
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);