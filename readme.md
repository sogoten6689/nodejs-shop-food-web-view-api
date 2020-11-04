# Shop Nodejs Expression

## Prerequisites

### Before you continue, ensure you meet the following requirements:

* You have installed nodejs, npm.
* You are using a Linux or Mac OS machine. Windows is not currently supported.

# Guide
## Migrate table
* sequelize model:create --name foods --attributes name:string,imageUrl:string,foodDescription:string
* sequelize migration:create --name add-password-column-in-users
## run migrate server
* heroku run bash
* sequelize db:migrate