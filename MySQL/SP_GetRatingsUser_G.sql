DELIMITER $$
CREATE DEFINER=`root`@`%` PROCEDURE `SP_GetRatingsUser_G`(in  users varchar(32))
BEGIN
	SELECT idEmployeeRating
    ,Rating
    ,Commentary
    FROM employeedata.EmployeeRating
    WHERE Username = users;
END$$
DELIMITER ;


SELECT * FROM employeedata.EmployeeRating
SELECT * FROM employeedata.Employee

CALL SP_GetRatings_J ()