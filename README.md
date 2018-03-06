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
03/05/2018 0900 - Discussed project ideas

03/05/2018 0930 - Selected project idea and did pitched

03/05/2018 1000 - Did wireframes and planning

03/05/2018 1100 - Created necessary files

03/05/2018 1200 - Scaffolded html, README, and server.js. Added gitignore, lintr, and normalize.

03/05/2018 1400 - Different view containers made in html

03/05/2018 1600 - wrote GET route for Gif with 'yes' tag

03/06/2018 1400 - 


## Credits and Collaborations
https://developers.giphy.com/

