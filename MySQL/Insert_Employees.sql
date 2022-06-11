ALTER TABLE employeedata.Employee
ADD COLUMN Country VARCHAR(32) AFTER idJobType;

INSERT INTO employeedata.Employee
(
idJobType,
Country,
FirstName,
LastName,
LocalSalary,
DollarSalary)
VALUES
(3,'USA','Josue','Gutierrez',500,500),
(3,'Scotland','Geisel','Montoya',406,500),
(3,'Ireland','Oscar','Hernandez',475,500),
(4,'Scotland','Luis','Araya',81,100),
(1,'Ireland','Luis','Mata',81,100),
(2,'Scotland','Luis','Perez',81,100);

SELECT * FROM employeedata.Employee


