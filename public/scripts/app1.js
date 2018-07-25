"use strict";

console.log('App.js is running');

//jsx
var template = React.createElement(
    "p",
    null,
    "This is jsx from app.js."
);
var template = React.createElement("h1", { id: "billyid" }, "something new");

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
