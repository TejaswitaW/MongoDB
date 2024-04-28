//create index
db.persons.createIndex(
{name:1},
{unique:1},
)
db.persons.getIndexes()
/*
[
    {
        "v" : 2.0,
        "key" : {
            "_id" : 1.0
        },
        "name" : "_id_"
    },
    {
        "v" : 2.0,
        "key" : {
            "index" : 1.0
        },
        "name" : "index_1",
        "unique" : true
    },
    {
        "v" : 2.0,
        "key" : {
            "name" : 1.0
        },
        "name" : "name_1",
        "unique" : true
    }
]


*/