USE DB_USA

GO
ALTER PROCEDURE SP_SetLocationUser @country VARCHAR(16), @idUser INT, @latitude FLOAT, @lentgh FLOAT
									
AS
BEGIN
DECLARE @locationUser GEOGRAPHY
SET @locationUser = geography::Point(@latitude,@lentgh,4326)

BEGIN TRY 
	UPDATE DB_USA.dbo.Users
	SET location = @locationUser
	WHERE @country = 'USA'
	AND idUser = @idUser

	UPDATE DB_Ireland.dbo.Users
	SET location = @locationUser
	WHERE @country = 'Ireland'
	AND idUser = @idUser

	UPDATE DB_Scotland.dbo.Users
	SET location = @locationUser
	WHERE @country = 'Scotland'
	AND idUser = @idUser

	SELECT 'Todo bien'
END TRY
BEGIN CATCH
	SELECT 'Error' AS ALGOSALIOMAL
END CATCH
END