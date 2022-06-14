USE DB_USA;  
GO  
ALTER PROCEDURE SP_UpdateProduct_J   
    @country varchar(32),   
    @storeNumber varchar(32),
    @qty INT,
    @supplier VARCHAR(32),
    @sub INT,
    @name VARCHAR(32),
    @aged INT,
    @whiskytype VARCHAR(32),
    @file VARCHAR(MAX),
    @price INT,
    @whiskyID INT
AS   
BEGIN
DECLARE @supplierID INT
    , @whiskyTypeID INT
    
    SET NOCOUNT ON; 
    BEGIN TRY   
        IF (@country = 'USA')
        BEGIN
            SELECT @supplierID = idSupplier FROM DB_USA.dbo.Supplier WHERE [name] = @supplier;
            SELECT @whiskyTypeID = idWhiskyType FROM DB_USA.dbo.WhiskyType WHERE [name] = @whiskytype;
            

            IF(@supplierID IS NULL AND @supplier IS NOT NULL)
            BEGIN
                INSERT INTO DB_USA.dbo.Supplier([name])VALUES(@supplier);
                SELECT @supplierID = idSupplier FROM DB_USA.dbo.Supplier WHERE [name] = @supplier;
            END

            IF(@whiskyTypeID IS NULL AND @whiskytype IS NOT NULL)
            BEGIN
                
                INSERT INTO DB_USA.dbo.WhiskyType([name])VALUES(@whiskytype);
                SELECT @whiskyTypeID = idWhiskyType FROM DB_USA.dbo.WhiskyType WHERE [name] = @whiskytype;
            END
            
            UPDATE DB_USA.dbo.Whisky
            SET idWhiskyType = ISNULL(@whiskyTypeID,idWhiskyType)
                ,idSupplier = ISNULL(@supplierID,idSupplier)
                ,idSubscription = CASE WHEN @sub = 0 THEN idSubscription ELSE @sub END
                ,[name] = ISNULL(@name,[name])
                ,aged = CASE WHEN @aged = 0 THEN aged ELSE @aged END
            WHERE idWhisky = @whiskyID;

            UPDATE DB_USA.dbo.InventoryA
            SET quantity = CASE WHEN @qty = 0 THEN quantity ELSE @qty END
                ,price = CASE WHEN @price = 0 THEN price ELSE @price END
            WHERE @storeNumber = 'Store A'
            AND idWhisky = @whiskyID;

            UPDATE DB_USA.dbo.InventoryB
            SET quantity = CASE WHEN @qty = 0 THEN quantity ELSE @qty END
                ,price = CASE WHEN @price = 0 THEN price ELSE @price END
            WHERE @storeNumber = 'Store B'
            AND idWhisky = @whiskyID;

            UPDATE DB_USA.dbo.InventoryC
            SET quantity = CASE WHEN @qty = 0 THEN quantity ELSE @qty END
                ,price = CASE WHEN @price = 0 THEN price ELSE @price END
            WHERE @storeNumber = 'Store C'
            AND idWhisky = @whiskyID;

            
        END


        ELSE IF (@country = 'Ireland')
        BEGIN
            SELECT @supplierID = idSupplier FROM DB_Ireland.dbo.Supplier WHERE [name] = @supplier;
            SELECT @whiskyTypeID = idWhiskyType FROM DB_Ireland.dbo.WhiskyType WHERE [name] = @whiskytype;
            

            IF(@supplierID IS NULL AND @supplier IS NOT NULL)
            BEGIN
                INSERT INTO DB_Ireland.dbo.Supplier([name])VALUES(@supplier);
                SELECT @supplierID = idSupplier FROM DB_Ireland.dbo.Supplier WHERE [name] = @supplier;
            END

            IF(@whiskyTypeID IS NULL AND @whiskytype IS NOT NULL)
            BEGIN
                
                INSERT INTO DB_Ireland.dbo.WhiskyType([name])VALUES(@whiskytype);
                SELECT @whiskyTypeID = idWhiskyType FROM DB_Ireland.dbo.WhiskyType WHERE [name] = @whiskytype;
            END
            
            UPDATE DB_Ireland.dbo.Whisky
            SET idWhiskyType = ISNULL(@whiskyTypeID,idWhiskyType)
                ,idSupplier = ISNULL(@supplierID,idSupplier)
                ,idSubscription = CASE WHEN @sub = 0 THEN idSubscription ELSE @sub END
                ,[name] = ISNULL(@name,[name])
                ,aged = CASE WHEN @aged = 0 THEN aged ELSE @aged END
            WHERE idWhisky = @whiskyID;

            UPDATE DB_Ireland.dbo.InventoryA
            SET quantity = CASE WHEN @qty = 0 THEN quantity ELSE @qty END
                ,price = CASE WHEN @price = 0 THEN price ELSE @price END
            WHERE @storeNumber = 'Store A'
            AND idWhisky = @whiskyID;

            UPDATE DB_Ireland.dbo.InventoryB
            SET quantity = CASE WHEN @qty = 0 THEN quantity ELSE @qty END
                ,price = CASE WHEN @price = 0 THEN price ELSE @price END
            WHERE @storeNumber = 'Store B'
            AND idWhisky = @whiskyID;

            UPDATE DB_Ireland.dbo.InventoryC
            SET quantity = CASE WHEN @qty = 0 THEN quantity ELSE @qty END
                ,price = CASE WHEN @price = 0 THEN price ELSE @price END
            WHERE @storeNumber = 'Store C'
            AND idWhisky = @whiskyID;
        END


        ELSE IF (@country = 'Scotland')
        BEGIN
            SELECT @supplierID = idSupplier FROM DB_Scotland.dbo.Supplier WHERE [name] = @supplier;
            SELECT @whiskyTypeID = idWhiskyType FROM DB_Scotland.dbo.WhiskyType WHERE [name] = @whiskytype;
            

            IF(@supplierID IS NULL AND @supplier IS NOT NULL)
            BEGIN
                INSERT INTO DB_Scotland.dbo.Supplier([name])VALUES(@supplier);
                SELECT @supplierID = idSupplier FROM DB_Scotland.dbo.Supplier WHERE [name] = @supplier;
            END

            IF(@whiskyTypeID IS NULL AND @whiskytype IS NOT NULL)
            BEGIN
                
                INSERT INTO DB_Scotland.dbo.WhiskyType([name])VALUES(@whiskytype);
                SELECT @whiskyTypeID = idWhiskyType FROM DB_Scotland.dbo.WhiskyType WHERE [name] = @whiskytype;
            END
            
            UPDATE DB_Scotland.dbo.Whisky
            SET idWhiskyType = ISNULL(@whiskyTypeID,idWhiskyType)
                ,idSupplier = ISNULL(@supplierID,idSupplier)
                ,idSubscription = CASE WHEN @sub = 0 THEN idSubscription ELSE @sub END
                ,[name] = ISNULL(@name,[name])
                ,aged = CASE WHEN @aged = 0 THEN aged ELSE @aged END
            WHERE idWhisky = @whiskyID;

            UPDATE DB_Scotland.dbo.InventoryA
            SET quantity = CASE WHEN @qty = 0 THEN quantity ELSE @qty END
                ,price = CASE WHEN @price = 0 THEN price ELSE @price END
            WHERE @storeNumber = 'Store A'
            AND idWhisky = @whiskyID;

            UPDATE DB_Scotland.dbo.InventoryB
            SET quantity = CASE WHEN @qty = 0 THEN quantity ELSE @qty END
                ,price = CASE WHEN @price = 0 THEN price ELSE @price END
            WHERE @storeNumber = 'Store B'
            AND idWhisky = @whiskyID;

            UPDATE DB_Scotland.dbo.InventoryC
            SET quantity = CASE WHEN @qty = 0 THEN quantity ELSE @qty END
                ,price = CASE WHEN @price = 0 THEN price ELSE @price END
            WHERE @storeNumber = 'Store C'
            AND idWhisky = @whiskyID;
            
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

