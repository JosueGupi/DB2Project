USE DB_USA

GO
ALTER PROCEDURE SP_SelectCatalog_G @idUser INT, @country VARCHAR(16)
AS
DECLARE @idSubscription INT 
BEGIN TRY
	IF @country = 'USA'
	BEGIN
		SELECT @idSubscription = idSubscription FROM DB_USA.dbo.Users WHERE idUser = @idUser
		
		SELECT whisky, aged, type, supplier, subs, price, image 
		FROM OPENJSON( -- open json for image format
		(  -- select catalog according to user subscription
			SELECT Whisky.name AS whisky, aged, WhiskyType.name AS type, Supplier.name AS supplier, 
				   Subscription.name AS subs, InventoryA.price, Whisky.image 
			FROM DB_USA.dbo.Whisky
			INNER JOIN DB_USA.dbo.WhiskyType 
				ON Whisky.idWhiskyType = WhiskyType.idWhiskyType
			INNER JOIN DB_USA.dbo.Supplier
				ON Whisky.idSupplier = Supplier.idSupplier
			INNER JOIN DB_USA.dbo.Subscription
				ON Whisky.idSubscription = Subscription.idSubscription
			INNER JOIN DB_USA.dbo.InventoryA
				ON Whisky.idWhisky = InventoryA.idWhisky
			WHERE Whisky.idSubscription = 1
			OR Subscription.name = 'No tier'
			FOR JSON PATH )
		
		) WITH (whisky VARCHAR(16), aged INT, type VARCHAR(16), supplier VARCHAR(16), subs VARCHAR(16), price INT, image  VARCHAR(MAX))
		END

	IF @country = 'Scotland'
	BEGIN
		SELECT @idSubscription = idSubscription FROM DB_Scotland.dbo.Users WHERE idUser = @idUser 
		
		SELECT whisky, aged, type, supplier, subs, price, image 
		FROM OPENJSON( -- open json for image format
		(  -- select catalog according to user subscription
			SELECT Whisky.name AS whisky, aged, WhiskyType.name AS type, Supplier.name AS supplier, 
				   Subscription.name AS subs, InventoryA.price, Whisky.image 
			FROM DB_Scotland.dbo.Whisky
			INNER JOIN DB_Scotland.dbo.WhiskyType 
				ON Whisky.idWhiskyType = WhiskyType.idWhiskyType
			INNER JOIN DB_Scotland.dbo.Supplier
				ON Whisky.idSupplier = Supplier.idSupplier
			INNER JOIN DB_Scotland.dbo.Subscription
				ON Whisky.idSubscription = Subscription.idSubscription
			INNER JOIN DB_Scotland.dbo.InventoryA
				ON Whisky.idWhisky = InventoryA.idWhisky
			WHERE Whisky.idSubscription = 1
			OR Subscription.name = 'No tier'
			FOR JSON PATH )
		
		) WITH (whisky VARCHAR(16), aged INT, type VARCHAR(16), supplier VARCHAR(16), subs VARCHAR(16), price INT, image  VARCHAR(MAX))
		END 
	IF @country = 'Ireland'
	BEGIN
		SELECT @idSubscription = idSubscription FROM DB_Ireland.dbo.Users WHERE idUser = @idUser
		
		SELECT whisky, aged, type, supplier, subs, price, image 
		FROM OPENJSON( -- open json for image format
		(  -- select catalog according to user subscription
			SELECT Whisky.name AS whisky, aged, WhiskyType.name AS type, Supplier.name AS supplier, 
				   Subscription.name AS subs, InventoryA.price, Whisky.image 
			FROM DB_Ireland.dbo.Whisky
			INNER JOIN DB_Ireland.dbo.WhiskyType 
				ON Whisky.idWhiskyType = WhiskyType.idWhiskyType
			INNER JOIN DB_Ireland.dbo.Supplier
				ON Whisky.idSupplier = Supplier.idSupplier
			INNER JOIN DB_Ireland.dbo.Subscription
				ON Whisky.idSubscription = Subscription.idSubscription
			INNER JOIN DB_Ireland.dbo.InventoryA
				ON Whisky.idWhisky = InventoryA.idWhisky
			WHERE Whisky.idSubscription = 1
			OR Subscription.name = 'No tier'
			FOR JSON PATH )
		
		) WITH (whisky VARCHAR(16), aged INT, type VARCHAR(16), supplier VARCHAR(16), subs VARCHAR(16), price INT, image  VARCHAR(MAX))
		END
END TRY
BEGIN CATCH
    PRINT 'ERROR'
END CATCH
