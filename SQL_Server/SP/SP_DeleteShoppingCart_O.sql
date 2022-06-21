USE DB_USA

GO
CREATE PROCEDURE SP_DeleteShoppingCartItem_O @whisky VARCHAR(16), @idUser INT, @country VARCHAR(16)
AS
DECLARE @max INT
DECLARE @idWhisky INT
SELECT @idWhisky = idWhisky FROM Whisky WHERE name = @whisky
BEGIN
	BEGIN TRY

	IF @country ='USA'
	BEGIN
		DELETE FROM DB_USA.dbo.ShoppingCart WHERE idWhisky = @idWhisky AND idUser = @idUser;
		SELECT @max = MAX(idShoppingCart) FROM DB_USA.dbo.ShoppingCart;
		DBCC CHECKIDENT('DB_USA.dbo.ShoppingCart', RESEED, @max)
	END
	IF @country ='Scotland'
	BEGIN
		DELETE FROM DB_Scotland.dbo.ShoppingCart WHERE idWhisky = @idWhisky AND idUser = @idUser;
		SELECT @max = MAX(idShoppingCart) FROM DB_Scotland.dbo.ShoppingCart;
		DBCC CHECKIDENT('DB_Scotland.dbo.ShoppingCart', RESEED, @max)
	END
	IF @country ='Ireland'
	BEGIN
		DELETE FROM DB_Ireland.dbo.ShoppingCart WHERE idWhisky = @idWhisky AND idUser = @idUser;
		SELECT @max = MAX(idShoppingCart) FROM DB_Ireland.dbo.ShoppingCart;
		DBCC CHECKIDENT('DB_Ireland.dbo.ShoppingCart', RESEED, @max)
	END
	
	END TRY
	BEGIN CATCH
		SELECT 'Error'
	END CATCH
END
