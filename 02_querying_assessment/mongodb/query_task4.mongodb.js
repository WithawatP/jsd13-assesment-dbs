// Task 4: Total Revenue Summary
// At the end of the trading period, the owner wants a single figure that shows how much revenue
// the truck has generated across all recorded orders. This number will be used in their
// financial summary report, so the result should be returned as a single value named total_revenue.
//
// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
use("chrome-burger-db");

db.orders.aggregate([
  { $group: { _id: null, total_revenue: { $sum: "$total_price" } } },
  {
    $project: {
      _id: 0,
      total_revenue: 1,
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
// ครั้งนี้เราจะดึงข้อมูลมาจาก collection orders แต่รูปแบบการทำงานจะเป็นคำสั่ง aggregatet เอาเพราะว่ามีการคำนวนผลมาเกี่ยวไม่ได้ดึงข้อมูลไปอย่างเดียว
// โดยการทำงานของคำสั่งนี่จะแบ่งเป็น2ส่วนหรือก็คือ 2 stage ซึ่งผมจะเขียนเป็นรูปแบบ array
// stageแรกคือ $group เป็นคำส่งดึงข้อมูลมารวมกันโดยปกติแล้วมันจะจำแนกข้อมูลได้แต่เราไม่ต้องการจำแนกเราต้องการรวมมากองได้เลย อ้างอิงจาก _id: null คือไม่สนว่าidไหนเอามากองเลย
// ต่อมาก็กำหนดfieldให้ผลรวมของ total_price โดยใช้ชื่อ total_revenue ตามโจทย์และทำคำสั่ง $sum คือหาผลรวมของ total_price ซึ่งงมันจะเก็บไว้ใน field total_revenue
// พอเราได้ผลรวมแล้วก็มา stage ที่ 2 คือ $project คือการกำหนดหน้าตาว่าจะให่แสดงผลออกมายังไง ตรงนี้ผมตั้งแค่ให้ซ่อน id ไว้ และให้ total_revenueแสดง
//
