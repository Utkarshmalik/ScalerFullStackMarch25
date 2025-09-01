

const fs = require("fs");

const content = Math.random().toString(36).repeat(10000000);


fs.writeFileSync("/Users/utmalik/Scaler/ScallerFullStackMarch25/Module4/Problems/Problem1/bigFile",
    content);