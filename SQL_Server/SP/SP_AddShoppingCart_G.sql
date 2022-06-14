USE DB_USA

GO
ALTER PROCEDURE SP_AddShoppingCart_G @whisky VARCHAR(16), @idUser INT
AS
DECLARE @idWhisky INT
SELECT @idWhisky = idWhisky FROM Whisky WHERE name = @whisky
BEGIN
	BEGIN TRY
	-- get location user .....
	INSERT INTO DB_USA.dbo.ShoppingCart (idUser,idWhisky,bought)
		VALUES (@idUser,@idWhisky,0)
	SELECT idShoppingCart, idUser, idWhisky, bought
	FROM DB_USA.dbo.ShoppingCart
	WHERE idShoppingCart = SCOPE_IDENTITY()
	END TRY
	BEGIN CATCH
		SELECT 'Error'
	END CATCH
END
