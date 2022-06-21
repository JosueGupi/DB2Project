USE DB_USA;  
GO  
ALTER PROCEDURE SP_DeleteProduct_J   
    @country varchar(32),   
    @name VARCHAR(32)
AS   
BEGIN
DECLARE @whiskyID INT
    SET NOCOUNT ON; 
    BEGIN TRY   
    --select country to modify the product
        IF (@country = 'USA')
        BEGIN
            SELECT @whiskyID = idWhisky FROM DB_USA.dbo.Whisky WHERE [name] = @name;

            
            --delete it in order that fk do not ghet affected
            DELETE FROM DB_USA.dbo.InventoryA WHERE idWhisky = @whiskyID;
            DELETE FROM DB_USA.dbo.InventoryB WHERE idWhisky = @whiskyID;
            DELETE FROM DB_USA.dbo.InventoryC WHERE idWhisky = @whiskyID;
            DELETE FROM DB_USA.dbo.Review WHERE idWhisky = @whiskyID;
            DELETE FROM DB_USA.dbo.WhiskyXSale WHERE idWhisky = @whiskyID;
            DELETE FROM DB_USA.dbo.Whisky WHERE idWhisky = @whiskyID;

        END


        ELSE IF (@country = 'Ireland')
        BEGIN
            SELECT @whiskyID = idWhisky FROM DB_Ireland.dbo.Whisky WHERE [name] = @name;

            
            DELETE FROM DB_Ireland.dbo.InventoryA WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Ireland.dbo.InventoryB WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Ireland.dbo.InventoryC WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Ireland.dbo.Review WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Ireland.dbo.WhiskyXSale WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Ireland.dbo.Whisky WHERE idWhisky = @whiskyID;
            
            
        END


        ELSE IF (@country = 'Scotland')
        BEGIN
            SELECT @whiskyID = idWhisky FROM DB_Scotland.dbo.Whisky WHERE [name] = @name;

            
            DELETE FROM DB_Scotland.dbo.InventoryA WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Scotland.dbo.InventoryB WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Scotland.dbo.InventoryC WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Scotland.dbo.Review WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Scotland.dbo.WhiskyXSale WHERE idWhisky = @whiskyID;
            DELETE FROM DB_Scotland.dbo.Whisky WHERE idWhisky = @whiskyID;
            
        END       


        
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

EXEC SP_DeleteProduct_J 'USA','LuisDrink'