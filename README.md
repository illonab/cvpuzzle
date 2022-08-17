# CV Puzzle

The service allows to build and download your personal resume.
The goal was to make it interactive, so that users see what they build rightaway.


## How to start client and server in one terminal window

1. Clone the repository
1. Run `npm install` in the root folder
1. Run `npm run dev` in the root folder

## How to start client separately

1. Clone the repository
1. Copy `.env.example` to `.env` in the root folder
1. Run `npm install` in the root folder
1. Run `npm run client` in the root folder

## How to start server separately

1. Clone the repository
1. Copy `.env.example` to `.env` in the root folder
1. Run `npm install` in the root folder
1. Run `npm run server` in the root folder

By default client is running on port `3000` and server is running on port `8080`.
See `.env` to change these values.

## How to clean the database

The sevice uses filesystem based database RocksDB. It is configured to use `/dbfolder` as the root folder for the database.
To cleand the database
1. Stop the server
1. Remove the `/dbfolder` folder
1. Start the server again

The database should now be clean.

## Presentation
https://docs.google.com/presentation/d/1O7lzm9JDRsEDwwOG69tJnDJGAHyih4kUD93tWM0XdJA/edit?usp=sharing