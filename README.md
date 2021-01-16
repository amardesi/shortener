## A URL Shortener
This is a repository for simple URL shortener. The app takes any URL and a returns a shortened version in the form of a unique file path served by this resource. When visiting the shortened version of the URL, the user is redirected to the original (lengthy) URL. Additionally, if a URL has already been shortened by the system, and it is entered a second time, the first shortened URL should be given back to the user.

### Built With
MERN Stack:
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node](https://nodejs.org/en/)

## Express Routes
The Express app uses two endpoints: `/long` for posting long URLs and checking if they already exist, and `/:short` for calling up the long URL and performing the redirect.

### Prerequisites
* Node

### Installation

## Usage

## License
Distributed under the MIT License. See `LICENSE` for more information.