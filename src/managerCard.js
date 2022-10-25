const managerCard = (profile) =>{
return `
 <div class="card m-3 shadow" style="width: 300px">
    <div class="card-header bg-warning text-black">
      <p class="h3">${profile.getName()}</p>
      <p class="h4">
        <i class="fas fa-mug-hot mr-1"></i>
        ${profile.getRole()}
      </p>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">
          <span class="font-weight-bold">ID: </span>
          ${profile.getId()}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold">Email: </span>
          <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a>
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold">Office number: </span>
          ${profile.getOfficeNumber()}
        </li>
      </ul>
    </div>
  </div>

`};
module.exports = managerCard;