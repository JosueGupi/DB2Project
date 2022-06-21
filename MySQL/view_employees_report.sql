CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`%` 
    SQL SECURITY DEFINER
VIEW `employeedata`.`view_employees_report` AS
    SELECT 
        `E`.`FirstName` AS `FirstName`,
        `E`.`LastName` AS `LastName`,
        `J`.`JobName` AS `JobName`,
        AVG(`R`.`Rating`) AS `AVG_Rating`,
        `E`.`DollarSalary` AS `DollarSalary`
    FROM
        ((`employeedata`.`employee` `E`
        JOIN `employeedata`.`jobtype` `J` ON ((`E`.`idJobType` = `J`.`idJobType`)))
        JOIN `employeedata`.`employeerating` `R` ON ((`E`.`idEmployee` = `R`.`idEmployee`)))
    GROUP BY `E`.`FirstName` , `E`.`LastName` , `J`.`JobName` , `E`.`DollarSalary`