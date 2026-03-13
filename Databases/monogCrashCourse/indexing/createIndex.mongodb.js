db.products.createIndex({ name: 1 });

db.products.getIndexes();
db.products.find({ price: { $gt: 5000 } }).explain("executionStats");
