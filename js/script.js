//html class = overview div
const overview = document.querySelector(".overview");
const username = "EdgarZapataGarfias";

const getUserData = async function(){
  //assign info fetched from api url to userInfo
  const userInfo = await fetch(`https://api.github.com/users/${username}`);//using username global variable for username
  const data = await userInfo.json();//interpret info fetched
  
  console.log(data);
  //need
  //name//bio//location//public_repos

  //call displayUserInfo function
  displayUserInfo(data);
};
//call function to see data in console
getUserData();

//function to display userInfo
const displayUserInfo = function(data){
  //create new div
  const div = document.createElement("div");
  //add class user-info to element
  div.classList.add("user-info");
  //populate div content
  div.innerHTML= `
  <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
  `;
  overview.append(div);
};
