#Absent
A team member absence management solution written in React and Redux.

[Try out the demo](https://jjmschofield.github.io/Absent/index.html)

##Getting Started
To run the project simply clone this repo then:

* `npm install`
* `npm start`

##Project Status
This project is considered to be a rapid prototype.

Efforts have been made to lay a well composed architecture to allow this project to grow into a more mature product - however be aware that there are known issues, limitations and technical debt.

##Implemented Functionality
* The user is presented with a calendar view of absences by team member for the next 31 days 
* The user can progress forwards or backwards in time by 31 day increments
* Sample data is currently read in from CSV
** This should be easily replaceable with a genuine API - the browser console details the API requests and state changes

##Limitations and Known Issues
Due to time constraints multiple known issues are still apparent within this rapid prototype:
* The solution is not responsive
* The solution has not been manually cross browser tested
* The solution is not covered by automated tests
* Storage of Absences is memory inefficient (they are stored in the redux store by both UserID and timestamp to allow inexpensive access).
* Composition of CSS is not 100% elegant due to time constraints - a pre-processor should also be added to make variables and mixins available.
* For the sake of the demo the "today" date is hard coded to an interesting point in the data

##Contributing To This Project
* This project makes use of the GitFlow standard branching strategy
* Release versions are denoted via SEMVER

##Deployment
Build public packages with:
* `npm install`
* `npm build`

For GitHub Pages, paths in `index.html` must be made relative.