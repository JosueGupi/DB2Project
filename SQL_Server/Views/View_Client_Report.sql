USE [DB_USA]
GO

/****** Object:  View [dbo].[View_Client_Report]    Script Date: 20/6/2022 18:43:21 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER VIEW [dbo].[View_Client_Report]
AS
SELECT U.username, 'USA' AS Country, S.name AS Subscription, COUNT(Sa.idSale) AS NumSales, 
	   SUM(W.price) AS Total, Sa.date 
FROM DB_USA.dbo.Users AS U
INNER JOIN DB_USA.dbo.Subscription AS S
	ON U.idSubscription = S.idSubscription
INNER JOIN DB_USA.dbo.Sale AS Sa
	ON U.idUser = Sa.idUser
INNER JOIN DB_USA.dbo.WhiskyXSale AS W 
	ON Sa.idSale = W.idSale
GROUP BY U.username, S.name, Sa.date 
UNION 
SELECT U.username, 'Ireland' AS Country, S.name AS Subscription, COUNT(Sa.idSale) AS NumSales, 
	   SUM(W.price) AS Total, Sa.date 
FROM DB_Ireland.dbo.Users AS U
INNER JOIN DB_Ireland.dbo.Subscription AS S
	ON U.idSubscription = S.idSubscription
INNER JOIN DB_Ireland.dbo.Sale AS Sa
	ON U.idUser = Sa.idUser
INNER JOIN DB_Ireland.dbo.WhiskyXSale AS W 
	ON Sa.idSale = W.idSale
GROUP BY U.username, S.name, Sa.date 
UNION 
SELECT U.username, 'Scotland' AS Country, S.name AS Subscription, COUNT(Sa.idSale) AS NumSales, 
	   SUM(W.price) AS Total, Sa.date 
FROM DB_Scotland.dbo.Users AS U
INNER JOIN DB_Scotland.dbo.Subscription AS S
	ON U.idSubscription = S.idSubscription
INNER JOIN DB_Scotland.dbo.Sale AS Sa
	ON U.idUser = Sa.idUser
INNER JOIN DB_Scotland.dbo.WhiskyXSale AS W 
	ON Sa.idSale = W.idSale
GROUP BY U.username, S.name, Sa.date  
GO

SELECT * FROM [dbo].[View_Client_Report]

