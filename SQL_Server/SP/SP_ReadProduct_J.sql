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
    --select the country to get info
        IF (@country = 'USA')
        BEGIN
        --use json to get base 64 image
            SELECT [aged],[Type],[Supplier],[Subscription],[image]
        FROM openjson(
        (
            SELECT 
                W.aged
                ,WT.name AS Type
                , S.name AS Supplier
                , SB.name AS Subscription
                , W.image AS [image]
            FROM DB_USA.dbo.Whisky W 
            INNER JOIN DB_USA.dbo.WhiskyType WT ON W.idWhiskyType = WT.idWhiskyType
            INNER JOIN DB_USA.dbo.Supplier S ON W.idSupplier = S.idSupplier
            INNER JOIN DB_USA.dbo.Subscription SB ON SB.idSubscription = W.idSubscription
            WHERE W.name = @name
            for json path
        )
         ) with([aged] int,[Type] varchar(16),[Supplier] varchar(16),[Subscription] varchar(16), [image] varchar(max))

        END


        ELSE IF (@country = 'Ireland')
        BEGIN
            
             SELECT [aged],[Type],[Supplier],[Subscription],[image]
        FROM openjson(
        (
            SELECT 
                W.aged
                ,WT.name AS Type
                , S.name AS Supplier
                , SB.name AS Subscription
                , W.image AS [image]
            FROM DB_Ireland.dbo.Whisky W 
            INNER JOIN DB_Ireland.dbo.WhiskyType WT ON W.idWhiskyType = WT.idWhiskyType
            INNER JOIN DB_Ireland.dbo.Supplier S ON W.idSupplier = S.idSupplier
            INNER JOIN DB_Ireland.dbo.Subscription SB ON SB.idSubscription = W.idSubscription
            WHERE W.name = @name
            for json path
        )
         ) with([aged] int,[Type] varchar(64),[Supplier] varchar(64),[Subscription] varchar(64), [image] varchar(max))
        END


        ELSE IF (@country = 'Scotland')
        BEGIN
            
                  
        SELECT [aged],[Type],[Supplier],[Subscription],[image]
        FROM openjson(
        (
            SELECT 
                W.aged
                ,WT.name AS Type
                , S.name AS Supplier
                , SB.name AS Subscription
                , W.image AS [image]
            FROM DB_Scotland.dbo.Whisky W 
            INNER JOIN DB_Scotland.dbo.WhiskyType WT ON W.idWhiskyType = WT.idWhiskyType
            INNER JOIN DB_Scotland.dbo.Supplier S ON W.idSupplier = S.idSupplier
            INNER JOIN DB_Scotland.dbo.Subscription SB ON SB.idSubscription = W.idSubscription
            WHERE W.name = @name
            for json path
        )
         ) with([aged] int,[Type] varchar(64),[Supplier] varchar(64),[Subscription] varchar(64), [image] varchar(max))
        END
        
    END TRY

    BEGIN CATCH
        PRINT 'ERROR'
    END CATCH
    SET NOCOUNT OFF;
END 
/*
EXEC SP_ReadProduct_J 'USA', 'Glenfiddich'

SELECT 
        *
            FROM DB_USA.dbo.Whisky W 
            INNER JOIN DB_USA.dbo.WhiskyType WT ON W.idWhiskyType = WT.idWhiskyType
            INNER JOIN DB_USA.dbo.Supplier S ON W.idSupplier = S.idSupplier
            INNER JOIN DB_USA.dbo.Subscription SB ON SB.idSubscription = W.idSubscription

			*/