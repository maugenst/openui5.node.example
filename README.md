# openui5.node.example
This project ist meant to be a starting point of an openui5 development using nodejs/express as a server.

## Installation
```
npm install openui5.node.example
npm start
```

Open the overview page in your browser:

[http://localhost:3000](http://localhost:3000)

## NodeJS / Express

app.js

```
.
app.use('/', express.static('static'));
app.use('/resources', express.static('node_modules/openui5.runtime.downloader/lib/1.46.9/resources'));
.
```





