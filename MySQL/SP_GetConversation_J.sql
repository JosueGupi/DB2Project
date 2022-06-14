CREATE PROCEDURE SP_GetConversation_J (IN idTicket int)
BEGIN
	SELECT Username
	,DateC
	,Commentary
	FROM employeedata.Conversation
    WHERE idEmployeeRating = idTicket;
END