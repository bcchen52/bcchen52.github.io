# bcchen52.github.io

This is a static and user-responsive single-page website made with HTML, CSS(Bootstrap), and vanilla Javascript.

The front-end utilizes JavaScript to interact with posts and CSS to animate elements.

#### Table of contents
- [Features](#features)
- [Requirements](#requirements)
- [How To Use](#how-to-use)
- [Functionality](#functionality)

## Features

Features include...
- Mobile-responsive design
- Scrollspy feature on the projects page built with vanilla JavaScript

## Requirements

None

## How To Use

[Link to site](bcchen52.github.io)

## Functionality
#### Projects Page
The Projects page utilizes Bootstrap's container property to display the projects and project navbar. This is responsive and the navbar disappears when the screen is small enough.

The Projects page also features a scrollspy functionality on the projects navbar, created with vanilla Javascript. This means that the projects navbar will activate in response to what is on the screen.

This is done by adding a function to JavaScript's window.onscroll, which is called whenever the screen is scrolled. The function then checks if the top of any project's container is in the range of 60-200px from the top of the screen, with 60px being slightly above the bottom of the main nav bar. Because this function is called whenever the screen is moved, clicking on a project's link will cause the projects inbetween that project and the current project on the screen to be highlighted.

#### Courses Page
The Courses page utilizies Bootstrap's container property to collapse and change the view of each classes' information when screen shrinks.

If a course has more information, clicking on it will change the display of the container holding that information to 'block', and displaying that information.
