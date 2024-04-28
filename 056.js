//create index,custom index name
db.getCollection("persons").createIndex({age:1},{name:"myNewIndex"})
db.getCollection("persons").getIndexes()