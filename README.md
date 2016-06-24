# base-project
A tiny base project for a REST API with NodeJS.


## A basic To do list

You will create a REST API service with NodeJS to serve a "Transport" object with CRUD actions. A graphical user interface must be realized with AngularJS (or another framework) to use the REST API.

 * Create a REST API to serve an Transport object.
 * A transport object is defined by : an ID (uuid), a title (string), a departure date (datetime), an arrival date (datetime), a departure point (geocode), an arrival point (geocode), a status (PROPOSED, CONFIRMED, RESERVED, CHECKEDIN, CHECKEDOUT).
 * Create a GUI with JS framework of your choice, this GUI must be served by the NodeJS server. We access the GUI from the "/gui" URL prefix.
 * The transport objects are stored in-memory.
 * The GUI contains 2 pages : a list of transports, all informations are presented into a table, update, delete actions in a column, and a page with a form to add or edit a transport.

We start the server with following command : npm start, do not forget tests (Mocha) and documentation (APIDOCJS.com) !

## To easy for you ?

The basic "to do" list is for beginners ? The next tasks are really good points for out project :

 * Create a docker image with this server
 * Use a DBMS to store the transport objects
 * Show the transport objects on a Google Map


## Still too easy ???

 * Create a deploy script to update a docker image on the server and restart it after tests success


## What will make the difference ?

 - It must work, easy to launch ;
 - Code quality ;
 - Tested and Documented ...
