// API for groups
const worldCupGroups =
  "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2022/worldcup.groups.json";

// API for group match schedule
const worldCupMatches =
  "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2022/worldcup.json";

// get groups
fetch(worldCupGroups)
  .then((response) => response.json())
  .then((data) => {
    for (const key in data.groups) {
      if (Object.hasOwnProperty.call(data.groups, key)) {
        group = data.groups[key].name;
        teams = data.groups[key].teams;
      }
      createGroupCard();
    }
  });

// get match schedule
fetch(worldCupMatches)
  .then((response) => response.json())
  .then((data) => {
    matches = data.matches;
  });

const createGroupCard = () => {
  let containerDiv = document.getElementById("group-container");

  // create card
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  containerDiv.appendChild(cardDiv);

  // create group title
  let groupTitle = document.createElement("h3");
  groupTitle.innerText = group;
  cardDiv.appendChild(groupTitle);

  // create team list
  let teamList = document.createElement("ul");
  cardDiv.appendChild(teamList);

  teams.forEach((team) => {
    let teamText = document.createElement("li");
    teamText.innerText = team;
    teamList.appendChild(teamText);
  });

  // create match button
  let matchButton = document.createElement("button");
  matchButton.innerText = "View Matches";
  cardDiv.appendChild(matchButton);

  matchButton.addEventListener("click", (e) => {
    e.preventDefault();

    // create match schedule div
    let matchContainer = document.createElement("div");
    matchContainer.classList.add("match-container");

    // hide match button when match schedule is displayed
    matchButton.hidden = true;
    // create close button
    let closeLink = document.createElement("button");
    closeLink.innerText = "Close";
    cardDiv.appendChild(closeLink);

    closeLink.addEventListener("click", (e) => {
      e.preventDefault();
      matchContainer.remove();
      closeLink.remove();
      matchButton.hidden = false;
    });

    // filter and display group match schedule
    groupMatches = matches.filter(
      (match) => match.group === groupTitle.innerText
    );
    groupMatches.forEach((match) => {
      let matchDate = document.createElement("p");
      matchDate.innerText += `${match.date}: ${match.team1} vs. ${match.team2}`;

      cardDiv.appendChild(matchContainer);
      matchContainer.appendChild(matchDate);
    });
  });
};
