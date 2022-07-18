// "header": {
//   "scriptName": "",
//   "busNo": 0,
//   "mediaType": 0,
//   "variableRedaction": "",
//   "LibraryId": "8297F3AE-8D7F-496E-AF28-1461632F7AC7",
//   "lockInfo": {
//     "lockedName": "",
//     "lockedId": "",
//     "lockedDate": ""
//   },
//   "nextActionId": 0
// },

function buildHeader(jObj) {
  // jObj.LibraryItem
  let root1 = jObj.ScriptContainer;
  let root2 = jObj.ScriptContainer.LibraryItem;
  // console.log({ root1 });
  let header = {};
  header.scriptName = root2.ImplPath;
  header.busNo = "0";
  header.mediaType = root1.MediaType;
  header.variableRedaction = "";
  header.LibraryId = "8297F3AE-8D7F-496E-AF28-1461632F7AC7";

  header.lockInfo = {};
  header.lockInfo.lockedName = "";
  header.lockInfo.lockedId = "";
  header.lockInfo.lockedDate = "";

  header.nextActionId = "0";

  return header;
}

export { buildHeader };
