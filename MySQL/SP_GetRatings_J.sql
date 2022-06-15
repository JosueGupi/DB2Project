DELIMITER $$
CREATE DEFINER=`root`@`%` PROCEDURE `SP_GetRatings_J`()
BEGIN
	SELECT idEmployeeRating
    ,Rating
    ,Commentary
    FROM employeedata.EmployeeRating;
END$$
DELIMITER ;
