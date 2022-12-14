migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb862hqdb9pn9qw")

  collection.listRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb862hqdb9pn9qw")

  collection.listRule = null

  return dao.saveCollection(collection)
})
