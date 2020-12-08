# Angular-Core-InlineTableEditing

This project is to learn Angular and .Net Core WebApi

VS 2019,
ASP.Net Core 3.1

Steps
1. Create API project
2. Add Model classes
3. Create a new class for DBContext, add DbSets in the context.
4. Create Physical DB using DBMigrations, using Dependancy injection.(see the commit for the changes)
   -Specify DB Provider in Startup.cs(Sql server, mysql,etc)
   -Add missing Nuget package: Microsoft.EntityFrameworkCore.SqlServer
   -Add connection string in appSettings.json
   -Run command: Add-Migration "initialDB"
   -Run Command: Update-Databse
   -The physical database will be created in SQL server
   
