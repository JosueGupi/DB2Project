USE DB_USA

GO
ALTER PROCEDURE SP_CreateReview_G @idUser INT, @country VARCHAR(16), @whisky VARCHAR(16), @description VARCHAR(64)
AS
DECLARE @idWhisky INT
BEGIN TRY
	IF @country = 'USA'
	BEGIN
		SELECT @idWhisky = idWhisky FROM DB_USA.dbo.Whisky WHERE name = @whisky
		INSERT DB_USA.dbo.Review (idUser, idWhisky, description)
			VALUES (@idUser,@idWhisky,@description)
		SELECT idReview, idUser, idWhisky, description
		FROM DB_USA.dbo.Review
		WHERE idReview = SCOPE_IDENTITY()
	END
	IF @country = 'Ireland'
	BEGIN
		SELECT @idWhisky = idWhisky FROM DB_Ireland.dbo.Whisky WHERE name = @whisky		
		INSERT DB_Ireland.dbo.Review (idUser, idWhisky, description)
			VALUES (@idUser,@idWhisky,@description)
		SELECT idReview, idUser, idWhisky, description
		FROM DB_Ireland.dbo.Review
		WHERE idReview = SCOPE_IDENTITY()
	END
	IF @country = 'Scotland'
	BEGIN
		SELECT @idWhisky = idWhisky FROM DB_Scotland.dbo.Whisky WHERE name = @whisky		
		INSERT DB_Scotland.dbo.Review (idUser, idWhisky, description)
			VALUES (@idUser,@idWhisky,@description)
		SELECT idReview, idUser, idWhisky, description
		FROM DB_Scotland.dbo.Review
		WHERE idReview = SCOPE_IDENTITY()
	END
END TRY
BEGIN CATCH
	SELECT 'ERROR'
END CATCH
