USE DB_USA

GO
ALTER PROCEDURE SP_SelectCatalog_G @idUser INT, @country VARCHAR(16)
AS
DECLARE @idSubscription INT 
BEGIN
	IF @country = 'USA'
	BEGIN
		SELECT @idSubscription = idSubscription FROM DB_USA.dbo.Users WHERE idUser = @idUser
		PRINT @idSubscription
		SELECT Whisky.name, aged, WhiskyType.name, Supplier.name, Subscription.name, InventoryA.price
		FROM DB_USA.dbo.Whisky
		INNER JOIN DB_USA.dbo.WhiskyType 
			ON Whisky.idWhiskyType = WhiskyType.idWhiskyType
		INNER JOIN DB_USA.dbo.Supplier
			ON Whisky.idSupplier = Supplier.idSupplier
		INNER JOIN DB_USA.dbo.Subscription
			ON Whisky.idSubscription = Subscription.idSubscription
		INNER JOIN DB_USA.dbo.InventoryA
			ON Whisky.idWhisky = InventoryA.idWhisky
		WHERE Whisky.idSubscription = @idSubscription
		OR Subscription.name = 'No tier'
	END 
	IF @country = 'Scotland'
	BEGIN
		SELECT @idSubscription = idSubscription FROM DB_Scotland.dbo.Users WHERE idUser = @idUser 
		PRINT @idSubscription
		SELECT Whisky.name, aged, WhiskyType.name, Supplier.name, Subscription.name, InventoryA.price
		FROM DB_Scotland.dbo.Whisky
		INNER JOIN DB_Scotland.dbo.WhiskyType 
			ON Whisky.idWhiskyType = WhiskyType.idWhiskyType
		INNER JOIN DB_Scotland.dbo.Supplier
			ON DB_Scotland.dbo.Whisky.idSupplier = Supplier.idSupplier
		INNER JOIN DB_Scotland.dbo.Subscription
			ON Whisky.idSubscription = Subscription.idSubscription
		INNER JOIN DB_Scotland.dbo.InventoryA
			ON Whisky.idWhisky = InventoryA.idWhisky
		WHERE Whisky.idSubscription = @idSubscription
		OR Subscription.name = 'No tier'
	END 
	IF @country = 'Ireland'
	BEGIN
		SELECT @idSubscription = idSubscription FROM DB_Ireland.dbo.Users WHERE idUser = @idUser
		PRINT @idSubscription
		SELECT Whisky.name, aged, WhiskyType.name, Supplier.name, Subscription.name, InventoryA.price
		FROM DB_Ireland.dbo.Whisky
		INNER JOIN DB_Ireland.dbo.WhiskyType 
			ON Whisky.idWhiskyType = WhiskyType.idWhiskyType
		INNER JOIN DB_Ireland.dbo.Supplier
			ON Whisky.idSupplier = Supplier.idSupplier
		INNER JOIN DB_Ireland.dbo.Subscription
			ON Whisky.idSubscription = Subscription.idSubscription
		INNER JOIN DB_Ireland.dbo.InventoryA
			ON Whisky.idWhisky = InventoryA.idWhisky
		WHERE Whisky.idSubscription = @idSubscription
		OR Subscription.name = 'No tier'
	END 
END