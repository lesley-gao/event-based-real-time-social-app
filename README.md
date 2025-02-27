# An event-based real-time social web app
![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) 
![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) 
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) 
![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![image](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black) 
![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![image](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) 
![image](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)  

## Table of Contents 

- [About](#about)
- [Main Functions](#main-functions)
- [UI Preview](#ui-preview)
- [Introduction of Webpages](#introduction-of-webpages)
- [Quick Start](#quick-start)
- [Notes](#notes)
- [Collaborators](#collaborators)

---
## About

This team project, `Hippos!`, is a mobile-optimized web app for spontaneous activity organization when users want to connect with like-minded individuals nearby. Registered users can post real-time activity listings, turning last-minute plans into unforgettable experiences.

Users can browse through a list or map view of what's happening in the next 24 hours in their nearby suburbs, including trending, nearby, and recommended activities. Each activity displays real-time participant numbers against the host's set maximum, giving hosts the flexibility to conclude as needed. By selecting `interested`, users who want to participate can express their interest and organize their schedule based on rising participation counts. Whether you're hosting or joining,  `Hippos!` makes it easy to create spontaneous and memorable experiences on the fly. 

<br/>

## Main Functions

The main functions of our web app include:

- Activity mapping using Google Map for easy location visualization.
- User registration and sign-in functionality.
- Real-time activity posting with notifications sent to users, facilitating quick team or group formation for hosts.
- Display of user interest in specific activities or activities through a "like" function——which is triggered by the `interested` button on the single activity information page.
- User tag selection for filtering activities based on interests.
- Tagging activities for categorization and organization.

<br/>

## UI Preview

Current version: 

<img src="./group-image/UI Preview.jpg" alt="live mode" />

Previous version:

<img src="./group-image/first-version.png" alt="live mode"/>

Which one do you think is better? :smile:

For the demo video, please refer to [the link here](https://drive.google.com/file/d/1gPh_QOOdHQUUjvk9EHO31aNr-AAB7clZ/view?usp=drive_link).

<br/>

## Introduction of Webpages

Below is a brief introduction of the contents on each webpage:

- **"/"**: After a simple and clean opening screen animation, you will be led to the homepage. As an unregistered visitor, you can browse trending activities ordered by likes and nearby activities based on your location. As a registered user, you can also see recommended activities customized for you based on your interests. An activity map is also presented, displaying activities happening around you. By clicking on the markers on the map, you can see details of the activity happening there and view it on Google Maps.

- **"/map"**: This page features a full-screen map where you can better view activity locations and details. By clicking on the activity categories floating on the map, you can also directly view activities under categories that interest you more.

- **"/event/{eventID}"**: This is the detailed page of a single activity, where visitors can view the start and end times, total number of people required, vacancies, and express their interest. Meanwhile, the host of the activity can update attendance by clicking the `One more joined!` button when a new participant shows up to the activity location.

- **"/add"**: Registered users can list their activities as hosts on this page, enabling them to connect with other users by initiating their expected activities. Details of the activities being listed include activity title, start time, end time, number of people allowed, tags, introduction, location, etc.

- **"/search"**: This is where registered users and visitors can search by keyword to get information about activities they are interested in.

- **"/me"**: This is the personal page of the user, which will display the user's interested activities and their past activity listings.

- **"/login"**: This page is for registered users to log in, leading them to the "/me" page.

- **"/signup"**: This page is for unregistered users to sign up so they can list their activities.

<br/>
 
## Notes

This part contains important information regarding the Google Maps API.

- ### Console warning

For the google maps part, we used `google.maps.Marker`. However, as of February 21st, 2024, [google.maps.Marker is deprecated](https://developers.google.com/maps/deprecations), and `google.maps.marker.AdvancedMarkerElement` is recommended over `google.maps.Marker`. But the components we used in the current API don't directly support `google.maps.marker.AdvancedMarkerElement` out of the box. 

To use `google.maps.marker.AdvancedMarkerElement` within our project, we could possibly create custom components such as `AdvancedMarker`, however, it can only be used on maps using cloud-based map styling,, which is not feasible within our project's time constraints.

Therefore, we are currently adhering to using the deprecated `google.maps.Marker`, which may result massive console.log warnings, please ignore them.

- ### Map component stuck at loading

Since we're using a third-party map API provided by Google Maps, the map component may sometimes fail to load or appear blank. Please ensure you have a good network connection while testing the application. You may need to refresh the page or wait for the browser to load the map.

<br/>


 
## Quick Start

Prior to commencing the project initialization, ensure that you have obtained the API private key file named `admin.json`. Then place this file in the `backend/src/` directory, the same level with `app.js`.

To run this project, start by executing the script to clear the database and generate example records in the database. Navigate to the backend folder and execute `npm install` to install the module dependencies. Then run `npm run generate` to generate records in the database (this command may take a few minutes depending on your system). Finally, run `npm run dev`.

In the frontend terminal, simply execute `npm install` and `npm run dev`. Once you've completed these steps, you can start exploring the project.

To receive event notifications, please grant the browser permission to access your location and enable the notification service. Once logged in, you'll find a button next to your avatar on the "About Me" page. Click it to subscribe and stay updated on new events.

<div align="center">
<img src="./group-image/live mode.png" alt="live mode" style="zoom:30%; height: 300px;" />
</div>
<br/>



## Collaborators

This project was completed by a six-member team called **Happy Hippos** (which inspired the name of our app)!

Our team members are shown in the image below:
<div align="center">
<img src="./group-image/Happy Hippos Project.png" alt="Happy Hippos Project" style="zoom:30%; width:700px;" />
</div>

