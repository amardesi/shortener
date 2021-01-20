## A URL Shortener
This is a repository for a simple URL shortener web application. The JavaScript (JS) app takes any URL and a returns a shortened version in the form of a unique file path served by this resource. When visiting the shortened version of the URL, the user is redirected to the original (lengthy) URL. Additionally, if a URL has already been shortened by the system, and it is entered a second time, the first shortened URL should be given back to the user.

### Prerequisites
* [git](https://git-scm.com/) distributed version control system
* [Node](https://nodejs.org/en/) JavaScript runtime

### Built With Partial "MERN" Stack
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/) web application framework, for handling and creating URLs
* [create-react-app](https://reactjs.org/) a boilerplate version of React: a component based user interface JS library
* [JSON-Server](https://github.com/typicode/json-server) a fake REST API to handle data

### Front end caveats:
* This is a very simple, single view app with minimal components. Using React for the front end is a bit overkill. If I had time, I would look for a more lightweight solution.
* Because this is a small project, no CSS frameworks, preprocessor, or component library was developed. Although that would be best approach for most control and minimal footprint. For this project, I picked [PureCSS](https://purecss.io/) for a lightweight, responsive styling framework promising compatibility across browsers.

### Express Routes
The Express app uses two endpoints: `/long` for posting long URLs and checking if they already exist, and `/:short` for calling up the corresponding long URL, and performing the redirect (if the long URL exists).

### Installation
As this is a demonstration exercise, not meant to be production-ready, this implementation is bypassing installation of a genuine database component. Database funcitonality is being mocked up JSON-Server API using a single JSON file to represent the data layer.

#### File Structure:
The file structure of this app is logically divided to represent three separate pieces that could conceptually run standalone (on separate servers). Performant apps should implement this kind of separation so that these parts of the system can handle many connections simultaneously on their own without bogging each other down.
```
 mockDb
 |-- db.json   <--- Mock database (JSON file) used by JSON-Server
 app           <--- Main Application
 client        <--- React Application
```

## Usage
1. From, root directory, run:
```sh
  npm install
```
2. Start json-server. This command includes a 2 second delay to mimic real world latency:
```sh
  cd mockDb
  json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000
```
3. In a separate terminal window, navigate to **root** directory, and run this command to start **both** Node Express and React client concurrently
```sh
  npm run dev
```
4. Navigate to `localhost:8000` in your browser

## Current Release
Currently only built to run on a development server. Configuration and build steps are needed for creation of a production instance.

### Things that are incomplete and could be made better:
#### Code environment/process:
  * Write unit tests
  * Better organization and placement of environment variables. Right now, everything sits in a shared.js, which also shouldn't be residing in the git repo
  * Toolchain: https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains
  * Add ESLint and eslint-plugin-react-hooks
  * Configuring for production

#### User experience/performance
  * Let user easily cipy URL (use SimpleCopy, or ClipboardJS)
  * Validation: check that user is entering a valid URL
  * Also test against internationalized resource identifiers (IRI) and internationalized domain names (IDN)
  * Short URLs not found on the system are handled poorly
  * Install polyfill for fetch to work with IE users
  * Explore ways to reduce React bundle size (e.g. tree shaking)
  * Animated loading indicators
  * Add cookie functionality (user's most recent short and long URLs)

## License
Distributed under the ISC License. See `LICENSE` for more information.