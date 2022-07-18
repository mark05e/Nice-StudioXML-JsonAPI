import "./styles.css";
// Fast XML Parser
const { XMLParser } = require("fast-xml-parser");

// Sample Data
const SAMPLEXML_MENU = require("./sample/MENU.xml");

// Custom Functions
const { buildHeader } = require("./buildHeader");
const { buildActions } = require("./buildActions");
const { buildProperties } = require("./buildProperties");
const { buildBranches } = require("./buildBranches");

// Import XML and convert to JSON
const parser = new XMLParser();
let jObj = parser.parse(SAMPLEXML_MENU);

// https://developer.niceincontact.com/API/AdminAPI#/General/post_scripts
// myLog(buildHeader(jObj));
// myLog(buildActions(jObj));
// myLog(buildProperties(jObj));
// myLog(buildBranches(jObj));

// Build New
let scriptContent = {};
scriptContent.header = buildHeader(jObj);
scriptContent.actions = buildActions(jObj);
scriptContent.properties = buildProperties(jObj);
scriptContent.branches = buildBranches(jObj);
// ScriptContainer +=
myLog({ scriptContent });
function myLog(msg) {
  msg = JSON.stringify(msg, null, 3);
  document.getElementById("app").innerHTML = `
<h1>Studio XML to JSON API</h1>
<pre>
  ${msg}
</pre>
`;
}
