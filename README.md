# TaskTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Steps to run it locally
- Clone this project using command - `git clone https://github.com/abhinandanmishra1/TaskTracker.git`
- Make Sure Angular is installed in your system. (If not? then [Install it](https://angular.io/guide/setup-local))
- Open the folder you clonned in terminal.
- Run command `ng serve` or `ng serve --open` to start the server to `http://localhost:4200/`.  (This will start **frontend only**)
- For Backend, **Json Server** should be installed into your system.  (For using Fake API's or local database as used in this project)
- Run command to install JSON server globally -> `npm install -g json-server`
- Now open the same folder in another terminal to start the backend server or json server and run `npm run server`
- All done! You're Good to go

## Working (Locally)

# Version 1.0.0
https://user-images.githubusercontent.com/64205626/150132976-de236d86-9267-4a83-90e4-24e05c2aed58.mp4

# Version 1.0.1
https://user-images.githubusercontent.com/64205626/150563358-cddda936-093f-41cc-8688-3b2ae3708e1f.mp4

## Thanks 

## Documentation 
 Prerequisite - CSS,HTML and knowledge of components.
### **Understanding Basic Working of Angular**
- What is a component?
  - Component is nothing but a part of the website or web App. In angular all the components can be made separtely.
  - For generating a commponent - Run command - `ng generate component components/component_name`.
  - A component has 4 files or A component is comprised of 4 files
    1) **Component.html** (Contains Html of that component)
    2) **Component.css** (All the css of that component)
    3) **Component.ts** (All the functions related to that component are present in it) (It is a typescript class for a component)
        - ```import { Component } from '@angular/core';
            @Component({
              selector: 'app-sample',
              templateUrl: './sample.component.html',
              styleUrls: ['./sample.component.css']
            })
            export class SampleComponent {
              title = 'Understand Angular';
              // Write here all the functions and variables used in sample.component.html
            }
        - This is a normal component code for a component
        - **selector** means how this component will be called or used in html of other components.
        - **templateUrl** means corresponding html file of the component.
        - **styleUrls** means corresponding css files of the component.
        - SampleComponent class is the part of the typescript file where all the functions related to that component will be written.
      
    4) **Component.spec.ts** *(Not used for development)(Only used for testing)*
- For creating a project in angular - Run command - `ng new app_name`
- For running an angular app - Run command - `ng serve` or `ng serve --open`.
- Angular provides a lot of code written by itself (Once you understand it then it will be very easy to make projects)
- Understand File structure of an angular project - [Read Here](https://angular.io/guide/file-structure)

### Understanding Project(Task-Tracker) 
Completing soon......
  
