USE DB_USA;  
GO  
CREATE PROCEDURE SP_ChangeSub_J   
    @country varchar(32),   
    @level varchar(32),
    @price INT
    
AS   
BEGIN
    SET NOCOUNT ON; 
    BEGIN TRY
    --update price in the selected country
        UPDATE DB_USA.dbo.Subscription
        SET price = @price
        WHERE @country = 'USA'
        AND [name] = @level;

        UPDATE DB_Scotland.dbo.Subscription
        SET price = @price
        WHERE @country = 'Scotland'
        AND [name] = @level;

        UPDATE DB_Ireland.dbo.Subscription
        SET price = @price
        WHERE @country = 'Ireland'
        AND [name] = @level;


        
    END TRY

    BEGIN CATCH
        SELECT 'ERROR'
    END CATCH
    SET NOCOUNT OFF;
END 

EXEC SP_ChangeSub_J 'Scotland','Short Glass',50
SELECT * FROM DB_USA.dbo.Subscription
SELECT * FROM DB_Scotland.dbo.Subscription
SELECT * FROM DB_Ireland.dbo.Subscription

SELECT * FROM dbo.ERROR
