# Project: World Cup 2022 Group Schedule

Many websites get their data from an Express backend or external API and then display that data on the site. In this project, you'll build a schedule for the current 2022 World Cup. You'll fetch data from two provided APIs, one for the World Cup Groups and the other for the Group Match schedule.

## Your Task

The basic design of the site should display each Group and list the teams included in that Group. When you click on the View Matches button, you should see a schedule of matches for the Group. The Close button will close the displayed schedule.

## Starter Code

There are (mostly) empty files index.html, style.css, and script.js wired
together for you to begin your project. A container `div` is included in `index.html` and the two external APIs are included in `script.js`.

## Steps

### Fetch Data

Use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get the data for both the `worldCupGroups` and `worldCupMatches`. Since `fetch` uses promises, here is a quick review on [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

You will need to loop over the `worldCupGroups` data to get the appropriate groups. To make sure you're getting the correct data at first, use `console.log()`.

### Display the Groups

In the `script.js` file, an empty function `createGroupCard()` is already included to display all the groups.

For each group, the function should dynamically add a card `div` element to the included container `div`.

The card `div` element should then dynamically add the following elements:

- heading element to display the Group Title
- unordered list displaying teams in Group
- button to view Group Match Schedule

At this point, you should have a list of groups and teams and a View Matches button. We'll add functionality to the button in the next section!

### Handle Viewing Group Schedule with JavaScript

The goal of your JS code is to view the Group Match Schedule when the View Matches button is clicked. First, add an `eventListener` to listen for a click on the button.

- Update the code in your event handler to dynamically add a schedule `div`.

- [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) through the Group Match Schedule to get the schedule for each Group.

- Dynamically create a `p` to show each match with Date, Team 1 and Team 2.

- Test that when clicking the View Matches button, you are able to see the Group Schedule.

- Add the [hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden) property to your View Matches button to hide button when schedule is shown.

### Handle Close Button with JavaScript

Inside your `eventListener` for the View Matches button, dynamically add a Close `button`.

Add a new `eventListener` for the Close button to do the following:

- remove the schedule `div` container
- remove the Close button itself
- show the View Matches button again

At this point you should have a fully working app!

### Style the app

Add some styling in `style.css`.
Use the skills you learned about CSS and [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
Cards often look nice with a `border-radius` set.
For colors, you can use the official [World Cup color scheme](https://www.schemecolor.com/2022-fifa-world-cup-logo-colors-qatar.php).

**Hints**:

- You can use `document.createElement("div")` to dynamically add a `div`
- You can use `element.classList.add('yourClass')` to add a class
- You can add a listener for click events to an element with `element.addEventListener('click', () => { console.log('clicked')})`

## Expected Results

Every student project will look slightly different, but [here](screenshot.png) is an example of what the completed project can look like.

## Credits

Thanks to [openfootball](https://github.com/openfootball/worldcup.json) for providing the data with no API key required.
