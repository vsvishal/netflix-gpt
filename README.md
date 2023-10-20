# Netflix GPT

- Creat React App
- Configure Tailwing

## Demo user

- email: vrsharma42@gmail.com
- pwd: Test@1234

- test@gmail.com
- Demo@1234

## Features

- Login/Sign Up
  - Sign In / Sign Up form
  - redirect to browser page
- Browser (after authentication)
  - Header
  - Main Movie
    - Tailer in background
    - Title & Description
    - Movie suggestions
      - Movie Lists \* N
- Netflix GPT
  - Searchbar
  - Movie Suggestions

### 😃 FORMIK

- Formik is a popular open-source library for building and processing form data in React applications. It provides many utility components and functions that make handling form data in a React application more enjoyable.

- Form building in React can be complex and time-consuming, requiring state management, validation, and error handling.

- To simplify this process, the Formik library provides an intuitive solution for building forms in React. Formik has a straightforward API and built-in validation, making collecting and manipulating input data in React applications easy.

### REGEX for form validation

- Password validation: https://regexr.com/3bfsi
- Name validation: https://regex101.com/r/gK4eN5/1

Project Deployed link : https://netflixgpt-eaae1.web.app/ https://netflixgpt-eaae1.web.app

## REDUX

- npm i -D @reduxjs/toolkit
- npm i react-redux

## Movie api TMDB

## Everything in react is called 2 times due to <React.StrictMode> in only development phase

- It does some extra checks which is good for during development phase (it investigates the calls between the components)
- It doesn not render 2 times in production

### Create Openai secret key & install the openai package

https://platform.openai.com/account/api-keys

- npm install --save openai

### By default CSS is applied for mobile devices

- Default is mobile, sm is for tab, & md for desktop
