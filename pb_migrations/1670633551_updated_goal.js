migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb862hqdb9pn9qw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vzb5pdvg",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb862hqdb9pn9qw")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
