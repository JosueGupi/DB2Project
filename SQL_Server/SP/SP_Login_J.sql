USE DB_USA;  
GO  
CREATE PROCEDURE SP_Login_J   
    @username varchar(32),   
    @password varchar(32)   
AS   
BEGIN
    SET NOCOUNT ON; 
    BEGIN TRY
        SELECT U.idUser
            , U.username
            , U.administrator
            , S.name
            , 'USA' as [Location]
        FROM DB_USA.dbo.Users U 
        INNER JOIN DB_USA.dbo.Subscription S ON U.idSubscription = S.idSubscription
        WHERE username = @username
        AND [password] = HASHBYTES('SHA2_256',@password)
        UNION
        SELECT U.idUser
            , U.username
            , U.administrator
            , S.name
            , 'Scotland' as [Location]
        FROM DB_Scotland.dbo.Users U 
        INNER JOIN DB_Scotland.dbo.Subscription S ON U.idSubscription = S.idSubscription
        WHERE username = @username
        AND [password] = HASHBYTES('SHA2_256',@password)
        UNION
        SELECT U.idUser
            , U.username
            , U.administrator
            , S.name
            , 'Ireland' as [Location]
        FROM DB_Ireland.dbo.Users U 
        INNER JOIN DB_Ireland.dbo.Subscription S ON U.idSubscription = S.idSubscription
        WHERE username = @username
        AND [password] = HASHBYTES('SHA2_256',@password)
    END TRY

    BEGIN CATCH
        SELECT 'ERROR'
    END CATCH
    SET NOCOUNT OFF;
END 

EXEC SP_Login_J 'adminUSA','admin'