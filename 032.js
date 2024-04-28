// aggregate group on nested fields
db.getCollection("persons").aggregate([{$group:{_id:"$company.location.country"}}])