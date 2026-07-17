// Task 1 Bonus: Sides Menu Board
// The owner wants to update the printed menu board that displays only the side dishes.
// They need a list of every item in the 'Side' category along with its current price,
// so the designer can produce an accurate board without having to check each item manually.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write a query on the menu_items collection to find the name and price
// of all documents where the category is 'Side'.

// ---------------------------------------------------------------
// Your thinking process (required)
use("chrome-burger-db");

db.menu_items.find({ category: "Side" }, { name: 1, price: 1, _id: 0 });
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// กำหนดให้ดึงข้อมูลมาจาก database ชื่อ chrome-burger-db โดยใช้ use
// ใช้คำสั่ง db เพื่อให้อิงข้อมูลมาจา่ก collection ที่ชื่อว่า menu_items
// ใช้คำสั่ง find เพื่อหาข้อมูลที่ต้องการโดยในวงเล็บจะเป็นเงื่อนไขพารามิเตอร์แรกคือกำหนดให้หาแค่ document ที่มี field ชื่อว่า category มือชื่อว่า Side
// พารามิเตอร์ที่2คือให้ตั้งเงื่อไขให้แสดงแค่ name กับ price และให้ซ่อน id ไว้
//
