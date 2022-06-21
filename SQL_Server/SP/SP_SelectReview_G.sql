USE DB_USA

GO
ALTER PROCEDURE SP_SelectReview_G
AS
BEGIN 
	SELECT idReview, idUser, nameUser, idWhisky, whisky, description, image, Country
	FROM OPENJSON(  -- open json for image format
	(   -- select all reviews of the country
		SELECT idReview, R.idUser, U.name AS nameUser, R.idWhisky, W.name whisky, 
		description, W.image, 'USA' AS Country
		FROM DB_USA.dbo.Review AS R
		INNER JOIN DB_USA.dbo.Users AS U
			ON R.idUser = U.idUser
		INNER JOIN DB_USA.dbo.Whisky AS W
			ON R.idWhisky = W.idWhisky
		FOR JSON PATH)
	) WITH (idReview INT, idUser INT, nameUser VARCHAR(16), idWhisky INT, whisky VARCHAR(16),
	 description VARCHAR(16), image VARCHAR(MAX), Country VARCHAR(16))
	UNION ALL 
	SELECT idReview, idUser, nameUser, idWhisky, whisky, description, image, Country
	FROM OPENJSON( -- open json for image format
	(   -- select all reviews of the country
		SELECT idReview, R.idUser, U.name AS nameUser, R.idWhisky, W.name whisky, 
		description, W.image, 'USA' AS Country
		FROM DB_Ireland.dbo.Review AS R
		INNER JOIN DB_Ireland.dbo.Users AS U
			ON R.idUser = U.idUser
		INNER JOIN DB_Ireland.dbo.Whisky AS W
			ON R.idWhisky = W.idWhisky
		FOR JSON PATH)
	) WITH (idReview INT, idUser INT, nameUser VARCHAR(16), idWhisky INT, whisky VARCHAR(16),
	 description VARCHAR(16), image VARCHAR(MAX), Country VARCHAR(16))
	UNION ALL
	SELECT idReview, idUser, nameUser, idWhisky, whisky, description, image, Country
	FROM OPENJSON( -- open json for image format
	(   -- select all reviews of the country
		SELECT idReview, R.idUser, U.name AS nameUser, R.idWhisky, W.name whisky, 
		description, W.image, 'USA' AS Country
		FROM DB_Scotland.dbo.Review AS R
		INNER JOIN DB_Scotland.dbo.Users AS U
			ON R.idUser = U.idUser
		INNER JOIN DB_Scotland.dbo.Whisky AS W
			ON R.idWhisky = W.idWhisky
		FOR JSON PATH)
	) WITH (idReview INT, idUser INT, nameUser VARCHAR(16), idWhisky INT, whisky VARCHAR(16),
	 description VARCHAR(16), image VARCHAR(MAX), Country VARCHAR(16))
END