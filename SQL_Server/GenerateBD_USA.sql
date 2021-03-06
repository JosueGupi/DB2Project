USE [DB_USA]
GO
/****** Object:  Table [dbo].[InventoryA]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryA](
	[idIventory] [int] IDENTITY(1,1) NOT NULL,
	[idWhisky] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[price] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idIventory] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventoryB]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryB](
	[idIventory] [int] IDENTITY(1,1) NOT NULL,
	[idWhisky] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[price] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idIventory] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventoryC]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryC](
	[idIventory] [int] IDENTITY(1,1) NOT NULL,
	[idWhisky] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[price] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idIventory] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Review]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Review](
	[idReview] [int] IDENTITY(1,1) NOT NULL,
	[idWhisky] [int] NOT NULL,
	[idUser] [int] NOT NULL,
	[description] [varchar](64) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idReview] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sale]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sale](
	[idSale] [int] IDENTITY(1,1) NOT NULL,
	[idStore] [int] NOT NULL,
	[idUser] [int] NOT NULL,
	[idShipping] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idSale] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shipping]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shipping](
	[idShipping] [int] IDENTITY(1,1) NOT NULL,
	[priceXKm] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idShipping] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Store]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Store](
	[idStore] [int] IDENTITY(1,1) NOT NULL,
	[location] [int] NOT NULL,
	[dimensions] [geography] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idStore] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Subscription]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Subscription](
	[idSubscription] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](16) NOT NULL,
	[price] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idSubscription] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Supplier]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Supplier](
	[idSupplier] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](16) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idSupplier] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[idUser] [int] IDENTITY(1,1) NOT NULL,
	[idSubscription] [int] NOT NULL,
	[administrator] [int] NOT NULL,
	[name] [varchar](16) NOT NULL,
	[lastName] [varchar](16) NOT NULL,
	[username] [varchar](32) NOT NULL,
	[password] [varchar](32) NOT NULL,
	[email] [varchar](32) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idUser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Whisky]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Whisky](
	[idWhisky] [int] IDENTITY(1,1) NOT NULL,
	[idWhiskyType] [int] NOT NULL,
	[idSupplier] [int] NOT NULL,
	[idSubscription] [int] NOT NULL,
	[name] [varchar](16) NOT NULL,
	[aged] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idWhisky] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WhiskyType]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WhiskyType](
	[idWhiskyType] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](16) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idWhiskyType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WhiskyXSale]    Script Date: 1/6/2022 19:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WhiskyXSale](
	[idWhiskyXSale] [int] IDENTITY(1,1) NOT NULL,
	[idWhisky] [int] NOT NULL,
	[idSale] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[price] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idWhiskyXSale] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Errors]    Script Date: 13/6/2022 22:25:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Errors](
	[Name] [varchar](max) NOT NULL,
	[Number] [int] NOT NULL,
	[State] [int] NOT NULL,
	[Severity] [int] NOT NULL,
	[Line] [int] NOT NULL,
	[Procedures] [varchar](max) NOT NULL,
	[Message] [varchar](max) NOT NULL,
	[Date] [date] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShoppingCart]    Script Date: 13/6/2022 22:25:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShoppingCart](
	[idShoppingCart] [int] IDENTITY(1,1) NOT NULL,
	[idUser] [int] NOT NULL,
	[idWhisky] [int] NOT NULL,
	[bought] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idShoppingCart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InventoryA]  WITH CHECK ADD FOREIGN KEY([idWhisky])
REFERENCES [dbo].[Whisky] ([idWhisky])
GO
ALTER TABLE [dbo].[InventoryB]  WITH CHECK ADD FOREIGN KEY([idWhisky])
REFERENCES [dbo].[Whisky] ([idWhisky])
GO
ALTER TABLE [dbo].[InventoryC]  WITH CHECK ADD FOREIGN KEY([idWhisky])
REFERENCES [dbo].[Whisky] ([idWhisky])
GO
ALTER TABLE [dbo].[Review]  WITH CHECK ADD FOREIGN KEY([idUser])
REFERENCES [dbo].[Users] ([idUser])
GO
ALTER TABLE [dbo].[Review]  WITH CHECK ADD FOREIGN KEY([idWhisky])
REFERENCES [dbo].[Whisky] ([idWhisky])
GO
ALTER TABLE [dbo].[Sale]  WITH CHECK ADD FOREIGN KEY([idShipping])
REFERENCES [dbo].[Shipping] ([idShipping])
GO
ALTER TABLE [dbo].[Sale]  WITH CHECK ADD FOREIGN KEY([idStore])
REFERENCES [dbo].[Store] ([idStore])
GO
ALTER TABLE [dbo].[Sale]  WITH CHECK ADD FOREIGN KEY([idUser])
REFERENCES [dbo].[Users] ([idUser])
GO
ALTER TABLE [dbo].[ShoppingCart]  WITH CHECK ADD FOREIGN KEY([idUser])
REFERENCES [dbo].[Users] ([idUser])
GO
ALTER TABLE [dbo].[ShoppingCart]  WITH CHECK ADD FOREIGN KEY([idWhisky])
REFERENCES [dbo].[Whisky] ([idWhisky])
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD FOREIGN KEY([idSubscription])
REFERENCES [dbo].[Subscription] ([idSubscription])
GO
ALTER TABLE [dbo].[Whisky]  WITH CHECK ADD FOREIGN KEY([idSubscription])
REFERENCES [dbo].[Subscription] ([idSubscription])
GO
ALTER TABLE [dbo].[Whisky]  WITH CHECK ADD FOREIGN KEY([idSupplier])
REFERENCES [dbo].[Supplier] ([idSupplier])
GO
ALTER TABLE [dbo].[Whisky]  WITH CHECK ADD FOREIGN KEY([idWhiskyType])
REFERENCES [dbo].[WhiskyType] ([idWhiskyType])
GO
ALTER TABLE [dbo].[WhiskyXSale]  WITH CHECK ADD FOREIGN KEY([idSale])
REFERENCES [dbo].[Sale] ([idSale])
GO
ALTER TABLE [dbo].[WhiskyXSale]  WITH CHECK ADD FOREIGN KEY([idWhisky])
REFERENCES [dbo].[Whisky] ([idWhisky])
GO
