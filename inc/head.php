<?php 
ob_start (); // Buffer output
require('helpers/helpers.php'); 
?>

<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><!--TITLE--></title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="manifest" href="site.webmanifest">
        <link rel="apple-touch-icon" href="icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="../css/normalize.css">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/rangeslider.css">
        <link rel="stylesheet" href="../css/concur-style.css">
        <link rel="stylesheet" href="../css/main.css">
        <link rel="stylesheet" href="../css/custom.css">

        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        <script>
            /**
                Click to copy URL
            **/
            function Copy() {
                var Url = document.getElementById("url");
                Url.innerHTML = window.location.href;
                console.log(Url.innerHTML)
                Url.select();
                document.execCommand("copy");
            }
        </script>

    </head>

<?php if ($header !== false) : ?>
    <header id="header" class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <img src="../img/sap-concur-logo.svg" width="165" />
                </div><!--// .col-sm-3 -->
            </div><!--// .row -->
        </div><!--// .container -->
    </header>
<?php endif; ?>