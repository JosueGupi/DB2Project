USE DB_USA

GO
CREATE PROCEDURE SP_SelectShoppingCart_G @idUser INT
AS
BEGIN
	BEGIN TRY
	-- get location user .....
	SELECT S.idWhisky, W.name--, I.price
	FROM DB_USA.dbo.ShoppingCart AS S 
	INNER JOIN Whisky AS W
		ON S.idWhisky = W.idWhisky
	--INNER JOIN InventoryA AS I -- GET LOCATION
	--	ON S.idWhisky = I.idWhisky
	WHERE idUser = @idUser
	AND bought = 0

	END TRY
	BEGIN CATCH
		SELECT 'Error'
	END CATCH
END
