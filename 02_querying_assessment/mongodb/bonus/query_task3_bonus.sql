-- Task 3 Bonus: Stock Replenishment Check
-- Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
-- that are already well-stocked. They need a list of every ingredient with a stock level
-- of 100 or more so those can be deprioritised in this week's order.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the name of all rows in the Ingredients table
-- where the stock_level is greater than or equal to 100.
-- ---------------------------------------------------------------
-- Your thinking process (required)

SELECT name
FROM ingredients
WHERE stock_level >= 100;

-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- กำหนดให้ดึงข้อมูลทั้งหมดมาโดยใช้คำสั่ง SELECT และดึงทั้งหมดคือ * (Update! เมื่อกี้คิดว่าโจทย์เดียวกันกับข้อหลักครับ อ่านอีกทีคือให้เอาแค่ชื่อเลยเปลี่ยนจาก * เป็น name แทน โกเมนนาไซคับ)
-- จากนั้นใช้คำสั่ง FROM คือให้ดึงมาจากตารางไหน โจทย์คือ ingredients
-- กำหนดเงื่อนไขให้การดึงข้อมูลว่าให้ stock_level มากกว่าหรือเท่ากับ 100 โดยการใช้ WHERE เพื่อกำหนดเงื่อนไขและ ใช้เครื่องหมาย >= ในการกำหนดตามโจทย์
