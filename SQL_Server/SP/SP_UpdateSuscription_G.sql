USE DB_USA;  
GO  
ALTER PROCEDURE SP_UpdateSuscription_G @country varchar(32), @suscription varchar(32), @idUser INT
AS   
DECLARE @idSubscription INT
SELECT @idSubscription = idSubscription FROM Subscription WHERE name = @suscription
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

		SELECT username, email, price, Subscription.name AS subscription
		FROM DB_USA.dbo.Users
		INNER JOIN DB_USA.dbo.Subscription
			ON Users.idSubscription = Subscription.idSubscription
		WHERE idUser = @idUser AND @country = 'USA'

		SELECT username, email, price, Subscription.name AS subscription
		FROM DB_Ireland.dbo.Users
		INNER JOIN DB_Ireland.dbo.Subscription
			ON Users.idSubscription = Subscription.idSubscription
		WHERE idUser = @idUser AND @country = 'Ireland'

		SELECT username, email, price, Subscription.name AS subscription
		FROM DB_Scotland.dbo.Users
		INNER JOIN DB_Scotland.dbo.Subscription
			ON Users.idSubscription = Subscription.idSubscription
		WHERE idUser = @idUser AND @country = 'Scotland'

    END TRY

    BEGIN CATCH
        SELECT 'ERROR'
    END CATCH
END 
