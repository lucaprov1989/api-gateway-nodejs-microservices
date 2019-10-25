# api-gateway-nodejs-microservices

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Dependencies](#dependencies)
* [Setup](#setup)

## General info
Api Gateway Boiler Plate to proxy requests to microservices using nodejs. At the moment the target routes are static, in the .env file.
	
## Technologies
Project is created with:
* NodeJS


## Dependencies
* node v.10.16.3
* npm v. 6.9.0

## Setup
To run this project:

* clone the repository: `git clone "repo_link"` on the desired folder 
* install project dependecies run `npm install` in main directory
* create a .env file and fill it with all the microservices target url for proxying
* run integration tests with `npm run test-integration`
* start the nodejs server with: `npm start`
