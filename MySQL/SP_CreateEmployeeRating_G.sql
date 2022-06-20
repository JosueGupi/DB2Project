use employeedata
CREATE DEFINER=`root`@`%` 
delimiter $$
create procedure `SP_CreateEmployeeRating_G`(in employeeID int, in users varchar(32), in comments varchar(512), in ratingEmployee int)
begin
	insert into employeedata.EmployeeRating
	(
	idEmployee,
	Rating,
	Commentary,
	Username)
	values
	(
	employeeID,
	ratingEmployee,
	comments,
	users);
end $$
delimiter ;
