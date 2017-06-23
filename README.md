# openui5.node.example
This project ist meant to be a starting point of an openui5 development using nodejs/express as a server.

So ... Here are the steps you need to take care of:

## Installation
```
npm install openui5.node.example
npm start
```

*Tada* ... at this point you already have a working OpenUI5 example. You can 
try it by open the overview page in your browser:

[http://localhost:3000](http://localhost:3000)

Feel free to change he paths according to your project setup.

Starting from here you can either use the code provided here and copy 
it to your project, or do it manually. Therefore follow the steps below.

## Manual Steps for creating a new project

```
mkdir my.new.project
cd my.new.project
npm init
```

## Add dependencies

```
npm install --save express
npm install --save openui5.runtime.downloader
```

## Prepare NodeJS / Express

Assuming you have installed NodeJS already, you need to setup your
express app in the following way.

Create an app.js containing the static routes exposed like here:

app.js

```
.
app.use('/', express.static('static'));
app.use('/resources', express.static('node_modules/openui5.runtime.downloader/lib/1.46.9/resources'));
.
```

## Create your OpenUI5 app

A good starting point to get an idea of how OpenUI5 works is here:
[OpenUI5.Org](http://openui5.org/getstarted.html)

Copy your example over to the static folder, adapt the ressources 
loading in the index.html:

```
<script id='sap-ui-bootstrap'
            src='../resources/sap-ui-core.js'
            data-sap-ui-theme='sap_belize'
            data-sap-ui-libs='sap.m'
            data-sap-ui-compatVersion='edge'
            data-sap-ui-preload='async'>
    </script>
```

## Start the server

```
node app.js
```

you then can access you app on [http://localhost:3000](http://localhost:3000)

# Conclusion

Right now we have a barely low number of examples, but you already 
get a feeling on how to start developing by just adding your own 
OpenUI5 application in your static folder. Feel free to change this 
project according to your needs, leave some comments or even more 
better, add your own examples in this project by creating a pull 
request to make life easier for others getting things started 
fast and easy.