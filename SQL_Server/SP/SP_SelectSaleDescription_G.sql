USE DB_USA

GO
CREATE PROCEDURE SP_SelectSaleDescription_G @idUser INT, @country VARCHAR(16), @idSale INT
AS
DECLARE @idSubscription INT 
BEGIN
	IF @country = 'USA'
	BEGIN
		SELECT S.idSale, Whisky.idWhisky, Whisky.name AS whisky, quantity, price 
		FROM DB_USA.dbo.Sale AS S
		INNER JOIN DB_USA.dbo.WhiskyXSale
			ON S.idSale = WhiskyXSale.idSale
		INNER JOIN DB_USA.dbo.Whisky
			ON WhiskyXSale.idWhisky = Whisky.idWhisky
		WHERE S.idUser = @idUser AND S.idSale = @idSale
	END 
	IF @country = 'Scotland'
	BEGIN
		SELECT S.idSale,Whisky.idWhisky, Whisky.name AS whisky, quantity, price
		FROM DB_Scotland.dbo.Sale AS S
		INNER JOIN DB_Scotland.dbo.WhiskyXSale
			ON S.idSale = WhiskyXSale.idSale
		INNER JOIN DB_Scotland.dbo.Whisky
			ON WhiskyXSale.idWhisky = Whisky.idWhisky
		WHERE S.idUser = @idUser AND S.idSale = @idSale
	END 
	IF @country = 'Ireland'
	BEGIN
		SELECT S.idSale, Whisky.idWhisky, Whisky.name AS whisky, quantity, price
		FROM DB_Ireland.dbo.Sale AS S
		INNER JOIN DB_Ireland.dbo.WhiskyXSale
			ON S.idSale = WhiskyXSale.idSale
		INNER JOIN DB_Ireland.dbo.Whisky
			ON WhiskyXSale.idWhisky = Whisky.idWhisky
		WHERE S.idUser = @idUser AND S.idSale = @idSale
	END 
END