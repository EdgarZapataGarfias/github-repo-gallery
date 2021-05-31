//html class = overview div
const overview = document.querySelector(".overview");
const username = "EdgarZapataGarfias";
const repoList = document.querySelector(".repo-list");//unordered list for repos HTML

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
  gitRepos();
};

//async function to fetch repos
const gitRepos = async function(){
  //api url for user wanted
  //looking for repos and sorting 100 repos visible per page
  const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  //interpret data with json() method
  const repoData = await fetchRepos.json();

  //console.log(repoData);
  displayRepos(repoData);
};

//display info of each repo
const displayRepos = function(repos){
  //loop through repos array and do actions for each repo
  for(const repo of repos){
    //create listitem for each repo
    const repoItem = document.createElement("li");
    //add class repo to each repoItem
    repoItem.classList.add(".repo");
    //add heading3 for each repo name
    repoItem.innerHTML = `<h3>${repo.name}</h3>`;
    //add each repoItem to repoList
    repoList.append(repoItem);

    console.log(repoList);
  }
};

