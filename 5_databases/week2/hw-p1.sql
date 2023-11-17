USE hyf_lesson1;

SELECT * FROM task 

INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
VALUES (
        'Being fabulous',
        'Effortlessly',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        '2023-11-16 11:00:00',
        1,
        1
    );

UPDATE task
SET
    title = "Being a drag queen"
WHERE title = "Being fabulous";

UPDATE task SET due_date = '2023-02-01' WHERE id = 35;

UPDATE task SET status_id = 2 WHERE id = 35;

UPDATE task SET status_id = 3 WHERE id = 35;

DELETE FROM task WHERE id = 36;