-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.
-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js
-- ---------------------------------------------------------------
-- Your thinking process (required)
 
SELECT staff.first_name || ' ' || staff.last_name AS staff_fullName,
       COUNT(orders.order_id) AS total_orders
FROM orders
JOIN staff ON orders.staff_id = staff.staff_id
GROUP BY staff.staff_id,
         staff.first_name,
         staff.last_name
ORDER BY total_orders DESC;

-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- ใช้คำสั่ง SELECT เพื่อเป็นการดึงข้อมูลที่ต้องการ ตามโจทย์คืแต้องการ ชื่อเต็มstaffในบรรทัดเดียวกันและผลรวมของออเดอร์ของstaffแต่ละคน
-- ซึ่งใช้การเชื่อมข้อความโดยใช้สัญลักษณ์ || แทน + และใส่ ' ' ไปเพื่อให้ชื่อกับนามสกุลไม่คิดกัน และใช่คำสั่ง AS เพื่อให้ไปเก็บข้อมูลใน staff_fullName
-- ส่วนของการนับ order ก็ใช้คำสั่งนับจำนวนคือ COUNT โดยอิงจากตาราง orders และ rows order_id ในวงเล็บ และทำไปเก็บใน total_orders โดยคำสั่ง AS
-- อ้างอิงมาจากตารางโดยคำสั่ง FROM
-- เชื่อมตารางโดยคำสั่ง JOIN โดยอิงจากข้อมูล staff_id จากทั้ง 2 ตาราง
-- สร้างกลุ่มให้กับชื่อและนามสกุลโดยใช้คำสั่ง GROUP BY โดยอิงจาก staff.first_name, staff.last_name และลดข้อผิดพลาดโดยให้เพิ่ม staff.staff_id ด้วย
-- กำหนดให้เรียงจากมากไปน้อยด้วยคำสั่ง ORDER BY โดยให้อ้างอิง total_orders ให้ค่าเรียงจากมากไปน้่อยโดยคำสั่ง DESC