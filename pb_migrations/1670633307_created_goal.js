migrate((db) => {
  const collection = new Collection({
    "id": "xb862hqdb9pn9qw",
    "created": "2022-12-10 00:48:27.120Z",
    "updated": "2022-12-10 00:48:27.120Z",
    "name": "goal",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lptdtm1t",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 15,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vzb5pdvg",
        "name": "field",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("xb862hqdb9pn9qw");

  return dao.deleteCollection(collection);
})
