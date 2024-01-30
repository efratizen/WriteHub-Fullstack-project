# WriteHub ReactJS-Spring-Boot-Full-Stack-App
This project consists of two applications: one is a Spring Boot Rest API called spring-backend and another is a ReactJS application called react-frontend.

A collaborative platform for creating books, as part of the process the platform allows you to upload suggestions for the current chapter for each book that is in progress, as well as tagging the suggestions of the uploaded chapters, so that every Sunday the successful chapter will be selected until the creation of the book is finished. 
The platform is also used to read WriteHub books.

# <h3>  Applications</h3>
- spring-backend.
</br>  A Spring Boot Web Java Backend application that exposes a REST API for creating books.
spring-backend stores its data in an H2 database.
spring-backend has the following endpoints

- react-frontend.
 </br> A ReactJS front-end application in which users read books as well as contribute to the creation of the books by sharing a proposal for a chapter as well as tagging proposals for the uploaded chapters, in order to access the application the user must log in using his username and password. All requests coming from react-frontend to secure endpoints at spring-backend
react-frontend uses MUI React as a CSS style framework.
