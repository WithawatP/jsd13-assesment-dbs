// Task 3: Stock Replenishment Check
// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// that are already well-stocked. They need a list of every ingredient with a stock level
// of 100 or more so those can be deprioritised in this week's order.
//
// Hint: Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
use("chrome-burger-db");

db.ingredients.find({ stock_level: { $gte: 100.0 } });
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// เพื่อให้เราเข้าถึงข้อมูลของ database ให้ใช้คำสั่ง use เพื่อดึงขอมูลมาจาก database "chrome-burger-db" (ก็อบมาเลยครับมันเหมือนเดิม eiei)
// ใช้ db ดึงข้อมูลมาจาก collection ingredients และใช้คำสั่ง find เพื่อหาข้อมูล
// กำหนดเงื่อนไขตามโจทย์คืออยากให้แสดงข้อมูลของ ingredients ทั้งหมดโดยอ้างอิงค่า stock_level ให้มีค่ามากว่าหรือเท่ากับ 100
// โดยส่วนนี้ใช้คำสั่งคล้าย Task1 เลยคือ $gte ย่อมากจาก "Greater Than or Equal" มากกว่าหรือเท่ากับนั้นเอง กำหนดค่าให้เป็น 100
