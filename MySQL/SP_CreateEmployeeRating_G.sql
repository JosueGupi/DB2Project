use employeedata
CREATE DEFINER=`root`@`%` 
delimiter $$    -- create evaluation employee
create procedure `SP_CreateEmployeeRating_G`(in saleID int, in users varchar(32), in comments varchar(512), 
											 in ratingDelivery int, in ratingPreparation int)
begin
    
    set @idPreparationE = 0; -- get id employees 
    set @idDeliveryE = 0;
    SET @idPreparationE = (SELECT Preparation.idEmployee FROM employeedata.Delivery 
					       INNER JOIN employeedata.Preparation 
								ON Delivery.idPreparation = Preparation.idPreparation 
						   WHERE idSale = 29);
                           
    SET @idDeliveryE = (SELECT idEmployee FROM employeedata.Delivery WHERE idSale = 29);
    
	insert into employeedata.EmployeeRating
		(
		idEmployee,
		Rating,
		Commentary,
		Username)
	values
		(
		@idPreparationE,
		ratingPreparation,
		comments,
		users);
    
    insert into employeedata.EmployeeRating
		(
		idEmployee,
		Rating,
		Commentary,
		Username)
	values
		(
		@idDeliveryE,
		ratingDelivery,
		comments,
		users);
    
end $$
delimiter ;

SELECT * FROM employeedata.Delivery;
SELECT * FROM employeedata.Preparation;
