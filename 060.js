// executionStats with RegExp
db.persons.explain("executionStats").find({"name":/el/i})