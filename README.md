# Stronghold Scouting

Another year, a new round of new tech.

## Installation

After cloning the repository, open a command prompt and install dependencies:
```sh
cd StrongholdScouting
npm install
```

When you're ready to get to work, start the development server:
```sh
npm start
```

-------------------------

## Technology

### Stack

#### [Node.js](https://nodejs.org/en/)

Node.js provides us with system runtime, so we can develop native apps and server backends.

#### [Express](http://expressjs.com/)

Express is a framework for NodeJS that streamlines and simplifies the process of creating a web server. It allows us to write an API to communicate between the front and back ends, in addition to serving the application.

#### [React](http://facebook.github.io/react/)

React is a front-end Javascript framework that implements a virtual DOM, enabling the creation of custom components.

### [Gulp](https://github.com/gulpjs/gulp) Plugins

#### [browserify](https://github.com/substack/node-browserify)

Browsers do not allow us to use the require method from Node.js. With browserify, we can implement dependency management on the browser. It also will bundle the code into one file in an efficient way to not repeat dependiencies that are used more than once.

#### [browserSync](http://www.browsersync.io/)

When developing and testing the website, browserSync is a powerful tool that will rebuild and refresh the webpage so you can see the changes you make as you are working.

#### markup

Copies all of the files from /src/www to the build folder.

#### [gulp_starter](https://github.com/greypants/gulp-starter)

A useful repository that explains how many of gulp's features work and contains an example project to get familiar with it. We use this example to construct our own project.
