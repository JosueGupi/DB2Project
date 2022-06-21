USE DB_USA

GO
ALTER PROCEDURE SP_CreateAccount_G @name VARCHAR(16), @lastName VARCHAR(16), @email VARCHAR(32), 
									@username VARCHAR(32), @password VARCHAR(32), @subscription VARCHAR(16),
									@country VARCHAR(16), @administrator INT
AS
BEGIN
-- validate password before insert user --
DECLARE @number INT, @string INT, @x INT,@y INT, @error INT
SET @number = 0
SET @string = 0
SET @x = 1
WHILE @x <= LEN(@password)
	BEGIN
	IF ISNUMERIC(SUBSTRING(@password,@x,1)) = 1
		SET @number = @number + 1
    ELSE
		SET @string = @string+ 1
    SET @x=@x+1
    END
IF @number < 4 OR @string < 4 -- The password must contain at least four letters and four numbers
	RETURN 0 -- password not validated 
-------- end password validation ---------
DECLARE @idSubscription INT
BEGIN TRY
	IF @country = 'usa'
	BEGIN  -- find subscription and create a new user
		SELECT @idSubscription = idSubscription FROM DB_USA.dbo.Subscription WHERE name = @subscription
		INSERT INTO DB_USA.dbo.Users(idSubscription,administrator,name,lastName,username,password,email,location)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,HASHBYTES('SHA2_256',@password),@email,geography::Point(0,0,4326))		
		-- select the new user
		SELECT username, email, price, Subscription.name AS subscription
		FROM DB_USA.dbo.Users
		INNER JOIN DB_USA.dbo.Subscription
			ON Users.idSubscription = Subscription.idSubscription
		WHERE idUser = SCOPE_IDENTITY()  
	END
	IF @country = 'scotland'
	BEGIN  -- find subscription and create a new user
		SELECT @idSubscription = idSubscription FROM DB_Scotland.dbo.Subscription WHERE name = @subscription
		INSERT INTO DB_Scotland.dbo.Users(idSubscription,administrator,name,lastName,username,password,email,location)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,HASHBYTES('SHA2_256',@password),@email,geography::Point(0,0,4326))
		-- select the new user
		SELECT username, email, price, Subscription.name AS subscription
		FROM DB_Scotland.dbo.Users
		INNER JOIN DB_Scotland.dbo.Subscription
			ON Users.idSubscription = Subscription.idSubscription
		WHERE idUser = SCOPE_IDENTITY() 
	END
	IF @country = 'ireland' 
	BEGIN  -- find subscription and create a new user
		SELECT @idSubscription = idSubscription FROM DB_Ireland.dbo.Subscription WHERE name = @subscription
		INSERT INTO DB_Ireland.dbo.Users(idSubscription,administrator,name,lastName,username,password,email,location)
			VALUES(@idSubscription,@administrator,@name,@lastName,@username,HASHBYTES('SHA2_256',@password),@email,geography::Point(0,0,4326))
		-- select the new user
		SELECT username, email, price, Subscription.name AS subscription
		FROM DB_Ireland.dbo.Users
		INNER JOIN DB_Ireland.dbo.Subscription
			ON Users.idSubscription = Subscription.idSubscription
		WHERE idUser = SCOPE_IDENTITY() 
	END
END TRY
BEGIN CATCH
	RETURN 0
END CATCH
END