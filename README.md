# Absent
A team member absence management solution written in React and Redux.

[Try out the demo](https://jjmschofield.github.io/Absent/index.html)

## Getting Started
To run the project simply clone this repo then:

* `npm install`
* `npm start`

To load data, place `sampledata.csv` into the public folder (the `/docs/` directory of this repo has an example). 

## Project Status
This project is considered to be a rapid prototype.

Efforts have been made to lay a well composed architecture to allow this project to grow into a more mature product - however be aware that there are known issues, limitations and technical debt.

## Implemented Functionality
### User stories
* As a project team member, I need to be able to view all booked absences in my team for the next 12 months so that I can plan accordingly 
* As a project team member, I need to be able to record an absence so that my team mates can plan accordingly
* As a project team member, I need to be able to update an absence so that my team mates can plan accordingly

### Details
* The user is presented with a calendar view of absences by team member for the next 31 days 
* The user can progress forwards or backwards in time by 31 day increments
* The user can "paint" absences for themselves when entering edit mode 
* Sample data is currently read in from CSV
* Sample can be quickly swapped with a genuine API - the browser console details the API requests and state changes

### Backlog
* As a project team member, I want to be warned when my booked absence clashes with another user, so that I can avoid creating resourcing problems
* As a project team member, I want public holidays to be identified, so that I don't have to resort to other resources to find out when they are
* As a project team member, I want public holidays to be automatically booked for me so, that I don't have to remember to book them (handled in sample data)
* As a project team member, I want to cancel public holidays, so that I can work them if I need to
* As a project team member, I only want to see other team members who have actually booked holidays, so that I can quickly find individuals which make an impact on my planning
* As a project team member, I want to be able to filter other team members, so that I can quickly find individuals which make an impact on my planning
* As a project team member, I only want to see absences for other team members when I work closely with them, so that I can quickly find individuals which make an impact on my planning
* As a project team member, I want to be able to select multiple time units at once when editing absences, so that I don't have to click as much    

##  Limitations and Known Issues
Due to time constraints multiple known issues are still apparent within this rapid prototype:
* The solution is not responsive
* The solution has not been manually cross browser tested
* The solution is not covered by automated tests
* prop-types have not been used
* The underlying UI library does not play nicely with SPAs out of the box, presenting numerous gotchyas - switching to a bridging library such as [react-mdl](https://github.com/react-mdl/react-mdl) would be wise to reduce effort
* Composition of CSS is not 100% elegant due to time constraints - a pre-processor should also be added to make variables and mixins available.
* The sample data has been extended with a UID to allow for storing absences by ID with out an over complicated code implementation
* For the sake of the demo the "today" date is hard coded to an interesting point in the data
* For the sake of the demo, the logged in user is always the user with an id of 1

## Contributing To This Project
* This project makes use of the GitFlow standard branching strategy
* Release versions are denoted via SEMVER

## Deployment
Build public packages with:
* `npm install`
* `npm build`

For GitHub Pages, paths in `index.html` must be made relative.