const managerCard = require('./managerCard');
const engineerCard = require('./engineerCard');
const internCard = require('./internCard');

//filter every single employee ,then push to html page
const generateTeam = (cards)=>{
  const html = [];
if(Array.isArray(cards)){
  html.push(

    cards
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );
  html.push(
    cards
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
  );
  html.push(
    cards
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
  );
}else{
console.log('cards is not an array');
}
  return html.join("");
};



const ceateHtml = (cards) => {`
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
  ${generateTeam(cards)}
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
module.exports = ceateHtml;