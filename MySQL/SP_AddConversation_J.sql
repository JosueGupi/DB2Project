CREATE DEFINER=`root`@`%` PROCEDURE `SP_AddConversation_J`(IN idTicket INT, IN users VARCHAR(32), IN comments VARCHAR(512))
BEGIN
	INSERT INTO employeedata.Conversation
	(
	idEmployeeRating,
	Username,
	DateC,
	Commentary)
	VALUES
	(
	idTicket,
	users,
	CURDATE(),
	comments);
END