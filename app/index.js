require("module-alias/register");
const { transform } = require("@base/utilities/test");

console.log("Starting");

const out = transform("call ", 5);

console.log(out);
