CREATE PROCEDURE SP_DeleteEmployee_J (
IN EmployeeID INT
)
BEGIN
	
	DELETE FROM employeedata.Employees
    WHERE idEmployee = EmployeeID;
    
END

