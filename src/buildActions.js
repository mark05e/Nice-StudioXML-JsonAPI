// "actions": {
//   "{actionId}": {
//     "actionId": 0,
//     "libraryId": "9015c095-98d9-441f-bf92-e90f5c5ed8c8",
//     "name": "",
//     "version": 0,
//     "label": "",
//     "dependencyOrder": "",
//     "implType": "",
//     "x": 0,
//     "y": 0
//   }
// },

function buildActions(jObj) {
  //
  //
  let root1 = jObj.ScriptContainer.Actions.ActionStruct;
  // let root2 = jObj.ScriptContainer.LibraryItem;

  let actions = {};

  root1.forEach((a, i) => {
    // console.log(action);
    i = i + 1; //??
    actions[i] = {};
    actions[i].actionId = a.ActionID;
    actions[i].libraryId = a.LibraryID;
    actions[i].name = a.Action;
    actions[i].version = "0";
    actions[i].label = a.Caption;
    actions[i].dependencyOrder = a.DependencyOrder;
    actions[i].implType = a.Impl_Type;
    actions[i].x = a.X;
    actions[i].y = a.Y;
  });

  return { actions };
}

export { buildActions };
