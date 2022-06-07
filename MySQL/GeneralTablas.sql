USE employeedata;
CREATE TABLE JobType (
    idJobType int NOT NULL AUTO_INCREMENT,
    JobName varchar(16) NOT NULL,
    PRIMARY KEY (idJobType)
);

CREATE TABLE Employee (
    idEmployee int NOT NULL AUTO_INCREMENT,
    idJobType int NOT NULL,
    FirstName varchar(16) NOT NULL,
    LastName varchar(16) NOT NULL,
    LocalSalary int NOT NULL,
    DollarSalary int NOT NULL,
    PRIMARY KEY (idEmployee),
    FOREIGN KEY (idJobType) REFERENCES JobType(idJobType)
);

CREATE TABLE Delivery (
    idDelivery int NOT NULL AUTO_INCREMENT,
    idEmployee int NOT NULL,
    idSale int NOT NULL,
    idPreparation int NOT NULL,
    Country varchar(16) NOT NULL,
    PRIMARY KEY (idDelivery),
    FOREIGN KEY (idEmployee) REFERENCES Employee(idEmployee)
);
CREATE TABLE Preparation (
    idPreparation int NOT NULL AUTO_INCREMENT,
    idEmployee int NOT NULL,
    DateC date NOT NULL,
    Country varchar(16) NOT NULL,
    PRIMARY KEY (idPreparation),
    FOREIGN KEY (idEmployee) REFERENCES Employee(idEmployee)
);
CREATE TABLE EmployeeRating (
    idEmployeeRating INT NOT NULL AUTO_INCREMENT,
    idEmployee INT NOT NULL,
    Rating INT NOT NULL,
    Commentary VARCHAR(512) NOT NULL,
    Username VARCHAR(16) NOT NULL,
    PRIMARY KEY (idEmployeeRating),
    FOREIGN KEY (idEmployee) REFERENCES Employee(idEmployee)
);
CREATE TABLE Conversation (
    idConversation int NOT NULL AUTO_INCREMENT,
    idEmployeeRating int NOT NULL,
    Username varchar(32) NOT NULL,
    DateC date NOT NULL,
    Commentary varchar(512) NOT NULL,
    PRIMARY KEY (idConversation),
	FOREIGN KEY (idEmployeeRating) REFERENCES EmployeeRating(idEmployeeRating)
);
