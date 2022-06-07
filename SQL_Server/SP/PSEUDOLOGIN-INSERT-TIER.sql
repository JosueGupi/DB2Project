INSERT INTO dbo.Subscription(
    [name]
)VALUES('No tier'),('Short Glass'),('Gleincairn'),('Master Distiller');
SELECT * FROM dbo.Subscription;

INSERT INTO dbo.Users(
    idSubscription
    ,administrator
    ,[name]
    ,lastName
    ,username
    ,[password]
    ,email
)VALUES(
    4
    ,1
    ,'Geisel'
    ,'Montoya'
    ,'adminSCT'
    ,HASHBYTES('SHA2_256','admin')
    ,'geiselmoso@gmail.com'
);

DECLARE @username VARCHAR(32) = 'adminUSA',
        @password VARCHAR(32) = 'admin'

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


DELETE FROM dbo.Users
DBCC CHECKIDENT (Users,RESEED,0)

SELECT * FROM Users