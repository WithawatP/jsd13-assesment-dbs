// Task 1: Budget Meal Deal
// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// which menu items could be included. To qualify, an item must be priced under $10.00,
// so they can offer good value without cutting too deep into margins.
//
// Hint: Write a query to find all menu items in the menu_items collection that have a price less than 10.00.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
use("chrome-burger-db");

db.menu_items.find({
  price: { $lt: 10.0 },
});

// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// เพื่อให้เราเข้าถึงข้อมูลของ database ให้ใช้คำสั่ง use เพื่อดึงขอมูลมาจาก database "chrome-burger-db"
// จากนั้นตามโจทย์คือให้หาเมนูที่ราตาต่ำกว่า 10.00$ เราจะใช้ db เพื่อให้อ้างอิงข้อมูลมาจาก collection "menu_item"
// และใช้คำสั่ง "find" เพื่อดึงขอมูล โดยกำหนดเงื่อนไขของคำสั่งภายในปีกกาให้อ้างอิงจากราคาก็คือ "price" ซึ่งเป็น Field ราคา
// แล้วกำหนดค่าให้ price ภายในปีกกา โดยใช้คำสั่ง &lt ซึงก็คือ less than ให้มีค่า 10.00 ก็คือให้มีค่า price น้อยกว่า 10.00 ถึงจะดึง Document มา
//
