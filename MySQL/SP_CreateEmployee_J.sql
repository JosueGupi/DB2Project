CREATE PROCEDURE SP_CreateEmployee (
IN incountry VARCHAR(32), IN typejob INT, IN firstName VARCHAR(32), IN lastName VARCHAR(32), IN dollarSalary INT
)
BEGIN
	
	INSERT INTO employeedata.Employee(
		idJobType
		,Country
		,FirstName
		,LastName
		,LocalSalary
		,DollarSalary
	)VALUES(
		typejob
		,incountry
        ,firstname
        ,lastname
        ,CASE WHEN incountry = 'USA' THEN dollarSalary WHEN incountry = 'Scotland' THEN dollarSalary * 0.8 ELSE dollarSalary * 0.95 END
        ,dollarSalary
	);
    
END
