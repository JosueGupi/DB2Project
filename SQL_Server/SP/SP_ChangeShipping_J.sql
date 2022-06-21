USE DB_USA;  
GO  
ALTER PROCEDURE SP_ChangeShipping_J   
    @country varchar(32),   
    @price INT
    
AS   
BEGIN
    SET NOCOUNT ON; 
    BEGIN TRY
        --update info of shippinf in the selected country
        INSERT INTO DB_USA.dbo.Shipping
        (priceXKM)SELECT  @price
        WHERE @country = 'USA'

        INSERT INTO DB_Scotland.dbo.Shipping
        (priceXKM)SELECT  @price
        WHERE @country = 'Scotland'

        INSERT INTO DB_Ireland.dbo.Shipping
        (priceXKM)SELECT  @price
        WHERE @country = 'Ireland'
    END TRY

    BEGIN CATCH
        INSERT INTO DB_USA.dbo.ERROR(
            idError
            ,[DESCRIPTION]
        )VALUES(
            1
            ,ERROR_MESSAGE()
        )
    END CATCH
    SET NOCOUNT OFF;
END 

EXEC SP_ChangeShipping_J 'Scotland',50
SELECT * FROM DB_USA.dbo.Shipping
SELECT * FROM DB_Scotland.dbo.Shipping
SELECT * FROM DB_Ireland.dbo.Shipping

SELECT * FROM dbo.ERROR
