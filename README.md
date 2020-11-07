# What is TemperTrac

Using this application an education center teacher (e-Haebeob) can input and track students' temperatures once checked to follow the government's regulation in relation to the current situation. This app essentially replaces the current tracking style at many branches where teachers manually write on papers.

## Application URL

https://tempture.herokuapp.com

## Authorization

This is a public application and no authorization is required to access it.

## Common setup

Clone the repo (or extract the provided project folder) and install dependencies.

```bash
git clone https://github.com/jadekang0611/temp-track.git

npm install
```

## User Research

### Who are main users?

Main users are educators or owners at private institutions mainly eHabeob Math centers or small individual restaurants or cafes.

### Background of the Application

Due to unchanging severity of the COVID-19, Korean government requires every business to take visitors' or customers' personal information and temperatures and maintain all records. Many businesses have devices to capture a customer's QR code to get their personal information from their phone via Kakao or Naver; however, small private businesses can't afford a such device. Therefore, people at many places take each visitor's temperature, manually track their personal information and temperatures on papers everyday. Furthermore, they often use the same paper that has previous information of many visitors over two or three days, each person's personal information is accessible to anyone.

### What are the users' pain points?

Manual entries of each visitor's temperature takes time and gets lost though government officials often request small businesses to send them a compiled report that shows all entries during over a certain period.

### What solutions do the users get from the application?

The users now have one place where they add and view personal information. Therefore, now the users simply enter each student's temperature during their visit at the place that only takes less than 5 seconds per student. Moreover, each temperature submission never appears in front of public users as the data is saved and input fields are reset. Lastly, the users can now easily share visitors' temperature records with government officials at request with just one-click.

## User Flow in the Application

![userflow](https://user-images.githubusercontent.com/56938630/97105002-6ad6da80-16fb-11eb-98cb-c5eaecbff42f.jpeg)

## Technologies

React
Material-UI
Axios
DayJS
jsPDF

## Main Components

### AddStudent

The AddTemp contains the form UI and handles the posting of a new user data to the temp-track API.

### AddTemp

The AddTemp contains the form UI and handles the fetching of the existing user data from the temp-track API and the posting of a new record to the user data.

### ShowStudents

The ShowStudents component contains the MyStudents and NoStudents and handles the fetching of data from the temp-track API.

### ShowTemp

The ShowTemp component contains the MyStudentTemp and NoTemp and handles the fetching of temperature data from the temp-track API.
The ShowTemp component also deals with passing data to my PDF Generator custom onClick event and generates a report in the PDF format using the StudentTempList array that is updated by the temp-track API based on the fetching in the component.

## Deploy to Heroku

You can deploy this app to Heroku following the steps provided below. If you aren't yet a collaborator, you can request an invitation by sending an email to jkang.se@gmail.com

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://devcenter.heroku.com/articles/collab)
