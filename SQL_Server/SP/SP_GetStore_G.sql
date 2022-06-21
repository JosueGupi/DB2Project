USE DB_USA

GO
ALTER PROCEDURE SP_GetStore_G @country VARCHAR(16), @idUser INT, @latitude FLOAT, @lentgh FLOAT
AS
BEGIN
DECLARE @min INT, @max INT, @temp INT
DECLARE @idWhisky INT, @quantity INT, @numStore INT
DECLARE @availableA INT, @availableB INT, @availableC INT
DECLARE @distanceA FLOAT, @distanceB FLOAT, @distanceC FLOAT
DECLARE @inventoryA GEOGRAPHY, @inventoryB GEOGRAPHY
DECLARE @inventoryC GEOGRAPHY, @locationUser GEOGRAPHY

DECLARE @table TABLE (idShoppingCart INT, idWhisky INT, quantity INT)
DECLARE @ranking TABLE (numberStore INT, distance INT, available INT)

SET @locationUser = geography::Point(@latitude,@lentgh,4326)

BEGIN TRY

	SET @numStore = -1
	SET @availableA = 1
	SET @availableB = 1
	SET @availableC = 1

	-- get the nearest store with the requested product --

	IF @country = 'USA'
	BEGIN
		SELECT @inventoryA = dimensions FROM DB_USA.dbo.Store WHERE location = 1
		SELECT @inventoryB = dimensions FROM DB_USA.dbo.Store WHERE location = 2
		SELECT @inventoryC = dimensions FROM DB_USA.dbo.Store WHERE location = 3

		SET @distanceA = @inventoryA.STDistance(@locationUser)	
		SET @distanceB = @inventoryB.STDistance(@locationUser)
		SET @distanceC = @inventoryC.STDistance(@locationUser)

		INSERT INTO @table
		SELECT idShoppingCart, idWhisky, quantity FROM DB_USA.dbo.ShoppingCart
		WHERE idUser = @idUser AND bought = 0
		-- get if the products in the cart are in stock
		SELECT @min = MIN(idShoppingCart), @max = MAX(idShoppingCart) FROM @table
		WHILE(@min <= @max)
		BEGIN
			SELECT @quantity = quantity, @idWhisky = idWhisky FROM @table WHERE idShoppingCart = @min
		
			SELECT @temp = quantity FROM DB_USA.dbo.InventoryA WHERE idWhisky = @idWhisky			
			IF @quantity > @temp
			BEGIN
				SET @availableA = 0 -- insufficient resources
			END		
			
			SELECT @temp = quantity FROM DB_USA.dbo.InventoryB WHERE idWhisky = @idWhisky			
			IF @quantity > @temp
			BEGIN
				SET @availableB = 0 -- insufficient resources
			END
			
			SELECT @temp = quantity FROM DB_USA.dbo.InventoryC WHERE idWhisky = @idWhisky	
			IF @quantity > @temp
			BEGIN
				SET @availableC = 0 -- insufficient resources
			END
			
			SET  @min = @min + 1 
		END
		-- get the shortest distance where there are enough products
		INSERT INTO @ranking (numberStore, distance, available)
			VALUES(1,@distanceA,@availableA),
				  (2,@distanceB,@availableB),
			      (3,@distanceC,@availableC)
		
		SELECT TOP (1) distance, numberStore FROM @ranking WHERE available = 1 ORDER BY distance ASC 	

	END
	IF @country = 'Ireland'
	BEGIN
		SELECT @inventoryA = dimensions FROM DB_Ireland.dbo.Store WHERE location = 1
		SELECT @inventoryB = dimensions FROM DB_Ireland.dbo.Store WHERE location = 2
		SELECT @inventoryC = dimensions FROM DB_Ireland.dbo.Store WHERE location = 3

		SET @distanceA = @inventoryA.STDistance(@locationUser)	
		SET @distanceB = @inventoryB.STDistance(@locationUser)
		SET @distanceC = @inventoryC.STDistance(@locationUser)

		INSERT INTO @table
		SELECT idShoppingCart, idWhisky, quantity FROM DB_Ireland.dbo.ShoppingCart
		WHERE idUser = @idUser AND bought = 0
		-- get if the products in the cart are in stock
		SELECT @min = MIN(idShoppingCart), @max = MAX(idShoppingCart) FROM @table		
		WHILE(@min <= @max)
		BEGIN
			SELECT @quantity = quantity, @idWhisky = idWhisky FROM @table WHERE idShoppingCart = @min
		
			SELECT @temp = quantity FROM DB_Ireland.dbo.InventoryA WHERE idWhisky = @idWhisky			
			IF @quantity > @temp
			BEGIN
				SET @availableA = 0 -- insufficient resources
			END		
			
			SELECT @temp = quantity FROM DB_Ireland.dbo.InventoryB WHERE idWhisky = @idWhisky			
			IF @quantity > @temp
			BEGIN
				SET @availableB = 0 -- insufficient resources
			END
			
			SELECT @temp = quantity FROM DB_Ireland.dbo.InventoryC WHERE idWhisky = @idWhisky	
			IF @quantity > @temp
			BEGIN
				SET @availableC = 0 -- insufficient resources
			END
			
			SET  @min = @min + 1 
		END
		-- get the shortest distance where there are enough products
		INSERT INTO @ranking (numberStore, distance, available)
			VALUES(1,@distanceA,@availableA),
			      (2,@distanceB,@availableB),
			      (3,@distanceC,@availableC)

		SELECT TOP (1) distance, numberStore FROM @ranking WHERE available = 1 ORDER BY distance ASC 	

	END
	IF @country = 'Scotland'
	BEGIN
		SELECT @inventoryA = dimensions FROM DB_Scotland.dbo.Store WHERE location = 1
		SELECT @inventoryB = dimensions FROM DB_Scotland.dbo.Store WHERE location = 2
		SELECT @inventoryC = dimensions FROM DB_Scotland.dbo.Store WHERE location = 3

		SET @distanceA = @inventoryA.STDistance(@locationUser)	
		SET @distanceB = @inventoryB.STDistance(@locationUser)
		SET @distanceC = @inventoryC.STDistance(@locationUser)

		INSERT INTO @table
		SELECT idShoppingCart, idWhisky, quantity FROM DB_Scotland.dbo.ShoppingCart
		WHERE idUser = @idUser  AND bought = 0		
		SELECT @min = MIN(idShoppingCart), @max = MAX(idShoppingCart) FROM @table
		-- get if the products in the cart are in stock
		WHILE(@min <= @max)
		BEGIN
			SELECT @quantity = quantity, @idWhisky = idWhisky FROM @table WHERE idShoppingCart = @min
		
			SELECT @temp = quantity FROM DB_Scotland.dbo.InventoryA WHERE idWhisky = @idWhisky			
			IF @quantity > @temp
			BEGIN
				SET @availableA = 0 -- insufficient resources
			END		
			
			SELECT @temp = quantity FROM DB_Scotland.dbo.InventoryB WHERE idWhisky = @idWhisky			
			IF @quantity > @temp
			BEGIN
				SET @availableB = 0 -- insufficient resources
			END
			
			SELECT @temp = quantity FROM DB_Scotland.dbo.InventoryC WHERE idWhisky = @idWhisky	
			IF @quantity > @temp
			BEGIN
				SET @availableC = 0 -- insufficient resources
			END
			
			SET  @min = @min + 1 
		END
		-- get the shortest distance where there are enough products
		INSERT INTO @ranking (numberStore, distance, available) 
			VALUES(1,@distanceA,@availableA),
			      (2,@distanceB,@availableB),
			      (3,@distanceC,@availableC)
		
		SELECT TOP (1) distance, numberStore FROM @ranking WHERE available = 1 ORDER BY distance ASC 	

	END

END TRY
BEGIN CATCH
	SELECT 'Error' AS ALGOSALIOMAL
END CATCH
END
RETURN 1