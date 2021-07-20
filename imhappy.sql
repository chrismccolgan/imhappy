USE [master]
GO

IF db_id('imhappy') IS NULL
  CREATE DATABASE [imhappy]
GO

USE [imhappy]
GO

DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Category];
DROP TABLE IF EXISTS [Entry];
GO

CREATE TABLE [UserProfile] (
  [Id] INTEGER IDENTITY PRIMARY KEY NOT NULL,
  [FirebaseUserId] NVARCHAR(28) NOT NULL,
  [FirstName] NVARCHAR(50) NOT NULL,
  [LastName] NVARCHAR(50) NOT NULL,
  [Email] NVARCHAR(255) NOT NULL,
  [Birthday] DATETIME NOT NULL,
  [CreateDateTime] DATETIME NOT NULL,

  CONSTRAINT [UQ_FirebaseUserId] UNIQUE([FirebaseUserId]),
  CONSTRAINT [UQ_Email] UNIQUE([Email])
)

CREATE TABLE [Category] (
  [Id] INTEGER IDENTITY PRIMARY KEY NOT NULL,
  [Name] NVARCHAR(50) NOT NULL,
  [Emoji] NVARCHAR(10)
)

CREATE TABLE [Moment] (
  [Id] INTEGER IDENTITY PRIMARY KEY NOT NULL,
  [Date] DATETIME NOT NULL,
  [Entry] NVARCHAR(MAX) NOT NULL,
  [CategoryId] INTEGER NOT NULL DEFAULT 1,
  [UserProfileId] INTEGER NOT NULL,
  [IsDeleted] BIT NOT NULL DEFAULT 0,
  [IsSignificant] BIT NOT NULL DEFAULT 0,

  CONSTRAINT [FK_Moment_Category] FOREIGN KEY ([CategoryId]) REFERENCES [Category] ([Id]),
  CONSTRAINT [FK_Moment_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)
GO

SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile]
  ([Id], [FirebaseUserId], [FirstName], [LastName], [Email], [Birthday], [CreateDateTime])
VALUES
  (1, 'zI5r0JzDXKfKLFLPbZnSSs3mq3A2', 'Foo', 'Barington', 'test@test.com', '1990-11-26', '2021-7-11'),
  (2, '518MUTqSvjWU9G114DSIvqoxDd72', 'Test', 'Two', 'test2@test.com', '1990-01-01', '2021-7-11');
SET IDENTITY_INSERT [UserProfile] OFF

SET IDENTITY_INSERT [Category] ON
INSERT INTO [Category]
  ([Id], [Name], [Emoji])
VALUES 
  (1, 'Uncategorized', N'😊'),
  (2, 'Happy', N'😊'),
  (3, 'Heart', N'💖'),
  (4, 'Birthday cake', N'🎂'),
  (5, 'Lucky', N'🍀'),
  (6, 'Trophy', N'🏆'),
  (7, 'Dog', N'🐶');
SET IDENTITY_INSERT [Category] OFF

SET IDENTITY_INSERT [Moment] ON
INSERT INTO [Moment] 
  ([Id], [Date], [Entry], [CategoryId], [UserProfileId], [IsDeleted], [IsSignificant])
VALUES 
  (1, '2020-05-28', 'This is a test entry.', 1, 1, 0, 0), 
  (2, '2020-12-28', 'This is a test entry 2.', 5, 2, 0, 0); 
SET IDENTITY_INSERT [Moment] OFF