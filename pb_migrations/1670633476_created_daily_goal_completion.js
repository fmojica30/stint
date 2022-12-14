migrate((db) => {
  const collection = new Collection({
    "id": "z2p4omwo18lmbvq",
    "created": "2022-12-10 00:51:16.450Z",
    "updated": "2022-12-10 00:51:16.450Z",
    "name": "daily_goal_completion",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ir43xpij",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "pdfziv5w",
        "name": "goal",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "xb862hqdb9pn9qw",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "net67ulh",
        "name": "campaign",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "yiqh0x9zozql1c6",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "rttivrvo",
        "name": "complete",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "kzab6c0p",
        "name": "day",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "2022-12-09 12:00:00.000Z",
          "max": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z2p4omwo18lmbvq");

  return dao.deleteCollection(collection);
})
