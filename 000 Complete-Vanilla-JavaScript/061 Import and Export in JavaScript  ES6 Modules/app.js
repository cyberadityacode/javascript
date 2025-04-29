/* ES6 (ECMAScript 2015) introduced modules in JavaScript, 
allowing you to break your code into reusable pieces. 
This system makes it easier to maintain and organize large codebases. */

import { usersData, myNames , getFirstUser } from "./usersData.js";

// import {productsData} from "./productsData.js"; //The requested module './productsData.js' does not provide an export named 'productsData'
import productsData from "./productsData.js"; //default export are not accessed via curly bracket



console.log(usersData);

console.log(myNames);

console.log(productsData);

/* default export= You can export only one  default value per file.

You can import it with any name. */

// access function

console.log(getFirstUser());