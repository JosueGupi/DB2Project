USE DB_Scotland

GO
CREATE PROCEDURE SP_CreateAccount_G @name VARCHAR(16), @lastName VARCHAR(16), @email VARCHAR(32), 
									@username VARCHAR(32), @password VARCHAR(32), @subscription VARCHAR(16),
									@country VARCHAR(16), @administrator INT
AS
BEGIN
DECLARE @idSubscription INT
SELECT @idSubscription = idSubscription FROM DB_USA.dbo.Subscription WHERE name = @subscription
PRINT @idSubscription
BEGIN TRY
	IF @country = 'usa'
	BEGIN
		INSERT INTO DB_USA.dbo.Users(idSubscription,administrator,name,lastName,username,password,email)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,@password,@email)
	END
	IF @country = 'scotland'
	BEGIN
		INSERT INTO DB_Scotland.dbo.Users(idSubscription,administrator,name,lastName,username,password,email)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,@password,@email)
	END
	IF @country = 'ireland'
	BEGIN
		INSERT INTO DB_Ireland.dbo.Users(idSubscription,administrator,name,lastName,username,password,email)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,@password,@email)
	END
END TRY
BEGIN CATCH
	SELECT 'Error'
END CATCH
END
GO

USE DB_Ireland

GO
CREATE PROCEDURE SP_CreateAccount_G @name VARCHAR(16), @lastName VARCHAR(16), @email VARCHAR(32), 
									@username VARCHAR(32), @password VARCHAR(32), @subscription VARCHAR(16),
									@country VARCHAR(16), @administrator INT
AS
BEGIN
DECLARE @idSubscription INT
SELECT @idSubscription = idSubscription FROM DB_USA.dbo.Subscription WHERE name = @subscription
PRINT @idSubscription
BEGIN TRY
	IF @country = 'usa'
	BEGIN
		INSERT INTO DB_USA.dbo.Users(idSubscription,administrator,name,lastName,username,password,email)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,@password,@email)
	END
	IF @country = 'scotland'
	BEGIN
		INSERT INTO DB_Scotland.dbo.Users(idSubscription,administrator,name,lastName,username,password,email)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,@password,@email)
	END
	IF @country = 'ireland'
	BEGIN
		INSERT INTO DB_Ireland.dbo.Users(idSubscription,administrator,name,lastName,username,password,email)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,@password,@email)
	END
END TRY
BEGIN CATCH
	SELECT 'Error'
END CATCH
END
GO

USE DB_USA

GO
CREATE PROCEDURE SP_CreateAccount_G @name VARCHAR(16), @lastName VARCHAR(16), @email VARCHAR(32), 
									@username VARCHAR(32), @password VARCHAR(32), @subscription VARCHAR(16),
									@country VARCHAR(16), @administrator INT
AS
BEGIN
DECLARE @idSubscription INT
SELECT @idSubscription = idSubscription FROM DB_USA.dbo.Subscription WHERE name = @subscription
PRINT @idSubscription
BEGIN TRY
	IF @country = 'usa'
	BEGIN
		INSERT INTO DB_USA.dbo.Users(idSubscription,administrator,name,lastName,username,password,email)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,@password,@email)
	END
	IF @country = 'scotland'
	BEGIN
		INSERT INTO DB_Scotland.dbo.Users(idSubscription,administrator,name,lastName,username,password,email)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,@password,@email)
	END
	IF @country = 'ireland'
	BEGIN
		INSERT INTO DB_Ireland.dbo.Users(idSubscription,administrator,name,lastName,username,password,email)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,@password,@email)
	END
END TRY
BEGIN CATCH
	SELECT 'Error'
END CATCH
END

