USE [DB_USA]
GO

/****** Object:  View [dbo].[View_Client_Report]    Script Date: 20/6/2022 18:43:21 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER VIEW [dbo].[View_Product_Report]
AS
SELECT W.name AS Whisky, A.quantity + B.quantity + C.quantity AS Quantity, 
	   COUNT(WS.idWhisky) AS NumSales, T.name AS Type, 'USA' AS Country,
	   S.date
FROM DB_USA.dbo.Whisky AS W
INNER JOIN DB_USA.dbo.InventoryA AS A
	ON W.idWhisky = A.idWhisky
INNER JOIN DB_USA.dbo.InventoryB AS B
	ON W.idWhisky = B.idWhisky
INNER JOIN DB_USA.dbo.InventoryC AS C
	ON W.idWhisky = C.idWhisky
INNER JOIN DB_USA.dbo.WhiskyXSale AS WS
	ON W.idWhisky = WS.idWhisky
INNER JOIN DB_USA.dbo.WhiskyType AS T
	ON W.idWhiskyType = T.idWhiskyType
INNER JOIN DB_USA.dbo.Sale AS S
	ON WS.idSale = S.idSale
GROUP BY W.name, A.quantity, B.quantity, C.quantity, T.name, S.date
UNION 
SELECT W.name AS Whisky, A.quantity + B.quantity + C.quantity AS Quantity, 
	   COUNT(WS.idWhisky) AS NumSales, T.name AS Typee, 'Ireland' AS Country,
	   S.date
FROM DB_Ireland.dbo.Whisky AS W
INNER JOIN DB_Ireland.dbo.InventoryA AS A
	ON W.idWhisky = A.idWhisky
INNER JOIN DB_Ireland.dbo.InventoryB AS B
	ON W.idWhisky = B.idWhisky
INNER JOIN DB_Ireland.dbo.InventoryC AS C
	ON W.idWhisky = C.idWhisky
INNER JOIN DB_Ireland.dbo.WhiskyXSale AS WS
	ON W.idWhisky = WS.idWhisky
INNER JOIN DB_Ireland.dbo.WhiskyType AS T
	ON W.idWhiskyType = T.idWhiskyType
INNER JOIN DB_Ireland.dbo.Sale AS S
	ON WS.idSale = S.idSale
GROUP BY W.name, A.quantity, B.quantity, C.quantity, T.name, S.date
UNION 
SELECT W.name AS Whisky, A.quantity + B.quantity + C.quantity AS Quantity, 
	   COUNT(WS.idWhisky) AS NumSales, T.name AS Type, 'Scotland' AS Country,
	   S.date
FROM DB_Scotland.dbo.Whisky AS W
INNER JOIN DB_Scotland.dbo.InventoryA AS A
	ON W.idWhisky = A.idWhisky
INNER JOIN DB_Scotland.dbo.InventoryB AS B
	ON W.idWhisky = B.idWhisky
INNER JOIN DB_Scotland.dbo.InventoryC AS C
	ON W.idWhisky = C.idWhisky
INNER JOIN DB_Scotland.dbo.WhiskyXSale AS WS
	ON W.idWhisky = WS.idWhisky
INNER JOIN DB_Scotland.dbo.WhiskyType AS T
	ON W.idWhiskyType = T.idWhiskyType
INNER JOIN DB_Scotland.dbo.Sale AS S
	ON WS.idSale = S.idSale
GROUP BY W.name, A.quantity, B.quantity, C.quantity, T.name, S.date
GO


