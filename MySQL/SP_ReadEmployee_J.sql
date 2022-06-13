CREATE PROCEDURE SP_ReadEmployee_J (
IN EmployeeID INT
)
BEGIN
	
	SELECT E.Country 
		,E.FirstName
        ,E.LastName
        ,E.LocalSalary
        ,E.DollarSalary
        ,J.JobName
    FROM employeedata.Employee AS E
    INNER JOIN employeedata.JobType AS J ON E.idJobType = J.idJobType
    WHERE idEmployee = EmployeeID;
    
END
