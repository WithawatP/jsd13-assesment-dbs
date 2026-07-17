// Task 2 Bonus: Kitchen Staff Contact List
// The manager has a last-minute change to the kitchen prep schedule and needs to notify
// all cooks as soon as possible. They need the full names of every staff member
// whose role is 'Cook' so they can be contacted directly.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write a query on the staff collection to find the first_name and last_name
// of all documents where the role is 'Cook'.

// ---------------------------------------------------------------
// Your thinking process (required)
use("chrome-burger-db");

db.staff.find({ role: "Cook" }, { role: 0, _id: 0 });
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// กำหนดให้ดึงข้อมูลมาจาก database ชื่อ chrome-burger-db โดยใช้ use
// ใช้คำสั่ง db เพื่อให้อิงข้อมูลมาจา่ก collection ที่ชื่อว่า staff
//ใช้คำสั่ง find เพื่อหาข้อมูลที่ต้องการโดยในวงเล็บจะเป็นเงื่อนไขพารามิเตอร์แรกคือกำหนดให้หาแค่ document ที่มี field ชื่อว่า role มือชื่อว่า Cook
