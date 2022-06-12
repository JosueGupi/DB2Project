GO
CREATE PROCEDURE SP_SelectCatalog_G 
AS
BEGIN
	SELECT Whisky.name, aged, WhiskyType.name, Supplier.name, Subscription.name 
	FROM DB_USA.dbo.Whisky
	INNER JOIN WhiskyType 
		ON Whisky.idWhiskyType = WhiskyType.idWhiskyType
	INNER JOIN Supplier
		ON Whisky.idSupplier = Supplier.idSupplier
	INNER JOIN Subscription
		ON Whisky.idSubscription =Subscription.idSubscription
END