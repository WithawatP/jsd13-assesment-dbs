// Task 4 Bonus: Supplier Dependency Check
// The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
// Before deciding whether to source from an alternative supplier, they need to know exactly
// which ingredients depend on that supplier, so they can assess the impact on the menu.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: In the ingredients collection, supplier references are stored as ObjectIds rather than names.
// Use an aggregation pipeline with $lookup to join the ingredients collection with the suppliers
// collection, then filter where the supplier name is 'Freshest Farm Produce' and return
// only the ingredient names.

// ---------------------------------------------------------------
// Your thinking process (required)
use("chrome-burger-db");

db.ingredients.aggregate([
  {
    $lookup: {
      from: "suppliers",
      localField: "supplier_id",
      foreignField: "_id",
      as: "supplier_info",
    },
  },
  {
    $match: {
      "supplier_info.name": "Freshest Farm Produce",
    },
  },
  {
    $project: {
      _id: 0,
      name: 1,
    },
  },
]);
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// เพื่อให้เราเข้าถึงข้อมูลของ database ให้ใช้คำสั่ง use เพื่อดึงขอมูลมาจาก database "chrome-burger-db" (ก็อบมาเลยครับมันเหมือนเดิม eiei)
// ใช้คำสั่ง db เพื่อให้อิงข้อมูลมาจาก collection ingredients โดยใช้การทำงานของคำสั่ง aggregate
// การทำงาน stage 1 คือการเรียกดู collection อื่นมาในการทำงาน โดยใช่คำสั่ง $lookup ภายในlookup ให้อ้างอิง suppliers
// เก็บค่าทั้งหมดไว้ใน supplier_info โดยคำสั่ง as
// stage 2 คือตั้งเงื่อนไขให้กับการทำงานโดยคำสั่ง $match และกำหนดเงื่อนไขโดยใช้พารามิเตอร์ supplier_info ที่เก็บข้อมูลมาและอิงไป name ให้ตรงกับ "Freshest Farm Produce"
// stage 3 คือการทำหน้าตา output โดยใช้คำสั่ง $project มากำหนดคือให้ซ่อน id ไว้และ แสดง name อย่างเดียว
