USE DB_USA;  
GO  
ALTER PROCEDURE SP_CreateProduct_J   
    @country varchar(32),   
    @storeNumber varchar(32),
    @qty INT,
    @supplier VARCHAR(32),
    @sub INT,
    @name VARCHAR(32),
    @aged INT,
    @whiskytype VARCHAR(32),
    @file VARBINARY(MAX),
    @price INT
AS   
BEGIN
DECLARE @supplierID INT
    , @whiskyTypeID INT
    ,@whiskyID INT
    ,@typeID INT
    SET NOCOUNT ON; 
   -- BEGIN TRY   
        IF (@country = 'USA')
        BEGIN
            SELECT @supplierID = idSupplier FROM DB_USA.dbo.Supplier WHERE [name] = @supplier;
            SELECT @whiskyTypeID = idWhiskyType FROM DB_USA.dbo.WhiskyType WHERE [name] = @whiskytype;
            SELECT @whiskyTypeID

            IF(@supplierID IS NULL)
            BEGIN
                INSERT INTO DB_USA.dbo.Supplier([name])VALUES(@supplier);
                SELECT @supplierID = idSupplier FROM DB_USA.dbo.Supplier WHERE [name] = @supplier;
            END

            IF(@whiskyTypeID IS NULL)
            BEGIN
                
                INSERT INTO DB_USA.dbo.WhiskyType([name])VALUES(@whiskytype);
                SELECT @whiskyTypeID = idWhiskyType FROM DB_USA.dbo.WhiskyType WHERE [name] = @whiskytype;
            END
           
            INSERT INTO DB_USA.dbo.Whisky (idWhiskyType,idSupplier,idSubscription,[name],aged,[image])
			SELECT @whiskyTypeID,@supplierID,@sub,@name,@aged,@file WHERE NOT EXISTS (SELECT idWhisky FROM  DB_USA.dbo.Whisky WHERE [name] = @name);
		
            SELECT @whiskyID = idWhisky FROM  DB_USA.dbo.Whisky WHERE [name] = @name;

            INSERT INTO DB_USA.dbo.InventoryA(idWhisky, quantity,price)
            SELECT @whiskyID,@qty,@price WHERE @storeNumber = 'Store A';

            INSERT INTO DB_USA.dbo.InventoryB(idWhisky, quantity,price)
            SELECT @whiskyID,@qty,@price WHERE @storeNumber = 'Store B';

            INSERT INTO DB_USA.dbo.InventoryC(idWhisky, quantity,price)
            SELECT @whiskyID,@qty,@price WHERE @storeNumber = 'Store C';
        END


        ELSE IF (@country = 'Ireland')
        BEGIN
            SELECT @supplierID = idSupplier FROM DB_Ireland.dbo.Supplier WHERE [name] = @supplier;
            SELECT @whiskyID = idWhiskyType FROM DB_Ireland.dbo.WhiskyType WHERE [name] = @whiskytype;
            IF(@supplierID IS NULL)
            BEGIN
                INSERT INTO DB_Ireland.dbo.Supplier([name])VALUES(@supplier);
                SELECT @supplierID = idSupplier FROM DB_Ireland.dbo.Supplier WHERE [name] = @supplier;
            END

            IF(@whiskyTypeID IS NULL)
            BEGIN
                INSERT INTO DB_Ireland.dbo.WhiskyType([name])VALUES(@whiskytype);
                SELECT @whiskyTypeID = idWhiskyType FROM DB_Ireland.dbo.WhiskyType WHERE [name] = @whiskytype;
            END
            
            INSERT INTO DB_Ireland.dbo.Whisky (idWhiskyType,idSupplier,idSubscription,[name],aged,[image])
            SELECT @whiskyTypeID,@supplierID,@sub,@name,@aged,@file WHERE NOT EXISTS (SELECT idWhisky FROM  DB_Ireland.dbo.Whisky WHERE [name] = @name);


            SELECT @whiskyID = idWhisky FROM  DB_Ireland.dbo.Whisky WHERE [name] = @name;

            INSERT INTO DB_Ireland.dbo.InventoryA(idWhisky, quantity,price)
            SELECT @whiskyID,@qty,@price WHERE @storeNumber = 'Store A';

            INSERT INTO DB_Ireland.dbo.InventoryB(idWhisky, quantity,price)
            SELECT @whiskyID,@qty,@price WHERE @storeNumber = 'Store B';

            INSERT INTO DB_Ireland.dbo.InventoryC(idWhisky, quantity,price)
            SELECT @whiskyID,@qty,@price WHERE @storeNumber = 'Store C';
        END


        ELSE IF (@country = 'Scotland')
        BEGIN
            SELECT @supplierID = idSupplier FROM DB_Scotland.dbo.Supplier WHERE [name] = @supplier;
            SELECT @whiskyID = idWhiskyType FROM DB_Scotland.dbo.WhiskyType WHERE [name] = @whiskytype;
            IF(@supplierID IS NULL)
            BEGIN
                INSERT INTO DB_Scotland.dbo.Supplier([name])VALUES(@whiskytype);
                SELECT @supplierID = idSupplier FROM DB_Scotland.dbo.Supplier WHERE [name] = @supplier;
            END

            IF(@whiskyTypeID IS NULL)
            BEGIN
                INSERT INTO DB_Scotland.dbo.WhiskyType([name])VALUES(@supplier);
                SELECT @whiskyTypeID = idWhiskyType FROM DB_Scotland.dbo.WhiskyType WHERE [name] = @whiskytype;
            END
            
            INSERT INTO DB_Scotland.dbo.Whisky (idWhiskyType,idSupplier,idSubscription,[name],aged,[image])
            SELECT @whiskyTypeID,@supplierID,@sub,@name,@aged,@file WHERE NOT EXISTS (SELECT idWhisky FROM  DB_Scotland.dbo.Whisky WHERE [name] = @name);


            SELECT @whiskyID = idWhisky FROM  DB_Scotland.dbo.Whisky WHERE [name] = @name;

            INSERT INTO DB_Scotland.dbo.InventoryA(idWhisky, quantity,price)
            SELECT @whiskyID,@qty,@price WHERE @storeNumber = 'Store A';

            INSERT INTO DB_Scotland.dbo.InventoryB(idWhisky, quantity,price)
            SELECT @whiskyID,@qty,@price WHERE @storeNumber = 'Store B';

            INSERT INTO DB_Scotland.dbo.InventoryC(idWhisky, quantity,price)
            SELECT @whiskyID,@qty,@price WHERE @storeNumber = 'Store C';
        END       

    SELECT @name as product,email FROM DB_USA.dbo.Users WHERE administrator = 0
    UNION
    SELECT @name as product,email FROM DB_Ireland.dbo.Users WHERE administrator = 0
    UNION
    SELECT @name as product,email FROM DB_Scotland.dbo.Users WHERE administrator = 0

    
        
   /* END TRY

    BEGIN CATCH
        PRINT 'ERROR'
    END CATCH
    SET NOCOUNT OFF;*/
END 
/*
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

 EXEC SP_CreateProduct_J 'USA','Store B',20,'LuisSA',1,'LuisDrink',2,'New','x',20
 DELETE FROM DB_USA.dbo.WhiskyType WHERE idWhiskyType > 6

SELECT * FROM DB_Scotland.dbo.Users
UPDATE DB_Scotland.dbo.Users
SET email = 'josuegupi@gmail.com'
WHERE idUser = 3

INSERT INTO DB_USA.dbo.Users VALUES(1,0,'Josue','Gutierrez','Gupi','123','josuegupi64@gmail.com')*/