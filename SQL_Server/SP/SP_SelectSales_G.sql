USE DB_USA

GO
ALTER PROCEDURE SP_SelectSales_G @idUser INT, @country VARCHAR(16)
AS
DECLARE @idSubscription INT 
BEGIN
	IF @country = 'USA'
	BEGIN
		SELECT S.idSale,CONVERT(Varchar,S.[date],107) AS date, idStore, 
			   Users.idUser, Users.name, Users.lastName, email, priceXKm
		FROM DB_USA.dbo.Sale AS S
		INNER JOIN DB_USA.dbo.Shipping
			ON S.idShipping = Shipping.idShipping
		INNER JOIN DB_USA.dbo.Users
			ON S.idUser = Users.idUser
		WHERE S.idUser = @idUser
	END 
	IF @country = 'Scotland'
	BEGIN
		SELECT S.idSale,CONVERT(Varchar,S.[date],107) AS date, idStore,
			   Users.idUser, Users.name, Users.lastName, email,  priceXKm
		FROM DB_Scotland.dbo.Sale AS S
		INNER JOIN DB_Scotland.dbo.Shipping
			ON S.idShipping = Shipping.idShipping
		INNER JOIN DB_Scotland.dbo.Users
			ON S.idUser = Users.idUser
		WHERE S.idUser = @idUser
	END 
	IF @country = 'Ireland'
	BEGIN
		SELECT S.idSale,CONVERT(Varchar,S.[date],107) AS date, idStore, Users.idUser, Users.name, Users.lastName,
			   email, priceXKm
		FROM DB_Ireland.dbo.Sale AS S
		INNER JOIN DB_Ireland.dbo.Shipping
			ON S.idShipping = Shipping.idShipping
		INNER JOIN DB_Ireland.dbo.Users
			ON S.idUser = Users.idUser
		WHERE S.idUser = @idUser
	END 
END