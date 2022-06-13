USE DB_USA;  
GO  
ALTER PROCEDURE SP_ReadProduct_J   
    @country varchar(32),   
    @name VARCHAR(32)
AS   
BEGIN
DECLARE @whiskyID INT
    SET NOCOUNT ON; 
    BEGIN TRY   
        IF (@country = 'USA')
        BEGIN
            SELECT 
                W.aged
                ,WT.name AS Type
                , S.name AS Supplier
                , SB.name AS Subscription
            FROM DB_USA.dbo.Whisky W 
            INNER JOIN DB_USA.dbo.WhiskyType WT ON W.idWhiskyType = WT.idWhiskyType
            INNER JOIN DB_USA.dbo.Supplier S ON W.idSupplier = S.idSupplier
            INNER JOIN DB_USA.dbo.Subscription SB ON SB.idSubscription = W.idSubscription
            WHERE W.name = @name;

        END


        ELSE IF (@country = 'Ireland')
        BEGIN
            SELECT 
                W.aged
                ,WT.name AS Type
                , S.name AS Supplier
                , SB.name AS Subscription
            FROM DB_Ireland.dbo.Whisky W 
            INNER JOIN DB_Ireland.dbo.WhiskyType WT ON W.idWhiskyType = WT.idWhiskyType
            INNER JOIN DB_Ireland.dbo.Supplier S ON W.idSupplier = S.idSupplier
            INNER JOIN DB_Ireland.dbo.Subscription SB ON SB.idSubscription = W.idSubscription
            WHERE W.name = @name;
            
        END


        ELSE IF (@country = 'Scotland')
        BEGIN
            
            SELECT 
                W.aged
                ,WT.name AS Type
                , S.name AS Supplier
                , SB.name AS Subscription
            FROM DB_Scotland.dbo.Whisky W 
            INNER JOIN DB_Scotland.dbo.WhiskyType WT ON W.idWhiskyType = WT.idWhiskyType
            INNER JOIN DB_Scotland.dbo.Supplier S ON W.idSupplier = S.idSupplier
            INNER JOIN DB_Scotland.dbo.Subscription SB ON SB.idSubscription = W.idSubscription
            WHERE W.name = @name
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

EXEC SP_ReadProduct_J 'USA', 'Glenfiddich'

SELECT 
        *
            FROM DB_USA.dbo.Whisky W 
            INNER JOIN DB_USA.dbo.WhiskyType WT ON W.idWhiskyType = WT.idWhiskyType
            INNER JOIN DB_USA.dbo.Supplier S ON W.idSupplier = S.idSupplier
            INNER JOIN DB_USA.dbo.Subscription SB ON SB.idSubscription = W.idSubscription