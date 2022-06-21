USE DB_USA

GO
ALTER PROCEDURE SP_AddShoppingCart_G @whisky VARCHAR(16), @idUser INT, @country VARCHAR(16)
AS
DECLARE @idWhisky INT
DECLARE @idShoppingCart INT
SELECT @idWhisky = idWhisky FROM Whisky WHERE name = @whisky
BEGIN
	BEGIN TRY
	
	SET @idShoppingCart = 0 

	IF @country ='USA'
	BEGIN
		SELECT @idWhisky = idWhisky FROM DB_USA.dbo.Whisky WHERE name = @whisky
		-- get the products that have not been purchased and update table
		SELECT @idShoppingCart = idShoppingCart FROM DB_USA.dbo.ShoppingCart 
			WHERE idUser = @idUser AND idWhisky = @idWhisky AND bought = 0

		UPDATE DB_USA.dbo.ShoppingCart
		SET quantity = quantity + 1
		WHERE @idShoppingCart = idShoppingCart
		AND @idShoppingCart > 0 
		-- if the user does not have a cart, it is created
		IF (@idShoppingCart = 0)
		BEGIN
			INSERT INTO DB_USA.dbo.ShoppingCart (idUser,idWhisky,bought,quantity)
				VALUES (@idUser,@idWhisky,0,1)
			SET @idShoppingCart = SCOPE_IDENTITY()
		END
		
		SELECT idShoppingCart, idUser, idWhisky, bought, quantity
		FROM DB_USA.dbo.ShoppingCart
		WHERE idShoppingCart = @idShoppingCart
	END
	IF @country ='Scotland'
	BEGIN
		SELECT @idWhisky = idWhisky FROM DB_Scotland.dbo.Whisky WHERE name = @whisky
		-- get the products that have not been purchased and update table
		SELECT @idShoppingCart = idShoppingCart FROM DB_Scotland.dbo.ShoppingCart 
			WHERE idUser = @idUser AND idWhisky = @idWhisky AND bought = 0

		UPDATE DB_Scotland.dbo.ShoppingCart
		SET quantity = quantity + 1
		WHERE @idShoppingCart = idShoppingCart
		AND @idShoppingCart > 0 
		-- if the user does not have a cart, it is created
		IF (@idShoppingCart = 0)
		BEGIN
			INSERT INTO DB_Scotland.dbo.ShoppingCart (idUser,idWhisky,bought,quantity)
				VALUES (@idUser,@idWhisky,0,1)
			SET @idShoppingCart = SCOPE_IDENTITY()
		END
		
		SELECT idShoppingCart, idUser, idWhisky, bought, quantity
		FROM DB_Scotland.dbo.ShoppingCart
		WHERE idShoppingCart = @idShoppingCart
	END
	IF @country ='Ireland'
	BEGIN
		SELECT @idWhisky = idWhisky FROM DB_Ireland.dbo.Whisky WHERE name = @whisky
		-- get the products that have not been purchased and update table
		SELECT @idShoppingCart = idShoppingCart FROM DB_Ireland.dbo.ShoppingCart 
			WHERE idUser = @idUser AND idWhisky = @idWhisky AND bought = 0

		UPDATE DB_Ireland.dbo.ShoppingCart
		SET quantity = quantity + 1
		WHERE @idShoppingCart = idShoppingCart
		AND @idShoppingCart > 0 
		-- if the user does not have a cart, it is created
		IF (@idShoppingCart = 0)
		BEGIN
			INSERT INTO DB_Ireland.dbo.ShoppingCart (idUser,idWhisky,bought,quantity)
				VALUES (@idUser,@idWhisky,0,1)
			SET @idShoppingCart = SCOPE_IDENTITY()
		END

		SELECT idShoppingCart, idUser, idWhisky, bought, quantity
		FROM DB_Ireland.dbo.ShoppingCart
		WHERE idShoppingCart = @idShoppingCart
	END
	
	END TRY
	BEGIN CATCH
		SELECT 'Error'
	END CATCH
END
