<!DOCTYPE html>  
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">  
    <head>  
        <meta charset="utf-8">  
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Laravel Tailwind</title>  
        <link rel="stylesheet" href="{{ mix('css/app.css') }}?v={{ mt_rand() }}">  
    </head>  
    <body class="antialiased">  
        <div id="app">  
        </div>  

        <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
    </body>  
    <script src="{{ mix('js/app.js') }}?v={{ mt_rand() }}"></script>  
</html>