# Surfo Api

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [REST Api](#REST-Api)

# General info:

Modern back-end applications created with Node.js, RESTful API, and MongoDB.

Front-end repository: https://github.com/aleksandra-depta/Surfo-React 
> Front-end technologies: React, Redux Toolkit, Styled-Components & Bootstrap

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


To run this project, install it locally using npm:

    $ npm install
    $ npm start


# REST API

## TOURS


GET All Tours
`Request`

    https://surfo-api.onrender.com/api/v1/tours

GET Tour
`Request`

    https://surfo-api.onrender.com/api/v1/tours/:id

POST Create New Tour
`Request`

    https://surfo-api.onrender.com/api/v1/tours

PATCH Update Tour
`Request`

    https://surfo-api.onrender.com/api/v1/tours/:id

DELETE Tour
`Request`

    https://surfo-api.onrender.com/api/v1/tours/:id



## Users


GET All Users (admin)
`Request`

    https://surfo-api.onrender.com/api/v1/users

GET User (admin)
`Request`

    https://surfo-api.onrender.com/api/v1/users/:id

PATCH Update User (admin)
`Request`

    https://surfo-api.onrender.com/api/v1/users/:id

DELETE User (admin)
`Request`

    https://surfo-api.onrender.com/api/v1/users/:id



GET Current (logged-in) User
`Request`

    https://surfo-api.onrender.com/api/v1/users/updateMe

PATCH Update Current (logged in) User
`Request`

    https://surfo-api.onrender.com/api/v1/users/updateMe

DELETE Current (logged-in) User
`Request`

    https://surfo-api.onrender.com/api/v1/users/deleteMe



POST SignUp
`Request`

    https://surfo-api.onrender.com/api/v1/users/signup

POST Login
`Request`

    https://surfo-api.onrender.com/api/v1/users/login

PATCH Reset Password
`Request`

    https://surfo-api.onrender.com/api/v1/users/forgotPassword

PATCH Update My Password
`Request`

    https://surfo-api.onrender.com/api/v1/users/forgotPassword



## Rewviews


GET All Reviews
`Request`

    https://surfo-api.onrender.com/api/v1/reviews

GET Review
`Request`

    https://surfo-api.onrender.com/api/v1/reviews/:id

POST Create New Review
`Request`

    https://surfo-api.onrender.com/api/v1/reviews

PATCH Update Review
`Request`

    https://surfo-api.onrender.com/api/v1/reviews/:id

DELETE Review
`Request`

    https://surfo-api.onrender.com/api/v1/reviews/:id



GET All Reviews on the Tour
`Request`

    https://surfo-api.onrender.com/api/v1/tours/:tourId/reviews

POST Create a Review on the Tour
`Request`

    https://surfo-api.onrender.com/api/v1/tours/:tourId/reviews



GET All Reviews on the User
`Request`

    https://surfo-api.onrender.com/users/:userId/reviews



## Comments


GET All Comments
`Request`

    https://surfo-api.onrender.com/api/v1/comments    

GET Comment
`Request`

    https://surfo-api.onrender.com/api/v1/comments/:id    

POST Create Comment
`Request`

    https://surfo-api.onrender.com/api/v1/comments`

PATCH Update Comment
`Request`

    https://surfo-api.onrender.com/api/v1/comments/:id    

DELETE Comment
`Request`

    https://surfo-api.onrender.com/api/v1/comments/:id    



GET All Comments on the Tour
`Request`

    https://surfo-api.onrender.com/api/v1/tours/:tourId/comments`

POST Create Comment on the Tour
`Request`

    https://surfo-api.onrender.com/api/v1/tours/:tourId/comments    



GET All Comments on the User
`Request`

    https://surfo-api.onrender.com/api/v1/users/:tourId/comments`



## Bookings


GET All Bookings (admin)
`Request`

    https://surfo-api.onrender.com/api/v1/booking    

POST Create Booking
`Request`

    https://surfo-api.onrender.com/api/v1/booking`