SELECT * FROM DB_USA.dbo.InventoryA
SELECT * FROM DB_USA.dbo.InventoryB
SELECT * FROM DB_USA.dbo.InventoryC
SELECT * FROM DB_USA.dbo.Supplier
SELECT * FROM DB_USA.dbo.WhiskyType
SELECT * FROM DB_USA.dbo.Whisky

SELECT * FROM DB_Scotland.dbo.InventoryA
SELECT * FROM DB_Scotland.dbo.InventoryB
SELECT * FROM DB_Scotland.dbo.InventoryC
SELECT * FROM DB_Scotland.dbo.Supplier
SELECT * FROM DB_Scotland.dbo.WhiskyType
SELECT * FROM DB_Scotland.dbo.Whisky

SELECT * FROM DB_Ireland.dbo.InventoryA
SELECT * FROM DB_Ireland.dbo.InventoryB
SELECT * FROM DB_Ireland.dbo.InventoryC
SELECT * FROM DB_Ireland.dbo.Supplier
SELECT * FROM DB_Ireland.dbo.WhiskyType
SELECT * FROM DB_Ireland.dbo.Whisky

SELECT * FROM DB_USA.dbo.ERROR

EXEC SP_UpdateProduct_J 'USA','Store A',0,'LuisSA',4,NULL,1,'New','asd',15,1