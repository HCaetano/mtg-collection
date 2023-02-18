# MTG Collection Helper

![Peek 2022-03-21 08-25](https://user-images.githubusercontent.com/20730250/159253007-cad3e2a5-77c6-461e-a292-8aaf6b7c17ff.gif)

The gif is not the best due to it having its original file size reduced to comply with GitHub's 10mb file size limit. For a more in-depth demo of the app, check [this recording](https://www.loom.com/share/fb7a8c2ecea64632b327c4135112b951).

## What it does

The application makes requests to the [Scryfall API](https://scryfall.com/docs/api) in order to search for cards that can be saved to the database and then displayed to the user on the app's gallery. The goal is to create an application that will help me keep my [Magic: The Gathering](https://magic.wizards.com/en) collection updated without having to rely on Excel tables or paper notes. 

So far, the app only fetches, saves, displays and removes individual cards, the collection aspect of it is still upcoming. I've developed a simple RESTful back-end on Spring Boot which has the CRUD operations in place. Recently, I'm putting effort on making the front-end better: I added testing with Jest and I'm working on migrating the codebase to TypeScript. For a deeper look on the app's history, please check the [changelog](./CHANGELOG.md).

Feedback is welcome!

## How to run

 I'm using the following technologies in these versions:
 * PostgreSQL 14.2
 * Java (openJDK) v17.0.3
 * npm v6.14.16
 * node v14.19.1

It's important to note that both back and front-end are in the same repo, so it's helpful to have more than one terminal window open.

Steps to run:
* clone the project
* config the database (user and password on resources/application.yaml in the back-end folder) and run the service
* open the ```back-end``` folder on your favorite IDE and set up a ```gradle``` project
* run the back-end project
* in the terminal, navigate to the ```front-end``` folder and install dependencies with ```npm install```
* run the front-end with ```npm start```
* acess the page on ```http://localhost:3000/```
