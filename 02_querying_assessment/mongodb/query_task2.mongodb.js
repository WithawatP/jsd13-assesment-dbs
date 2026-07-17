// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
use("chrome-burger-db");

db.orders.find(
  { "staff.first_name": "Jane", "staff.last_name": "Doe" },
  { order_date: 1, total_price: 1, _id: 0 },
);
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// เพื่อให้เราเข้าถึงข้อมูลของ database ให้ใช้คำสั่ง use เพื่อดึงขอมูลมาจาก database "chrome-burger-db"
// และกำหนด db ให้อ้างอิง collection "order" เพื่อจะดึงข้อมูล date,total price
// จากนั้นกำหนดเงื่อนไขการดึงข้อมูลโดยการตีกรอบให้หาแค่ first_name , last_name ที่ตรงกับโจทย์
// (ส่วนนี้อ้างอิงว่า staff.first_name มาได้เลยเนื่องจากภายใน document ของ order มีการอ้างอิงชื่อของ staff ไว้แล้วหากยังไม่ได้อ้างอิงก็จำเป็นต้องดึงเป็น id ของ staffแทน)
// และจากนั้นให้มีอีกเงื่อนไขนึงคือให้ทำการดึงข้อมูลแค่ order_date,total_price โดยกำหนดค่าเป็น 1 ส่วน id กำหนดให้ซ่อนไว้โดย 0 (หากไม่กำหนดด้วย 0 มันก็จะแสดงอัตโนมัติ)
//
