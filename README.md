# Express + MongoDB + REST API Boilerplate

A standardize, simple and organized foundation of setting up ExpressJs + MongoDB as a REST API Server for both development and production using docker.

## How To
1. Run `npm run init` to configure your project settings for various variables
2. Run `npm run docker:up:dev` for development or `npm run docker:up` for production to start docker containers. Once containers have broght up, you can visit http://localhost:[port] in browser.
3. Write your application code under `server` directory. See below for detail structure of directories. 
4. Run `npm run docker:down` to stop docker containers

## Application Directories Structure
The API server is structured using MVC architecture which start with the path /api/<version>/<route> and the default version is v1. So the path start by default /api/v1/<route>. 
```
|-- server (Your application code live here)
	|-- controllers (contorllers to manipulate underlying modes)
	|-- models (models definition with mongoose)
	|-- routes (handlers of various path)
	|-- public (static assets folder)
	index.js  
```