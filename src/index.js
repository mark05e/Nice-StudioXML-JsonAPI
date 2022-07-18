import "./styles.css";
const SAMPLEXML_MENU = require("./sample/MENU.xml");
const { XMLParser } = require("fast-xml-parser");
const { buildHeader } = require("./buildHeader");
const { buildActions } = require("./buildActions");
const { buildProperties } = require("./buildProperties");

const parser = new XMLParser();
let jObj = parser.parse(SAMPLEXML_MENU);

// https://developer.niceincontact.com/API/AdminAPI#/General/post_scripts
// myLog(buildHeader(jObj));
// myLog(buildActions(jObj));
myLog(buildProperties(jObj));
// console.log(buildProperties(jObj))
function myLog(msg) {
  msg = JSON.stringify(msg, null, 3);
  document.getElementById("app").innerHTML = `
<h1>Studio XML to JSON API</h1>
<pre>
  ${msg}
</pre>
`;
}
