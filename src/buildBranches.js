// "branches": {
//   "{actionId}": [
//     [
//       {
//         "to": 0,
//         "label": "",
//         "type": "default",
//         "index": 0
//       }
//     ]
//   ]
// }

function buildBranches(jObj) {
  //
  //
  let root1 = jObj.ScriptContainer.Actions.ActionStruct;

  // console.log(root1);

  let branches = {};

  root1.forEach((a, i) => {
    //
    //
    if (a.Cases.BranchStruct && a.Cases.BranchStruct.length > 1) {
      branches[a.ActionID] = [];
      a.Cases.BranchStruct.forEach((b, j) => {
        branches[a.ActionID].push({
          to: b.ActionID,
          label: b.Text,
          type: "",
          index: b.Index
        });
      });
    }
  });

  return { branches };
}

export { buildBranches };
