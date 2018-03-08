# Project Name

**Author**: Patricia Raftery, Haron Yunis, Beverly Zarkle, and Tyler Fishbone
**Version**: 1.0.0

## Overview
Magic Gif Ball is a web application utilizing the Giphy API (https://developers.giphy.com/) that allows users to ask a question of the site and recieve a response in the form of a reaction gif.
Example:

### 'Should I finally ask Brian out on a date?'

Magic Gif Ball: 
![picture of woman waving arms no](https://media.giphy.com/media/l1J9OVgun9akcO5C8/giphy.gif "No No No")

No login or username is required to use the site, but if users would like the have their questions and reponse gifs recorded there is login funcitonality in the top right of all pages. 

Once a user logs in all submitted questions and returned gifs will be added to their 'gifstory' which is available for them to look through.

## How It Works

Each time a user submits a question MagicGifBall selects one of 8 stored responses in the form of a a string (e.g. 'no no no', 'absolutely', 'hell yeah', 'what are you talking about'). Then that string is sent to the Giphy API which returns a random gif that is tagged with that string 'https://developers.giphy.com/docs/#random-endpoint'. That gif is then diplayed to the user in repsonse to their question.

Users also have the opportunity to edit these 8 stored responses so they can get gifs that are more to their liking. They simply need to navigate through the menu to the response page (which again only exists once they choose a username), then they can replace any of the responses with gif tags that are more to their liking.

We even provide a giphy search tag at the bottom of the page so users can preview what sort of results each reaction gif tag would give.

## Getting Started
All items needed for use of this site are hosted on Heroku. Simply go to https://magicgifball.com to access the site.


## Architecture


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

##### Day 5


## Credits and Collaborations
https://developers.giphy.com/

https://sqlbolt.com/lesson/select_queries_review

https://api.jquery.com

https://leonard.io/blog/2012/11/handlebars-array-access/

https://css-tricks.com/centering-css-complete-guide/

