-- Task 4: Supplier Dependency Check
-- The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
-- Before deciding whether to source from an alternative supplier, they need to know exactly
-- which ingredients depend on that supplier, so they can assess the impact on the menu.
--
-- Hint: Write a query to find the names of all ingredients supplied by 'Freshest Farm Produce'.
-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task4_bonus.mongodb.js
-- ---------------------------------------------------------------
-- Your thinking process (required)

SELECT ingredients.name
FROM ingredients
JOIN suppliers ON suppliers.supplier_id = ingredients.supplier_id
WHERE suppliers.name = 'Freshest Farm Produce' -- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- ใช้คำสั่ง SELECT เพื่อกำหนดข้อมูลที่อยากได้ นที่นี้คือชื่อของ ingredient ในคำสั่งทั้งหมดมีการ JOIN ดังนั้นต้องกำหนดให้ชัดเจนว่าเอาชื่อมาจากตารางไหนโดยเขียนรูปแบบนี้ ingredients.name
-- ใช้คำสั่ง FROM เพิ่งชี้ว่าเอามาจากตารางไหน
-- ใช้คำสั่ง JOIN เพื่อเชื่อมตาราง suppliers เข้ามาโดยอิงจาก supplier_id ของทั้ง 2 ตาราง
-- ใช้คำสั่ง WHERE เพื่อกำหนดเงื่อนไข ซึ่งโจทย์ต้องการให้อิงชื่อของ supplier ว่า Freshest Farm Produce