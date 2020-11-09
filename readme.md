# GrowIndigo Assignment

This repo has two applications - frontend-app (react) and node-app (node)

## Installation

clone this repository and install the dependencies : 
 - Open node-app in terminal, and execute following commands

```bash
npm install
```
```bash
npm start
```
  - Open frontend-app in terminal, and type command

```bash
npm install
```
```bash
npm start
```

## Usage
  once you run these commands, you can access the application [here](http://localhost:3000/).

On the home page, you will see two boxes to enter mobile number and OTP.
OTP input box is disabled until OTP is sent.

I have setup some fictional mobile numbers and otp's in firebase, in case free limit exceeds

| Mobile Numbers|    Otp    |
| ------------- |:---------:|
|  345 678 901  | 753124	|
|  67890 12345  | 192837	|
|  5678 901 234 | 102938	|
|  3456 789 012 | 907856    |

## Containerization

Dockerfile is added in both the applications.

To containerize the both applications :
  - frontend-app : open frontend-app in terminal and execute following commands 
 
```bash
docker build -t frontend:dev .
```
```bash
docker run -d -it -p 3000:3000 frontend:dev
```

  - node-app : open node-app in terminal and execute following commands 
 
```bash
docker build -t backend:dev .
```
```bash
docker run -d -it -p 5000:5000 backend:dev
```