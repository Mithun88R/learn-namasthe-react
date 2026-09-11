    npm - is a package manager

      npm is a standard repository before all the packages.

      npm init

      give the name,version,description,end point,test command,git repository,author,license


      then we need to install bundle

      npm install -D parcel

      two types of dependencies we can install
         1) dev dependencies - dev dependencies are used in developement phase
         2) normal dependencies -normal dependencies are used in production also.


        -D is represending of using dev dependencies

        in Package. json we get
         "devDependencies": {
                             "parcel": "^2.16.4"
                        }

            ^ - (caret)means automatically get updated the minor version of the packages
            ~ - (tilde)means automatically get updated the major version of the packages.


            package.json

            -- package.json is a configuration for our npm.

            package-lock.json
             -- it keeps a track of all the versions, exact versions of all the dependencies




             node_modules

             --- node_modules is like a database it contains the actual data of the dependencies i.e, packages that our project needs.


             transative dependencies- packages that depend on other packages


             IF we have package.json and package-lock.json then we can re-create all the node_modules even if i delete the node_modules

npx means executing a package.

CDN links are not a preferred way to bring react and reactDOM in our applications

In index.html script give type="module" before src="./App.js"

#parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds - .parcel-cache
- Image Optimization
- Minification
- Bundle
- Compress

npm start=>npm run start
npm run build

DOM Elements are the HTML tags

React Element => React Element at the end of the day is an object. ==> React Element is a plain Javascript Object.

React.createElement => Object => when we render to the DOM It becomes HTML.

When we push what ever ReactElement to the root it will Replace the content inside the root.

JSX is HTML like Syntax or XML like Syntax => JSX is not HTML in JavaScript

JSX ( transpiled before it reaches the Javascript Engine) => transpiled means converted to the code that browsers can understand.

==> IF we have to give attributes to JSX you have to use camelCase.

=> JSX => Babel transpiles it to React.createElement => ReactElement-JS Obect => HTMLElement(render).

React Component.
// Class Based Component - OLD
// Functional Component - NEW

React Functional Component = >Is a Function that returns a JSX code.
or
A function that returns a React Element.

React Components names should start with Capital Letters.

---

# syntax:

const ComponentName = ()=>{
return(React Elements);
}

// React Element Examples:
===== ======= =========

const heading = (<h1 className="header"> Example for React Element </h1>);

// React Functional Component Examples:
===== ========== ========= ===========

const HeadingComponent =()=>{
return(<h1 className="header">Example for React Functional Components</h1>);
}

--- Some times if it is a single statement then if return keyword not given also it works the same.

For rendering
=== =========

Render React Elements we give

root.render(heading);

React Functional Component Render we give
===== ========== ========= ======
root.render(<HeadingComponent />);

Component Composition:
========= ============
putting component inside another component is call component Composition.

Config driven UI

Folder Utils means utilities that are called accross the projects. in Some projects it named as Common/config
============ ==============

There are Two Types of Exports and Imports

=> Default Export - A file in which we need to export only one const or component means then we use Default Export. Only one Default Export can be called in a file.

example: export default <name of variable>

=> Named Export - A file where we need to export more than one const then we can use Named export.

Simillarly:

=> Default Import

example - import React from 'react';

=> Named Import

example - import {LOGO_URL} from "../utils/constants";

React HOOKS.

- Its a Normal JS utility Functions

- useState() - Superpowerful State Variables in React
- useEffect()

whenever a state varianble get updated the react rerender the component

Reconciliation Algoritham -> also know as (React Fiber)
============== ==========

React Fiber algoritham came In React 16

\*\* why react is fast?

React is doing efficiant DOM Manipulation.
It has a virtual DOM. It has a Diff Algoritham which is very efficient and it can do efficient DOM manipulation.
