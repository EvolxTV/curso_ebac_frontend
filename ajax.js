$(document).ready(function () {
  const nameElement = $("#name");
  const usernameElement = $("#username");
  const avatarElement = $("#avatar");
  const reposElement = $("#repos");
  const followersElement = $("#followers");
  const followingElement = $("#following");
  const linkElement = $("#link");

  fetch("https://api.github.com/users/sezimarjr")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      console.log(followersElement);
      $(nameElement).text(json.name);
      $(usernameElement).text("@" + json.login);
      $(avatarElement).attr("src", json.avatar_url);
      $(followersElement).text(json.followers);
      $(followingElement).text(json.following);
      $(linkElement).attr("href", json.html_url);
      $(reposElement).text(json.public_repos);
    });
});
