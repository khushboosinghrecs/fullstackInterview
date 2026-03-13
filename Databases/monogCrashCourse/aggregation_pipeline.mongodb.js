use("ecommerce");

// db.sales.insertMany([
//   {
//     _id: 1,
//     item: "Apple",
//     price: 1200,
//     quantity: 2,
//     category: "Fruit",
//     date: new Date("2024-01-15"),
//   },
//   {
//     _id: 2,
//     item: "Banana",
//     price: 800,
//     quantity: 5,
//     category: "Fruit",
//     date: new Date("2024-02-20"),
//   },
//   {
//     _id: 3,
//     item: "Orange",
//     price: 600,
//     quantity: 3,
//     category: "Fruit",
//     date: new Date("2024-03-10"),
//   },
//   {
//     _id: 4,
//     item: "laptop",
//     price: 1300,
//     quantity: 1,
//     category: "Electronics",
//     date: new Date("2024-01-25"),
//   },
//   {
//     _id: 5,
//     item: "Tomato",
//     price: 750,
//     quantity: 4,
//     category: "Vegetable",
//     date: new Date("2024-02-28"),
//   },
//   {
//     _id: 6,
//     item: "Cucumber",
//     price: 500,
//     quantity: 6,
//     category: "Vegetable",
//     date: new Date("2024-03-15"),
//   },
// ]);

// db.sales.insertOne({
//   _id: 7,
//   item: "Headphones",
//   price: 1500,
//   quantity: 2,
//   category: "Electronics",
//   date: new Date("2024-01-30"),
// });

// db.sales.find();
// db.sales.aggregate([{ $match: { category: "Fruit" } }]);

// db.sales.aggregate([
//     {$project: {
//         _id: 0,
//         item: 1,
//         price: 1,

//     }}
// ])

// db.sales.aggregate([
//   {
//     $group: {
//       _id: "$category",
//       totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
//       averagePrice: { $avg: "$price" },
//     },
//   },
// ]);

db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
      averagePrice: { $avg: "$price" },
      totalQuantity: { $sum: "$quantity" },
    },
  },
  { $sort: { totalRevenue: -1 } },
]);

db.sales.aggregate([
  {
    $match: {
      date: { $gte: new Date("2024-01-01"), $lte: new Date("2024-03-31") },
    },
  },
  {
    $group: {
      _id: "$item",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
      averagePrice: { $avg: "$price" },
      totalQuantity: { $sum: "$quantity" },
    },
  },
  { $sort: { totalRevenue: -1 } },
]);

db.sales.aggregate([
  { $match: { category: "Fruit" } },
  {
    $group: {
      _id: null,
      totalFruitSales: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
  },
]);