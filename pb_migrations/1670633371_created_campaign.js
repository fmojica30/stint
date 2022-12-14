migrate((db) => {
  const collection = new Collection({
    "id": "yiqh0x9zozql1c6",
    "created": "2022-12-10 00:49:31.520Z",
    "updated": "2022-12-10 00:49:31.520Z",
    "name": "campaign",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p3iyvvmj",
        "name": "name",
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
        "id": "ti1bskpb",
        "name": "ended",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "cjp4vuba",
        "name": "user",
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
  const collection = dao.findCollectionByNameOrId("yiqh0x9zozql1c6");

  return dao.deleteCollection(collection);
})
