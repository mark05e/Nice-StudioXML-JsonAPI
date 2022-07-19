# Nice-StudioXML-JsonAPI

Experiment to convert Nice Studio scripts (xml) to json that will can be accepted by their APIs

[CodeSandbox](https://codesandbox.io/s/crazy-ishizaka-n3cbw0)

## Source - Sample XML Script

- [Reqagent](https://help.nice-incontact.com/content/studio/actions/reqagent/reqagent.htm) - [Script](https://help.nice-incontact.com/content/studio/actions/reqagent/reqagt.zip)
- [Menu](https://help.nice-incontact.com/content/studio/actions/menu/menu.htm) - [Script](https://help.nice-incontact.com/content/studio/actions/menu/menu.zip)
- [Case](https://help.nice-incontact.com/content/studio/actions/case/case.htm) - [Script](https://help.nice-incontact.com/content/studio/actions/case/casephonescriptexample.zip)

## Target - [JSON Model](https://developer.niceincontact.com/API/AdminAPI#/General/post_scripts)

```json
{
  "postScript": {
    "type": "object",
    "additionalProperties": false,
    "required": ["scriptContent"],
    "properties": {
      "scriptContent": {
        "type": "object",
        "title": "The scriptContent schema",
        "description": "An explanation about the purpose of this instance.",
        "required": ["header", "actions", "properties", "branches"],
        "properties": {
          "header": {
            "type": "object",
            "title": "The header schema",
            "description": "An explanation about the purpose of this instance.",
            "required": [
              "scriptName",
              "busNo",
              "mediaType",
              "variableRedaction",
              "nextActionId"
            ],
            "properties": {
              "scriptName": {
                "type": "string",
                "title": "The scriptName schema",
                "description": "An explanation about the purpose of this instance.",
                "default": ""
              },
              "busNo": {
                "type": "integer",
                "title": "The busNo schema",
                "description": "An explanation about the purpose of this instance.",
                "default": 0
              },
              "mediaType": {
                "type": "integer",
                "title": "The mediaType schema",
                "description": "An explanation about the purpose of this instance.",
                "default": 0
              },
              "variableRedaction": {
                "type": "string",
                "title": "The variableRedaction schema",
                "description": "An explanation about the purpose of this instance.",
                "default": ""
              },
              "LibraryId": {
                "type": "string",
                "title": "The LibraryId schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "8297F3AE-8D7F-496E-AF28-1461632F7AC7"
              },
              "lockInfo": {
                "type": "object",
                "title": "The lockInfo schema",
                "description": "An explanation about the purpose of this instance.",
                "default": {},
                "example": {
                  "lockedName": "",
                  "lockedId": "",
                  "lockedDate": ""
                },
                "properties": {
                  "lockedName": {
                    "type": "string",
                    "title": "The lockedName schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "example": [""]
                  },
                  "lockedId": {
                    "type": "string",
                    "title": "The lockedId schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "example": [""]
                  },
                  "lockedDate": {
                    "type": "string",
                    "title": "The lockedDate schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "example": [""]
                  }
                },
                "additionalProperties": true
              },
              "nextActionId": {
                "type": "integer",
                "title": "The nextActionId schema",
                "description": "An explanation about the purpose of this instance.",
                "default": 0
              }
            }
          },
          "actions": {
            "type": "object",
            "title": "The actions schema",
            "description": "{actionId} must be numeric and is the identifier of the action",
            "required": ["{actionId}"],
            "properties": {
              "{actionId}": {
                "type": "object",
                "title": "The 2 schema",
                "description": "An explanation about the purpose of this instance.",
                "required": [
                  "actionId",
                  "libraryId",
                  "name",
                  "version",
                  "label",
                  "dependencyOrder",
                  "implType",
                  "x",
                  "y"
                ],
                "properties": {
                  "actionId": {
                    "type": "integer",
                    "title": "The actionId schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0
                  },
                  "libraryId": {
                    "type": "string",
                    "title": "The libraryId schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "9015c095-98d9-441f-bf92-e90f5c5ed8c8"
                  },
                  "name": {
                    "type": "string",
                    "title": "The name schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": ""
                  },
                  "version": {
                    "type": "integer",
                    "title": "The version schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0
                  },
                  "label": {
                    "type": "string",
                    "title": "The label schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": ""
                  },
                  "dependencyOrder": {
                    "type": "string",
                    "title": "The dependencyOrder schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": ""
                  },
                  "implType": {
                    "type": "string",
                    "title": "The implType schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": ""
                  },
                  "x": {
                    "type": "integer",
                    "title": "The x schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0
                  },
                  "y": {
                    "type": "integer",
                    "title": "The y schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0
                  }
                }
              }
            }
          },
          "properties": {
            "type": "object",
            "title": "The properties schema",
            "description": "{actionId} must be numeric and is the identifier of the action",
            "required": ["{actionId}"],
            "properties": {
              "{actionId}": {
                "type": "object",
                "title": "The 2 schema",
                "description": "An explanation about the purpose of this instance.",
                "required": ["0"],
                "properties": {
                  "0": {
                    "type": "object",
                    "title": "The 0 schema",
                    "description": "An explanation about the purpose of this instance.",
                    "required": ["name", "value", "hidden"],
                    "properties": {
                      "name": {
                        "type": "string",
                        "title": "The name schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                      },
                      "value": {
                        "type": "string",
                        "title": "The value schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                      },
                      "hidden": {
                        "type": "string",
                        "title": "The hidden schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                      }
                    }
                  }
                }
              }
            }
          },
          "branches": {
            "type": "object",
            "title": "The branches schema",
            "description": "{actionId} must be numeric and is the identifier of the action",
            "required": ["{actionId}"],
            "properties": {
              "{actionId}": {
                "type": "array",
                "title": "The 2 schema",
                "description": "An explanation about the purpose of this instance.",
                "default": [],
                "example": [
                  [
                    {
                      "to": 0,
                      "label": "",
                      "type": "default",
                      "index": 0
                    }
                  ]
                ],
                "items": {
                  "type": "object",
                  "title": "The first anyOf schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": {},
                  "example": [
                    {
                      "to": 0,
                      "label": "",
                      "type": "default",
                      "index": 0
                    }
                  ],
                  "required": ["to", "label", "type", "index"],
                  "properties": {
                    "to": {
                      "type": "integer",
                      "title": "The to schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": 0,
                      "example": [0]
                    },
                    "label": {
                      "type": "string",
                      "title": "The label schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": "",
                      "example": [""]
                    },
                    "type": {
                      "type": "string",
                      "title": "The type schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": "",
                      "example": ["default"]
                    },
                    "index": {
                      "type": "integer",
                      "title": "The index schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": 0,
                      "example": [0]
                    }
                  },
                  "additionalProperties": true
                }
              }
            }
          }
        }
      }
    }
  }
}
```
