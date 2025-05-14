import { getCounter, increment } from "./counter.js";

increment();
increment();

console.log(getCounter());


import {increment as incrementAgain, getCounter as getCounterAgain } from "./counter.js";

incrementAgain();

console.log(getCounterAgain());
