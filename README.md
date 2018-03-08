# Magic Gif Ball

**Author**: Patricia Raftery, Haron Yunis, Beverly Pham, and Tyler Fishbone
**Version**: 1.0.0

## Overview
Magic Gif Ball is a web application utilizing the Giphy API (https://developers.giphy.com/) that allows users to ask a yes/no question and receive a response in the form of a reaction GIF.

For example: 'Should I finally ask Brian out on a date?'

Magic Gif Ball Response: 
![picture of woman waving arms no](https://media.giphy.com/media/l1J9OVgun9akcO5C8/giphy.gif "No No No")

No login or username is required to use the app, but if users would like a customized experience allowing them to change their response tags or to keep a history of their questions asked and the response GIFs, they will need to login. There is also the ability to delete unwanted questions/responses from their history.

## How It Works
Each time a user submits a question, Magic Gif Ball randomly selects 1 of 8 standard responses (e.g., "no no no," "absolutely," "who knows"). Then that response is sent to the Giphy API which returns a random GIF that is tagged with that response (https://developers.giphy.com/docs/#random-endpoint). That GIF is then diplayed to the user as a repsonse to their question.

Users also have the opportunity to edit these 8 standard responses so they can get GIFs that are more to their liking. They simply need to navigate to the customize tag page (which only exists once they login) and replace any of the responses with GIF tags that are more to their liking.

## Getting Started
To replicate this app, you would fork and clone our GitHub (https://github.com/Magic-Gif-Ball/Magic-Gif-Ball). Then you would need to install the npm packages to get the dependencies used in this app and have an empty database set up.

## Architecture
This app grabs GIFs from an external API. A SQL database is used for persistence to store user data. Other technologies used are HTML, CSS, JavaScript, jQuery, Handlebars, and PageJS. Heroku is used for deployment.

## Change Log
##### Day 1
03/05/2018 0900 - Discussed project ideas

03/05/2018 0930 - Selected project idea and did pitched

03/05/2018 1000 - Did wireframes and planning

03/05/2018 1100 - Created necessary files

03/05/2018 1200 - Scaffolded html, README, and server.js. Added gitignore, lintr, and normalize.

03/05/2018 1400 - Different view containers made in html

03/05/2018 1600 - wrote GET route, 'yes' gif appears on home page

##### Day 2
03/06/2018 0900 - discuss database layout

03/06/2018 1000 - added page.js routes

03/06/2018 1100 - basic CSS for nav, handlebars added in html

03/06/2018 1200 - login and logout views added in html. Username goes to localStorage and cleared when logged out.

03/06/2018 1300 - array of gif tags made

03/06/2018 1400 - added post funcitonality for the gifs viewed by the user. The question and gif url are successfully sent to the SQL database.

03/06/2018 1500 - login now sends user information to the server, not just localStorage.

03/06/2018 1600 - empty history container before appending

03/06/2018 1700 - About page outlined with names and filler description

03/06/2018 1800 - fixed API URL and filepaths

##### Day 3
03/07/2018 0900 - started writing code for user-specific history

03/07/2018 1000 - basic CSS styling started, added 8 ball image

03/07/2018 1100 - incorporate login and array together

03/07/2018 1200 - finish error view

03/07/2018 1300 - added update form

03/07/2018 1400 - redid SQL database, renamed columns for both questions table and users table

03/07/2018 1500 - search through code and renamed everwere the old column names were referenced

03/07/2018 1600 - tags are now customizable per user by UPDATE

03/07/2018 1700 - fix typos and bugs and lots of testing

03/07/2018 1800 - CSS done for mobile-first view

03/07/2018 1900 - tables are receiving and sending the appropriate data!

03/07/2018 2000 - user-specific history diplaying

##### Day 4
03/08/2018 0900 - worked on CSS

03/08/2018 1000 - DELETE an entry in the user specific history works

03/07/2018 1030 - hamburger menu added, shows menu upon hover

03/08/2018 1100 - fixed DELETE bug

03/08/2018 1130 - hide desired items, clean up code

03/08/2018 1300 - meta tags updated, login name added to Gifstory page

03/08/2018 1330 - more styling, background colors, positioning, etc

##### Day 5
03/09/2018 1300 - presentation

## Credits and Collaborations
- https://gitignore.io
- http://meyerweb.com/eric/tools/css/reset/ 
- CF 301 linter
- https://developers.giphy.com/
- https://sqlbolt.com/lesson/select_queries_review
- https://api.jquery.com
- https://leonard.io/blog/2012/11/handlebars-array-access/
- https://css-tricks.com/centering-css-complete-guide/
- StackOverflow
- Also special thanks to the instructors and TAs that helped us along the way (Allie, Vinicio, Kat, Nicholas, Jeff)

