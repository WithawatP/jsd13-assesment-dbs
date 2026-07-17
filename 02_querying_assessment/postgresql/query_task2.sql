-- Task 2: Kitchen Staff Contact List
-- The manager has a last-minute change to the kitchen prep schedule and needs to notify
-- all cooks as soon as possible. They need the full names of every staff member
-- whose role is 'Cook' so they can be contacted directly.
--
-- Hint: Write a query to list the first_name and last_name of all staff members whose role is 'Cook'.
 -- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task2_bonus.mongodb.js
 -- ---------------------------------------------------------------
-- Your thinking process (required)

SELECT first_name,
       last_name
FROM staff
WHERE role = 'Cook' -- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- ใช้คำสั่ง SELECT เพื่อเรียกดึงข้อมูลมา โดยกำหนดให้ดึงแค่ first_name และ last_name
-- ใช้ FROM เพิ่งชี้ว่าเอามาจากตารางไหน ในโจทย์คือต้องการหา staff ก็กำหนดเป็น staff
-- กำหนดเงื่อนไขโดยการใช้ WHERE และตั้งเงื่อนไขให้ role มีค่าเท่ากับ Cook
--