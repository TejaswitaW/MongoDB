//analyze query performance
db.persons.explain().find({"age":{$gt:25}})