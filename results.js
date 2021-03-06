'use strict';

function resultDisplay(){
  var content = document.getElementById('content');

  content.textContent = '';

  var results = document.createElement('div');
  results.id = 'results';
  var match = false;

  for (var j = 0; j < playerList.length; j++) {
    match = false;

    //===== Conditionals for Comparison between currentUser and Player objects =====
    if (currentUser.username != playerList[j].username){
      console.log(playerList[j].username);
      for (var k = 0; k < 7; k++){
        if (Object.entries(currentUser.dayYouCanGame)[k][1] && Object.entries(playerList[j].dayYouCanGame)[k][1]){
          for (var i = 0; i < Object.entries(playerList[j].gamerTags).length; i++){
            if(!!(Object.entries(currentUser.gamerTags)[i][1]) && !!(Object.entries(playerList[j].gamerTags)[i][1])){
              for (var h = 0; h < Object.entries(playerList[j].gamesPlayed).length && !match; h++){
                if(!!(Object.entries(currentUser.gamesPlayed)[h][1]) && !!(Object.entries(playerList[j].gamesPlayed)[h][1])){
                  playerRender();
                  match = true;
                }
              }
            }
          }
        }
      }
    }
  }


  // ===== Renders Player Object to Results Page =====

  function playerRender(){

    var player = document.createElement('div');
    player.className = 'player';

    var avatarUserWrap = document.createElement('div');
    avatarUserWrap.className = 'avatarUserWrap';

    var userOnlineWrap = document.createElement('div');
    userOnlineWrap.className = 'userOnlineWrap';
    var gamerGamesWrap = document.createElement('div');
    gamerGamesWrap.className = 'gamerGamesWrap';
    var avatarPic = document.createElement('img');
    avatarPic.className = 'avatarPic';
    avatarPic.src = (playerList[j].avatar);
    var username = document.createElement('p');
    username.className = 'username';
    var skillLevel = document.createElement('p');
    skillLevel.className = 'skillLevel';
    var userOnline = document.createElement('p');
    userOnline.className = 'userOnline';
    var gamerTags = document.createElement('ul');
    gamerTags.className = 'gamerTags';
    gamerTags.textContent = 'Gamer Tags: ';
    var gamesPlayed = document.createElement('ul');
    gamesPlayed.className = 'gamesPlayed';
    gamesPlayed.textContent = 'Games Played: ';
    var dayYouCanGame = document.createElement('ul');
    dayYouCanGame.className = 'dayYouCanGame';
    var comments = document.createElement('p');
    comments.className = 'comments';
    var contactButton = document.createElement('button');
    contactButton.className = 'buttons';
    contactButton.textContent = 'Contact';

    username.textContent = playerList[j].username;
    avatarPic.textContent = playerList[j].avatarPic;
    userOnline.textContent = playerList[j].userOnline;
    skillLevel.textContent = playerList[j].skillLevel;
    dayYouCanGame.textContent = '.  Days Online: ';

    content.appendChild(results);
    results.appendChild(player);
    player.appendChild(avatarUserWrap);
    avatarUserWrap.appendChild(avatarPic);
    avatarUserWrap.appendChild(userOnlineWrap);
    userOnlineWrap.appendChild(username);
    userOnlineWrap.appendChild(skillLevel);
    userOnlineWrap.appendChild(userOnline);
    player.appendChild(gamerGamesWrap);
    gamerGamesWrap.appendChild(gamerTags);
    gamerGamesWrap.appendChild(gamesPlayed);
    player.appendChild(comments);
    player.appendChild(contactButton);
    avatarUserWrap.appendChild(dayYouCanGame);
    if(Object.entries(playerList[j].online)){
      var onlineIcon = document.createElement('img');
      var onlineText = document.createElement('p');
      onlineIcon.setAttribute('id', 'online-icon');
      userOnline.textContent='online';
      // onlineText.setAttribute('id', 'online-text');
      onlineIcon.src = ('img/200w_d.gif');
      userOnline.appendChild(onlineIcon);
      // userOnline.appendChild(onlineText);

      // ========== gamerTags List Item Creation =====

      for (var i = 0; i < Object.entries(playerList[j].gamerTags).length; i++){
        if(Object.entries(playerList[j].gamerTags)[i][1]){
          var gamerTagLi = document.createElement('li');
          gamerTagLi.textContent = (Object.entries(playerList[j].gamerTags)[i][0] + ': ' +   Object.entries(playerList[j].gamerTags)[i][1]);
          gamerTags.appendChild(gamerTagLi);
        }
      }

      // ========== gamesPlayed List Item Creation =====
      for (i = 0; i < Object.entries(playerList[j].gamesPlayed).length; i++){
        if(Object.entries(playerList[j].gamesPlayed)[i][1]){
          var gamesPlayedLi = document.createElement('li');
          gamesPlayedLi.textContent = Object.entries(playerList[j].gamesPlayed)[i][0];
          gamesPlayed.appendChild(gamesPlayedLi);
        }
      }

      // ========== dayYouCanGame List Item Creation =====


      if (playerList[j].dayYouCanGame.monday){
        var dayYouCanGameLi = document.createElement('p');
        dayYouCanGameLi.className = 'dayYouCanGameLi';
        dayYouCanGameLi.textContent = 'MON  ';
        dayYouCanGame.appendChild(dayYouCanGameLi);
      }
      if (playerList[j].dayYouCanGame.tuesday){
        var dayYouCanGameLi = document.createElement('p');
        dayYouCanGameLi.className = 'dayYouCanGameLi';
        dayYouCanGameLi.textContent = 'TUE  ';
        dayYouCanGame.appendChild(dayYouCanGameLi);
      }
      if (playerList[j].dayYouCanGame.wednesday){
        var dayYouCanGameLi = document.createElement('p');
        dayYouCanGameLi.className = 'dayYouCanGameLi';
        dayYouCanGameLi.textContent = 'WED  ';
        dayYouCanGame.appendChild(dayYouCanGameLi);
      }
      if (playerList[j].dayYouCanGame.thursday){
        var dayYouCanGameLi = document.createElement('p');
        dayYouCanGameLi.className = 'dayYouCanGameLi';
        dayYouCanGameLi.textContent = 'THUR  ';
        dayYouCanGame.appendChild(dayYouCanGameLi);
      }
      if (playerList[j].dayYouCanGame.friday){
        var dayYouCanGameLi = document.createElement('p');
        dayYouCanGameLi.className = 'dayYouCanGameLi';
        dayYouCanGameLi.textContent = 'FRI  ';
        dayYouCanGame.appendChild(dayYouCanGameLi);
      }
      if (playerList[j].dayYouCanGame.saturday){
        var dayYouCanGameLi = document.createElement('p');
        dayYouCanGameLi.className = 'dayYouCanGameLi';
        dayYouCanGameLi.textContent = 'SAT  ';
        dayYouCanGame.appendChild(dayYouCanGameLi);
      }
      if (playerList[j].dayYouCanGame.sunday){
        var dayYouCanGameLi = document.createElement('p');
        dayYouCanGameLi.className = 'dayYouCanGameLi';
        dayYouCanGameLi.textContent = 'SUN  ';
        dayYouCanGame.appendChild(dayYouCanGameLi);
      }
    }
  }

  try {
    currentUser =JSON.parse(localStorage.currentUser);
  } catch(error){
    console.log('error');
  }
  hamburgerMenu();
}
