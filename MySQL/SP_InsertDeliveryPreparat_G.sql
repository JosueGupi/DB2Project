USE employeedata
DELIMITER $$
CREATE PROCEDURE SP_InsertDeliveryPreparat_G (
IN saleID INT, IN country VARCHAR(16)
)
BEGIN
    
	INSERT INTO employeedata.Preparation(
		idEmployee
        ,DateC
		,Country
	)VALUES(
		(SELECT idEmployee FROM employeedata.Employee ORDER BY RAND() LIMIT 1) -- random id employee
		,(SELECT CURDATE())
        ,country
	);
    
    INSERT INTO employeedata.Delivery(
		idEmployee
        ,idSale
        ,idPreparation
		,Country
	)VALUES(
		(SELECT idEmployee FROM employeedata.Employee ORDER BY RAND() LIMIT 1) -- random id employee
		,saleID
        ,(SELECT LAST_INSERT_ID()) -- id preparation
        ,country
	);
    
END$$
DELIMITER ;

SELECT * FROM employeedata.Delivery;
SELECT * FROM employeedata.Preparation;