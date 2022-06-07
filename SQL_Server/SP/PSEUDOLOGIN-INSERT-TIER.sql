INSERT INTO dbo.Subscription(
    [name]
    ,[price]
)VALUES('No tier',0),('Short Glass',100),('Gleincairn',200),('Master Distiller',300);
SELECT * FROM dbo.Subscription;



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




SELECT * FROM Users


SELECT U.idUser
    , U.username
    , U.administrator
    , S.name
    , 'USA' as [Location]
FROM DB_USA.dbo.Users U 
INNER JOIN DB_USA.dbo.Subscription S ON U.idSubscription = S.idSubscription
WHERE username = 'adminUSA'
AND [password] = HASHBYTES('SHA2_256','admin')


USE DB_Ireland
/*
DELETE FROM dbo.Users
DBCC CHECKIDENT (Users,RESEED,0)

DELETE FROM dbo.Subscription
DBCC CHECKIDENT (Subscription,RESEED,0)*/

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
    ,'Oscar'
    ,'Hernandez'
    ,'adminIRL'
    ,HASHBYTES('SHA2_256','admin')
    ,'oscarhera@gmail.com'
);
SELECT * FROM Users


USE DB_Scotland 
/*
DELETE FROM dbo.Users
DBCC CHECKIDENT (Users,RESEED,0)

DELETE FROM dbo.Subscription
DBCC CHECKIDENT (Subscription,RESEED,0)*/

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
SELECT * FROM Users


USE DB_USA 
/*
DELETE FROM dbo.Users
DBCC CHECKIDENT (Users,RESEED,0)

DELETE FROM dbo.Subscription
DBCC CHECKIDENT (Subscription,RESEED,0)*/

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
    ,'Josue'
    ,'Gutierrez'
    ,'adminUSA'
    ,HASHBYTES('SHA2_256','admin')
    ,'josuegupi@gmail.com'
);
SELECT * FROM Users