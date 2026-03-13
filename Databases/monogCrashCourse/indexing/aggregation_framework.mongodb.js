use("ecommerce");

db.orders.aggregate([
  { $group: { _id: null, totalRevenue: { $sum: "$total" } } },
]);

db.orders.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]);

db.orders.find();
