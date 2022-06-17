USE DB_USA

GO
ALTER PROCEDURE SP_SelectShoppingCart_G @idUser INT, @country VARCHAR(16)
AS
BEGIN
	IF @country = 'USA'
	BEGIN 
		SELECT S.idWhisky, W.name, I.price, idShoppingCart, S.quantity
		FROM DB_USA.dbo.ShoppingCart AS S 
		INNER JOIN DB_USA.dbo.Whisky AS W
			ON S.idWhisky = W.idWhisky
		INNER JOIN DB_USA.dbo.InventoryA AS I
			ON S.idWhisky = I.idWhisky
		WHERE idUser = @idUser
		AND bought = 0
	END 
	IF @country = 'Scotland'
	BEGIN 
		SELECT S.idWhisky, W.name, I.price, idShoppingCart, S.quantity
		FROM DB_Scotland.dbo.ShoppingCart AS S 
		INNER JOIN DB_Scotland.dbo.Whisky AS W
			ON S.idWhisky = W.idWhisky
		INNER JOIN DB_Scotland.dbo.InventoryA AS I
			ON S.idWhisky = I.idWhisky
		WHERE idUser = @idUser
		AND bought = 0
	END 
	IF @country = 'Ireland'
	BEGIN 
		SELECT S.idWhisky, W.name, I.price, idShoppingCart, S.quantity
		FROM DB_Ireland.dbo.ShoppingCart AS S 
		INNER JOIN DB_Ireland.dbo.Whisky AS W
			ON S.idWhisky = W.idWhisky
		INNER JOIN DB_Ireland.dbo.InventoryA AS I
			ON S.idWhisky = I.idWhisky
		WHERE idUser = @idUser
		AND bought = 0
	END 
END
