USE DB_USA;  
GO  
ALTER PROCEDURE SP_UpdateSuscription_G @country varchar(32), @suscription varchar(32), @idUser INT
AS   
DECLARE @idSubscription INT
SELECT @idSubscription = idSubscription FROM DB_USA.dbo.Subscription WHERE name = @suscription AND @country = 'USA'
SELECT @idSubscription = idSubscription FROM DB_Scotland.dbo.Subscription WHERE name = @suscription AND @country = 'Scotland'
SELECT @idSubscription = idSubscription FROM DB_Ireland.dbo.Subscription WHERE name = @suscription AND @country = 'Ireland'
PRINT @idSubscription
BEGIN
    BEGIN TRY
        UPDATE DB_USA.dbo.Users
        SET idSubscription = @idSubscription
        WHERE @country = 'USA'
        AND idUser = @idUser;

        UPDATE DB_Scotland.dbo.Users
        SET idSubscription = @idSubscription
        WHERE @country = 'Scotland'
        AND idUser = @idUser;

        UPDATE DB_Ireland.dbo.Users
        SET idSubscription = @idSubscription
        WHERE @country = 'Ireland'
        AND idUser = @idUser;        

		IF @country = 'USA'
		BEGIN
			SELECT username, email, price, Subscription.name AS subscription
			FROM DB_USA.dbo.Users
			INNER JOIN DB_USA.dbo.Subscription
				ON Users.idSubscription = Subscription.idSubscription
			WHERE idUser = @idUser 
		END

		IF @country = 'Ireland'
		BEGIN
			SELECT username, email, price, Subscription.name AS subscription
			FROM DB_Ireland.dbo.Users
			INNER JOIN DB_Ireland.dbo.Subscription
				ON Users.idSubscription = Subscription.idSubscription
			WHERE idUser = @idUser
		END

		IF @country = 'Scotland'
		BEGIN
			SELECT username, email, price, Subscription.name AS subscription
			FROM DB_Scotland.dbo.Users
			INNER JOIN DB_Scotland.dbo.Subscription
				ON Users.idSubscription = Subscription.idSubscription
			WHERE idUser = @idUser  
		END

    END TRY

    BEGIN CATCH
        SELECT 'ERROR'
    END CATCH
END 


/*
EXEC SP_UpdateSuscription_G 'Ireland','Master Distiller','45'
SELECT * FROM DB_Ireland.dbo.Subscription
SELECT * FROM DB_USA.dbo.Subscription
SELECT * FROM DB_Scotland.dbo.Subscription

*/
