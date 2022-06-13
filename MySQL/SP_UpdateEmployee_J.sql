CREATE PROCEDURE SP_UpdateEmployee_J
(
IN EmployeeID INT, IN incountry VARCHAR(32), IN typejob INT, IN firstName VARCHAR(32), IN lastName VARCHAR(32), IN dollarSalary INT
)
BEGIN

	UPDATE employeedata.Employee AS E
    SET E.idJobType = CASE WHEN ISNULL(typejob) = 1 THEN E.idJobType ELSE typejob END
		,E.Country = CASE WHEN ISNULL(incountry) = 1 THEN E.Country ELSE incountry END
		,E.FirstName = CASE WHEN ISNULL(firstName) = 1 THEN E.FirstName ELSE firstName END
		,E.LastName = CASE WHEN ISNULL(lastName) = 1 THEN E.LastName ELSE lastName END
		,E.LocalSalary = CASE WHEN incountry = 'USA' THEN dollarSalary WHEN incountry = 'Scotland' THEN dollarSalary * 0.8 ELSE dollarSalary * 0.95 END
		,E.DollarSalary = CASE WHEN dollarSalary = 0 THEN E.DollarSalary ELSE dollarSalary END
	WHERE E.idEmployee = EmployeeID;
    
END