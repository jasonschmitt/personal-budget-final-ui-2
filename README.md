# Personal Budget App ITIS 5166

## Getting started

- Clone this repo

- Run `npm install` in the root directory and run `npm start` and the application will launch at `localhost:3000`

## homepage - NOT logged in

<img src="public/homepage-loggedout.png">
## signup page
<img src="public/signup.png">
## login page
<img src="public/login.png">
## local storage
- json web token is saved to local storage as well as our user id and json token expiration time
  <img src="public/localstorage.png">
## homepage - logged in
  <img src="public/homepage-loggedin.png">
## account page
- user can update their account
  <img src="public/updateprofile.png">
## dashboard page
- if a user has not yet entered a budget, this view is shown where users can click the button to create a budget chart
  <img src="public/dashboard-no-chart.png">
## create budget page
- users can create a budget here
  <img src="public/createbudget.png">
## color picker
- color picker makes it easier for users to choose a color
  <img src="public/colorpicker.png">
## create budget page
- once a user has entered in a value, an example of what their budget will look like will render onto the page
  <img src="public/createbudgetexample.png">
## logout modal
- since we saved our expiration date to be 60 seconds after the json token was received on the client, we know when to log the user out. 20 seconds prior to being logged out, the user will receive a modal popup that prompts the user to stay logged in. if they do not click stay logged in, they will be logged out
  <img src="public/logoutmodal.png">
