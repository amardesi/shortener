## A URL Shortener
This is a repository for simple URL shortener. The JavaScript (JS) app takes any URL and a returns a shortened version in the form of a unique file path served by this resource. When visiting the shortened version of the URL, the user is redirected to the original (lengthy) URL. Additionally, if a URL has already been shortened by the system, and it is entered a second time, the first shortened URL should be given back to the user.

### Prerequisites
* [git](https://git-scm.com/) distributed version control system
* [Node](https://nodejs.org/en/) JavaScript runtime

### Built With Partial "MERN" Stack
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/) web appication framework, for handling and creating URLs
* [React](https://reactjs.org/) component based user interface JS library
* [JSON-Server](https://github.com/typicode/json-server) fake REST API

### Express Routes
The Express app uses two endpoints: `/long` for posting long URLs and checking if they already exist, and `/:short` for calling up the long URL and performing the redirect.

### Installation
As this is a demonstration exercise, not meant to be production-ready, this implementation is bypassing installation of a full database piece. Database funcitonality is being mocked up using JSON-Server using a single JSON file to represent the data being used.

#### File Structure:
The file structure of this app is logically divided and conceptually divided to represent two pieces that could run on completely separate servers. Perfmormant apps should implement this kind of separation so that these parts of the system can handle many connections simultaneously.
```
 shortener_mockDb
 |-- db.json   <--- JSON file represeting database, running on JSON-Server
 shortener     <---- Main Appication running on Node/Express
```

## Usage

## License
Distributed under the ISC License. See `LICENSE` for more information.