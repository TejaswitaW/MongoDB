//analyze query performance
db.persons.explain("executionStats").find({"age":{$gt:25}})