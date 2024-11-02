<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap" rel="stylesheet">
    </head>
    <body class="antialiased">
        <div class="container">
            <div class="h-100 min-vh-100 d-flex align-items-center justify-content-center bg-white">
                <img src="{{asset('assets/img/img-thank-you-page.png')}}" alt="img-thank-you">
            </div>
        </div>


    @vite('resources/js/app.js')
    </body>
</html>
