USE DB_USA;  
GO  
CREATE PROCEDURE SP_ChangeLocation_J   
    @country varchar(32),   
    @storeNumber varchar(32),
    @latitude FLOAT,
    @lentgh FLOAT
AS   
BEGIN
    SET NOCOUNT ON; 
    BEGIN TRY
        UPDATE DB_USA.dbo.Store
        SET dimensions = geography::Point(@latitude,@lentgh,4326)
        WHERE idStore = 1
        AND @storeNumber = 'Store A'
        AND @country = 'USA'

        UPDATE DB_USA.dbo.Store
        SET dimensions = geography::Point(@latitude,@lentgh,4326)
        WHERE idStore = 2
        AND @storeNumber = 'Store B'
        AND @country = 'USA'

        UPDATE DB_USA.dbo.Store
        SET dimensions = geography::Point(@latitude,@lentgh,4326)
        WHERE idStore = 3
        AND @storeNumber = 'Store C'
        AND @country = 'USA'

        UPDATE DB_Ireland.dbo.Store
        SET dimensions = geography::Point(@latitude,@lentgh,4326)
        WHERE idStore = 1
        AND @storeNumber = 'Store A'
        AND @country = 'Ireland'

        UPDATE DB_Ireland.dbo.Store
        SET dimensions = geography::Point(@latitude,@lentgh,4326)
        WHERE idStore = 2
        AND @storeNumber = 'Store B'
        AND @country = 'Ireland'

        UPDATE DB_Ireland.dbo.Store
        SET dimensions = geography::Point(@latitude,@lentgh,4326)
        WHERE idStore = 3
        AND @storeNumber = 'Store C'
        AND @country = 'Ireland'

        UPDATE DB_Scotland.dbo.Store
        SET dimensions = geography::Point(@latitude,@lentgh,4326)
        WHERE idStore = 1
        AND @storeNumber = 'Store A'
        AND @country = 'Scotland'

        UPDATE DB_Scotland.dbo.Store
        SET dimensions = geography::Point(@latitude,@lentgh,4326)
        WHERE idStore = 2
        AND @storeNumber = 'Store B'
        AND @country = 'Scotland'

        UPDATE DB_Scotland.dbo.Store
        SET dimensions = geography::Point(@latitude,@lentgh,4326)
        WHERE idStore = 3
        AND @storeNumber = 'Store C'
        AND @country = 'Scotland'


        
    END TRY

    BEGIN CATCH
        SELECT 'ERROR'
    END CATCH
    SET NOCOUNT OFF;
END 






SELECT geography::Point(@latitude,@lentgh,4326) AS Ubicacion,
    'Aja' AS Aja

EXEC SP_ChangeLocation_J 'Scotland','Store B',51.53480425870272,-0.1526645862823428

SELECT 'USA' AS [Loation],[location] FROM DB_USA.dbo.Store
UNION
SELECT 'IRELAND' AS [Loation],[location] FROM DB_Ireland.dbo.Store
UNION
SELECT 'SCOTLAND' AS [Loation],[location] FROM DB_Scotland.dbo.Store

SELECT *FROM DB_USA.dbo.Store
SELECT *FROM DB_Ireland.dbo.Store
SELECT *FROM DB_Scotland.dbo.Store
