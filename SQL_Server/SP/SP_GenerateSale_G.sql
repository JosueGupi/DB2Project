USE DB_USA

GO
ALTER PROCEDURE SP_GenerateSale_G @idUser INT, @country VARCHAR(16), @numStore INT, @km INT
AS
BEGIN
DECLARE @min INT, @max INT, @price INT, @idSale INT, @idWhisky INT, @quantity INT, @idShipping INT
DECLARE @table TABLE (idShoppingCart INT, idWhisky INT, quantity INT) -- table type variable to go through the shopping cart one by one

BEGIN TRY
	IF @country = 'USA'
	BEGIN
		BEGIN TRANSACTION -- generate sale for shopping cart products

			SELECT @idShipping = idShipping FROM DB_USA.dbo.Shipping ORDER BY idShipping  
			-- create sale
			INSERT INTO DB_USA.dbo.Sale(idStore,idUser,idShipping,date)
				VALUES(@numStore,@idUser,@idShipping,CONVERT(date,GETDATE()))
			SET @idSale = SCOPE_IDENTITY()

			INSERT INTO @table -- insert ShoppingCart into variable table
			SELECT idShoppingCart, idWhisky, quantity FROM DB_USA.dbo.ShoppingCart
			WHERE idUser = @idUser AND bought = 0 -- The zero indicates that it has not yet been purchased
			-- go through the shopping cart one by one to get the id, quantity and price
			SELECT @min = MIN(idShoppingCart), @max = MAX(idShoppingCart) FROM @table
			WHILE(@min <= @max)
			BEGIN
				SELECT @quantity = quantity, @idWhisky = idWhisky FROM @table WHERE idShoppingCart = @min 
				
				SELECT @price = price FROM DB_USA.dbo.InventoryA WHERE @numStore = 1 AND idWhisky = @idWhisky
				SELECT @price = price FROM DB_USA.dbo.InventoryB WHERE @numStore = 2 AND idWhisky = @idWhisky
				SELECT @price = price FROM DB_USA.dbo.InventoryC WHERE @numStore = 3 AND idWhisky = @idWhisky
				-- insert sales line
				INSERT INTO DB_USA.dbo.WhiskyXSale(idWhisky, idSale, quantity, price)
					VALUES(@idWhisky, @idSale, @quantity, @price)
				-- update quantity in inventory and shopping cart
				UPDATE DB_USA.dbo.ShoppingCart
				SET bought = 1
				WHERE idWhisky = @idWhisky 

				UPDATE DB_USA.dbo.InventoryA
				SET quantity = quantity - @quantity
				WHERE idWhisky = @idWhisky
				AND @numStore = 1

				UPDATE DB_USA.dbo.InventoryB
				SET quantity = quantity - @quantity
				WHERE idWhisky = @idWhisky
				AND @numStore = 2
		
				UPDATE DB_USA.dbo.InventoryC
				SET quantity = quantity - @quantity
				WHERE idWhisky = @idWhisky
				AND @numStore = 3

				SET @min = @min + 1 
			END			
		
		COMMIT TRANSACTION

		SELECT S.idSale,CONVERT(Varchar,S.[date],107) AS date, idStore, Users.idUser, Users.name , Users.lastName,
			   email, Whisky.idWhisky, Whisky.name, quantity, price, priceXKm, @km AS km
		FROM DB_USA.dbo.Sale AS S
		INNER JOIN DB_USA.dbo.WhiskyXSale
			ON S.idSale = WhiskyXSale.idSale
		INNER JOIN DB_USA.dbo.Shipping
			ON S.idShipping = Shipping.idShipping
		INNER JOIN DB_USA.dbo.Users
			ON S.idUser = Users.idUser
		INNER JOIN DB_USA.dbo.Whisky
			ON WhiskyXSale.idWhisky = Whisky.idWhisky
		WHERE S.idSale = @idSale
		-- select the new sale
		SELECT SUM((quantity * price) + priceXKm) AS Total 
		FROM DB_USA.dbo.Sale AS S
		INNER JOIN DB_USA.dbo.WhiskyXSale
			ON S.idSale = WhiskyXSale.idSale
		INNER JOIN DB_USA.dbo.Shipping
			ON S.idShipping = Shipping.idShipping
		WHERE S.idSale = @idSale
		
	END
	
	IF @country = 'Ireland'
	BEGIN
		BEGIN TRANSACTION -- generate sale for shopping cart products

			SELECT @idShipping = idShipping FROM DB_Ireland.dbo.Shipping ORDER BY idShipping  
			-- create sale
			INSERT INTO DB_Ireland.dbo.Sale(idStore,idUser,idShipping,date)
				VALUES(@numStore,@idUser,@idShipping,CONVERT(date,GETDATE())) 
			SET @idSale = SCOPE_IDENTITY()

			INSERT INTO @table -- insert ShoppingCart into variable table
			SELECT idShoppingCart, idWhisky, quantity FROM DB_Ireland.dbo.ShoppingCart
			WHERE idUser = @idUser AND bought = 0 -- The zero indicates that it has not yet been purchased
			
			SELECT @min = MIN(idShoppingCart), @max = MAX(idShoppingCart) FROM @table
			-- go through the shopping cart one by one to get the id, quantity and price
			WHILE(@min <= @max)
			BEGIN
				SELECT @quantity = quantity, @idWhisky = idWhisky FROM @table WHERE idShoppingCart = @min 

				SELECT @price = price FROM DB_Ireland.dbo.InventoryA WHERE @numStore = 1 AND idWhisky = @idWhisky
				SELECT @price = price FROM DB_Ireland.dbo.InventoryB WHERE @numStore = 2 AND idWhisky = @idWhisky
				SELECT @price = price FROM DB_Ireland.dbo.InventoryC WHERE @numStore = 3 AND idWhisky = @idWhisky
				-- insert sales line
				INSERT INTO DB_Ireland.dbo.WhiskyXSale(idWhisky, idSale, quantity, price)
					VALUES(@idWhisky, @idSale, @quantity, @price)
				-- update quantity in inventory and shopping cart
				UPDATE DB_Ireland.dbo.ShoppingCart
				SET bought = 1
				WHERE idWhisky = @idWhisky 

				UPDATE DB_Ireland.dbo.InventoryA
				SET quantity = quantity - @quantity
				WHERE idWhisky = @idWhisky
				AND @numStore = 1

				UPDATE DB_Ireland.dbo.InventoryB
				SET quantity = quantity - @quantity
				WHERE idWhisky = @idWhisky
				AND @numStore = 2
		
				UPDATE DB_Ireland.dbo.InventoryC
				SET quantity = quantity - @quantity
				WHERE idWhisky = @idWhisky
				AND @numStore = 3

				SET @min = @min + 1 
			END			
		
		COMMIT TRANSACTION
		 -- select the new sale
		SELECT S.idSale,CONVERT(Varchar,S.[date],107) AS date, idStore, Users.idUser, Users.name, Users.lastName,
			   email, Whisky.idWhisky, Whisky.name, quantity, price, priceXKm, @km AS km
		FROM DB_Ireland.dbo.Sale AS S
		INNER JOIN DB_Ireland.dbo.WhiskyXSale
			ON S.idSale = WhiskyXSale.idSale
		INNER JOIN DB_Ireland.dbo.Shipping
			ON S.idShipping = Shipping.idShipping
		INNER JOIN DB_Ireland.dbo.Users
			ON S.idUser = Users.idUser
		INNER JOIN DB_Ireland.dbo.Whisky
			ON WhiskyXSale.idWhisky = Whisky.idWhisky
		WHERE S.idSale = @idSale

		SELECT SUM((quantity * price) + priceXKm) AS Total 
		FROM DB_Ireland.dbo.Sale AS S
		INNER JOIN DB_Ireland.dbo.WhiskyXSale
			ON S.idSale = WhiskyXSale.idSale
		INNER JOIN DB_Ireland.dbo.Shipping
			ON S.idShipping = Shipping.idShipping
		WHERE S.idSale = @idSale
		
	END

	IF @country = 'Scotland'
	BEGIN
		BEGIN TRANSACTION -- generate sale for shopping cart products

			SELECT @idShipping = idShipping FROM DB_Scotland.dbo.Shipping ORDER BY idShipping  
			-- create sale
			INSERT INTO DB_Scotland.dbo.Sale(idStore,idUser,idShipping,date)
				VALUES(@numStore,@idUser,@idShipping,CONVERT(date,GETDATE()))
			SET @idSale = SCOPE_IDENTITY()

			INSERT INTO @table -- insert ShoppingCart into variable table
			SELECT idShoppingCart, idWhisky, quantity FROM DB_Scotland.dbo.ShoppingCart
			WHERE idUser = @idUser AND bought = 0	-- The zero indicates that it has not yet been purchased
			
			SELECT @min = MIN(idShoppingCart), @max = MAX(idShoppingCart) FROM @table
			-- go through the shopping cart one by one to get the id, quantity and price
			WHILE(@min <= @max)
			BEGIN
				SELECT @quantity = quantity, @idWhisky = idWhisky FROM @table WHERE idShoppingCart = @min 
				
				SELECT @price = price FROM DB_Scotland.dbo.InventoryA WHERE @numStore = 1 AND idWhisky = @idWhisky
				SELECT @price = price FROM DB_Scotland.dbo.InventoryB WHERE @numStore = 2 AND idWhisky = @idWhisky
				SELECT @price = price FROM DB_Scotland.dbo.InventoryC WHERE @numStore = 3 AND idWhisky = @idWhisky
				-- insert sales line
				INSERT INTO DB_Scotland.dbo.WhiskyXSale(idWhisky, idSale, quantity, price)
					VALUES(@idWhisky, @idSale, @quantity, @price)
				-- update quantity in inventory and shopping cart
				UPDATE DB_Scotland.dbo.ShoppingCart
				SET bought = 1
				WHERE idWhisky = @idWhisky 

				UPDATE DB_Scotland.dbo.InventoryA
				SET quantity = quantity - @quantity
				WHERE idWhisky = @idWhisky
				AND @numStore = 1

				UPDATE DB_Scotland.dbo.InventoryB
				SET quantity = quantity - @quantity
				WHERE idWhisky = @idWhisky
				AND @numStore = 2
		
				UPDATE DB_Scotland.dbo.InventoryC
				SET quantity = quantity - @quantity
				WHERE idWhisky = @idWhisky
				AND @numStore = 3
				
				SET @min = @min + 1 
			END		
		
		COMMIT TRANSACTION
		-- select the new sale
		SELECT S.idSale,CONVERT(Varchar,S.[date],107) AS date, idStore, Users.idUser, Users.name, Users.lastName,
			   email, Whisky.idWhisky, Whisky.name, quantity, price, priceXKm, @km AS km
		FROM DB_Scotland.dbo.Sale AS S
		INNER JOIN DB_Scotland.dbo.WhiskyXSale
			ON S.idSale = WhiskyXSale.idSale
		INNER JOIN DB_Scotland.dbo.Shipping
			ON S.idShipping = Shipping.idShipping
		INNER JOIN DB_Scotland.dbo.Users
			ON S.idUser = Users.idUser
		INNER JOIN DB_Scotland.dbo.Whisky
			ON WhiskyXSale.idWhisky = Whisky.idWhisky
		WHERE S.idSale = @idSale

		SELECT SUM((quantity * price) + priceXKm) AS Total 
		FROM DB_Scotland.dbo.Sale AS S
		INNER JOIN DB_Scotland.dbo.WhiskyXSale
			ON S.idSale = WhiskyXSale.idSale
		INNER JOIN DB_Scotland.dbo.Shipping
			ON S.idShipping = Shipping.idShipping
		WHERE S.idSale = @idSale
				
	END

END TRY
BEGIN CATCH
	ROLLBACK
	SELECT 'Error' AS ALGOSALIOMAL
END CATCH
END
RETURN 1

/*
SELECT * FROM DB_Scotland.dbo.ShoppingCart
SELECT * FROM DB_Ireland.dbo.ShoppingCart
SELECT idShoppingCart, idWhisky, quantity FROM DB_Ireland.dbo.ShoppingCart
SELECT * FROM DB_Ireland.dbo.Users
SELECT * FROM ShoppingCard
EXEC SP_GenerateSale_G '45','Ireland','2','5669588'
*/