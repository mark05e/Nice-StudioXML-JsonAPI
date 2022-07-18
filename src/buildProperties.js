// "properties": {
//   "{actionId}": {
//     "0": {
//       "name": "",
//       "value": "",
//       "hidden": ""
//     }
//   }
// },

function buildProperties(jObj) {
  //
  //
  let root1 = jObj.ScriptContainer.Actions.ActionStruct;

  let properties = {};
  root1.forEach((a, i) => {
    properties[a.ActionID] = {};
    let root2 = a.Parameters.string;
    root2.forEach((p, i) => {
      //
      //
      let prop = {};
      prop.name = i;
      prop.value = p;
      prop.hidden = false;
      console.log(prop);
      properties[a.ActionID][i] = prop;
    });
  });
  return { properties };
}

export { buildProperties };
