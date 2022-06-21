USE DB_USA

GO
CREATE PROCEDURE SP_DeleteShoppingCartItem_O @whisky VARCHAR(16), @idUser INT, @country VARCHAR(16)
AS
DECLARE @max INT
DECLARE @idWhisky INT
SELECT @idWhisky = idWhisky FROM Whisky WHERE name = @whisky
BEGIN
	BEGIN TRY

	IF @country ='USA'--filters the elements by country
	BEGIN
		DELETE FROM DB_USA.dbo.ShoppingCart WHERE idWhisky = @idWhisky AND idUser = @idUser;
		SELECT @max = MAX(idShoppingCart) FROM DB_USA.dbo.ShoppingCart;--select the max id in the table to reasigned
		DBCC CHECKIDENT('DB_USA.dbo.ShoppingCart', RESEED, @max)--reset the fk for a better manage of the id when deleted
	END
	IF @country ='Scotland'
	BEGIN
		DELETE FROM DB_Scotland.dbo.ShoppingCart WHERE idWhisky = @idWhisky AND idUser = @idUser;
		SELECT @max = MAX(idShoppingCart) FROM DB_Scotland.dbo.ShoppingCart;--select the max id in the table to reasigned
		DBCC CHECKIDENT('DB_Scotland.dbo.ShoppingCart', RESEED, @max)--reset the fk for a better manage of the id when deleted
	END
	IF @country ='Ireland'
	BEGIN
		DELETE FROM DB_Ireland.dbo.ShoppingCart WHERE idWhisky = @idWhisky AND idUser = @idUser;
		SELECT @max = MAX(idShoppingCart) FROM DB_Ireland.dbo.ShoppingCart;--select the max id in the table to reasigned
		DBCC CHECKIDENT('DB_Ireland.dbo.ShoppingCart', RESEED, @max)--reset the fk for a better manage of the id when deleted
	END
	
	END TRY
	BEGIN CATCH
		SELECT 'Error'
	END CATCH
END
