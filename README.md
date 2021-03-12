# Calendar

Calendar - meeting schedule application for one meeting room.

## Description

Calendar have three screens: "Authorisation" screen, “Calendar” screen and “Create event” modal-screen;

### “Authorisation” screen

Screen where you can autorized your user. When you choose user and click button "Authorize" you will be automaticly rederct to "Calendar" screen.

### “Calendar” screen

“Calendar” screen consists of a pre-defined table with 5 days (Monday-Friday)
for columns and 9 time slots (10:00-18:00, one hour long each) for rows. There
is a team of several people that can take part in the meetings. One meeting can
take only 1 hour and obtain one cell in the “Calendar” screen. On a “Calendar”
screen user can see all meetings scheduled for the meeting room. Also user can
filter meetings by person. In order to create new meeting user should click “New
Event+” button at “Calendar” screen, after that he will be transferred to
“Create event” modal-screen. In order to delete a meeting user has to click the
delete icon near the meeting title at “Calendar” screen and then confirm his
action in a confirmation dialog.

### “Create event” modal-screen

At that screen user should enter meeting title, select participants (can be
multiple), select day (Mon-Fri), select time (10:00-18:00).

## Installation

- npm install

- npm run start

## Additional functionality

### Changing number of people

User can change number of people who can take part in the meetings. For this in
folder "src" user should find "calendar data.js" file and add new participant's
object with "id", "name" and "meetings" properties to "participants" array.

### Saving user data on server

All data that user input saves on API server. When user refresh aplcation page
"Calendar" all data will request from server.

## Using technologies

- React JS 

- Create React App

- Webpack (module bundler)

- React-Bootstrap (stylization)

- React-Toastify (stylization)

- Axios (CRUD)

- GH-Pages
