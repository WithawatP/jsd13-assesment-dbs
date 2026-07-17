// Task 3 Bonus: Staff Performance Review
// At the end of the month, the owner wants to reward the hardest-working cashiers.
// To decide fairly, they want to see how many orders each staff member has processed,
// with the busiest staff member appearing at the top of the list.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write an aggregation query on the orders collection to count the number of orders
// per staff member. Each order embeds the staff member's first and last name directly.
// The result should show each staff member's full name and their total order count,
// ordered by the count in descending order.

// ---------------------------------------------------------------
// Your thinking process (required)
use("chrome-burger-db");

db.orders.aggregate([
  {
    $group: {
      _id: {
        first: "$staff.first_name",
        last: "$staff.last_name",
      },
      total_orders: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      staff_fullName: { $concat: ["$_id.first", " ", "$_id.last"] },
      total_orders: 1,
    },
  },
  {
    $sort: { total_orders: -1 },
  },
]);
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// เพื่อให้เราเข้าถึงข้อมูลของ database ให้ใช้คำสั่ง use เพื่อดึงขอมูลมาจาก database "chrome-burger-db"
// stage 1 ให้สร้างกลุ่มขึ้นมาโดยคำสั่ง $group และให้ดึงค่าstaff.first_nameแล้วมาเก็บในพารามิเตอร์ first staff.last_name ก็เช่นกัน
// โดยอิงจาก id เพื่อความแม่นยำ ส่วนของ total_orders ให้ทำการสั่งให้นับขึ้น 1 ครั้งต่อจำนวนออเดอร์และคัดแยกตามกลุ่มstaffที่แยกตามชื่อไว้
// stage 2 คือจัดสรรหน้าตาว่าจะแสดงข้อมูลอะไรบ้าง เราค้องการให้แสดง ชื่อแบบรวมนามสกุลโดยกำหนดพารามิเตอร์เป็น staff_fullName
// และใช้คำสั่ง $concat เพื่อรวม string โดยอิงจากกลุ่มที่เราสร้างก็คือ _id แล้วก็ดึงค่าของพารามิเตอร์ที่เก็บข้อมูลชื่อไว้่่ก็คือ first และ last
// โดยที่มี " " เพื่อเว้นไม่ให้ชื่อกับนามสกุลติดกัน แล้วก็แสดงหน้า total_orders
// stage 3 คือเรียงจากมากไปน้อยโดยคำสั่ง $sort แล้วกำหนดให้เป็น -1 คือสัญลักษณ์ที่บอกว่าจากมากไปน้อย
