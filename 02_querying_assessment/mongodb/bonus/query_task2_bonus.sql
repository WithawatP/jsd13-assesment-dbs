-- Task 2 Bonus: Shift Activity Report
-- Jane Doe has an upcoming performance review and the manager wants to look at her order history
-- ahead of the meeting. They only need to see when each order was placed and what it was worth —
-- no other details are required for this particular review.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the order_date and total_price from the Orders table
-- for all orders handled by Jane Doe. You will need to join with the Staff table
-- to filter by the staff member's name.
 -- ---------------------------------------------------------------
-- Your thinking process (required)
 
SELECT orders.order_date, 
       orders.total_price
FROM orders
JOIN staff ON orders.staff_id = staff.staff_id 
WHERE staff.first_name = 'Jane' 
    AND staff.last_name = 'Doe';

-- กรณีรู้ id ของ staff

SELECT orders.order_date,
       orders.total_price
FROM orders
WHERE staff_id = 1;

-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- ตอนแรกผมได้ทำเป็นแบบกรณีที่ 2 ครับเพราะว่าไปส่อง id ในตารางของ staff เลยกำหนดให้มันดึง staff มาแค่ id 1 ไม่ได้นึกถึงเรื่อง JOIN
-- แต่พออ่านโจทย์แล้วลองคิดว่าถ้าไม่อยากเขาไปดู id ล่ะจะทำยังไง เลยทำแบบใช้คำสั่ง JOIN แทนครับ
-- อธิบายได้ว่าใช้คำสั่ง SELECT มากำหนดว่าอยากได้ข้อมูลส่วนไหนบ้างตามโจทย์คือ date กับ total price
-- ใช้ FROM หาว่าเอามาจากตารางไหน ส่วนนี้เอามาจาก orders
-- ทำการเพิ่มความสัมพันธ์โดยใช้ JOIN เพิ่มตาราง staff มา และกำหนดให้ staff_id ของตาราง order และ staff สัมพันธ์กันโดยใช้คำสั่ง ON\
-- ต่อมากำหนดว่าเราจะกรองมาจากอะไรที่อยากให้ id ทั้ง 2 ตารางมีค่าเท่ากันแล้วดึงมา ส่วนนี้เราจะกรองด้วยชื่อโดยใช้คำสั่ง WHERE
-- กำหนด WHERE ด้วยชื่อของ staff ทั้งชื่อ-นามสกุล ส่วนนี้ข้อมูลมันแยกกันก็ให้ใช้คำสั่ง AND ด้วยจะได้กรองมาจาก 2 ส่วน
-- ส่วนของอีกรูปแบบนึงก็เป็นกรณีรู้ id ของ staff ให้ตัด JOIN ออกได้เลยเนื่องจากในตาราง orders มี id ของ staff อยู่แล้ว และให้ใส่้ WHERE staff_id = 1; ได้เลย
-- ในกรณีที่เราต้องการความเป็นอัตโนมัติ เช่น เลือกชื่อพนักงานโดยที่ไม่ต้องสนใจว่าพนักงานคนนั้น ID อะไร ให้เลือกใช้ JOIN เพื่อให้ระบบจัดการหาค่า ID ให้เราอัตโนมัติครับ
