const cardWrap = (cards) => {`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
   <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />

  <link rel="stylesheet" href="./dist/style.css" />
  <title>Weather Dashboard</title>
</head>

<body class="container">

  <header class="hero row">
    <h1 class="app-title">Team Profile Generator</h1>
   
  </header>


  <main class="row d-flex justify-content-center align-items-center">
  ${cards}
  </main>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"
    ></script>
<script src="./assets/js/script.js"></script>
</body>

</html>

`};