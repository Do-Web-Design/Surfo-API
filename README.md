# Surfo Api

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [REST Api](#REST-Api)

# General info:

Modern back-end application created with Node.js, RESTful API, and MongoDB.

Front-end repository: https://github.com/aleksandra-depta/Surfo-React 
> Front-end technologies: TypeScript, React, Redux Toolkit, Styled-Components & Bootstrap

Deployment: https://surfo.netlify.app/

# Technologies:

* Node.js, 
* Express.js,
* MongoDB,
* Mongoose

# Setup

Clone this repository 

    https://github.com/aleksandra-depta/Surfo-api.git


Create an .env file in your project root folder

    NODE_ENV = ...
    PORT = ...

    DATABASE_PASSWORD=...
    DATABASE=...
    DATABASE_LOCAL=...

    JWT_SECRET=...
    JWT_EXPIRES_IN=...
    JWT_COOKIE_EXPIRE_IN=...

    ACCESS_TOKEN_SECRET=...
    REFRESH_TOKEN_SECRET=...
   


To run this project, install it locally using npm:

    $ npm install
    $ npm start


# REST API

## TOURS


GET All Tours


    https://surfo-api.onrender.com/api/v1/tours

GET Tour


    https://surfo-api.onrender.com/api/v1/tours/:id

POST Create New Tour


    https://surfo-api.onrender.com/api/v1/tours

PATCH Update Tour


    https://surfo-api.onrender.com/api/v1/tours/:id

DELETE Tour


    https://surfo-api.onrender.com/api/v1/tours/:id



## Users


GET All Users (admin)


    https://surfo-api.onrender.com/api/v1/users

GET User (admin)


    https://surfo-api.onrender.com/api/v1/users/:id

PATCH Update User (admin)


    https://surfo-api.onrender.com/api/v1/users/:id

DELETE User (admin)


    https://surfo-api.onrender.com/api/v1/users/:id



GET Current (logged-in) User


    https://surfo-api.onrender.com/api/v1/users/updateMe

PATCH Update Current (logged-in) User


    https://surfo-api.onrender.com/api/v1/users/updateMe

DELETE Current (logged-in) User


    https://surfo-api.onrender.com/api/v1/users/deleteMe



POST SignUp


    https://surfo-api.onrender.com/api/v1/users/signup

POST Login


    https://surfo-api.onrender.com/api/v1/users/login

PATCH Reset Password


    https://surfo-api.onrender.com/api/v1/users/forgotPassword

PATCH Update My Password


    https://surfo-api.onrender.com/api/v1/users/forgotPassword



## Reviews


GET All Reviews


    https://surfo-api.onrender.com/api/v1/reviews

GET Review


    https://surfo-api.onrender.com/api/v1/reviews/:id

POST Create New Review


    https://surfo-api.onrender.com/api/v1/reviews

PATCH Update Review


    https://surfo-api.onrender.com/api/v1/reviews/:id

DELETE Review


    https://surfo-api.onrender.com/api/v1/reviews/:id



GET All Reviews on the Tour


    https://surfo-api.onrender.com/api/v1/tours/:tourId/reviews

POST Create a Review on the Tour


    https://surfo-api.onrender.com/api/v1/tours/:tourId/reviews



GET All Reviews on the User


    https://surfo-api.onrender.com/users/:userId/reviews



## Comments


GET All Comments


    https://surfo-api.onrender.com/api/v1/comments    

GET Comment


    https://surfo-api.onrender.com/api/v1/comments/:id    

POST Create Comment


    https://surfo-api.onrender.com/api/v1/comments`

PATCH Update Comment


    https://surfo-api.onrender.com/api/v1/comments/:id    

DELETE Comment


    https://surfo-api.onrender.com/api/v1/comments/:id    



GET All Comments on the Tour


    https://surfo-api.onrender.com/api/v1/tours/:tourId/comments`

POST Create Comment on the Tour


    https://surfo-api.onrender.com/api/v1/tours/:tourId/comments    



GET All Comments on the User


    https://surfo-api.onrender.com/api/v1/users/:tourId/comments`



## Bookings


GET All Bookings (admin)


    https://surfo-api.onrender.com/api/v1/booking    

POST Create Booking


    https://surfo-api.onrender.com/api/v1/booking`








