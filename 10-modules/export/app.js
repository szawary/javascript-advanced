'use strict';
/*
import {
    sum as sum2,
    sub as sub2,
} from './module.js';

console.log(sum2(10, 15));
console.log(sub2(35, 24));
*/

// If I would like to import all from another js.
import * as MyMath from './module.js';
console.log(MyMath.sumValues(55, 55));
