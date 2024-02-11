DROP TABLE IF EXISTS expensesweb;
CREATE TABLE expensesweb(
    id INT NOT NULL PRIMARY KEY,
    category VARCHAR(30),
    price INT,
    datep DATE,
    descript VARCHAR(200)
);