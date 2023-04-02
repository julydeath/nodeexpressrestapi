$ nano hello-world.js
const express = require('express');
const app = express();
const port = 3000;

The port will be used a bit later, when we tell the app to listen to requests. These three lines are boilerplate - but the great thing is, that's all the boilerplate there is!

Now, we can create a simple GET endpoint right beneath the boilerplate. When a user hits the endpoint with a GET request, the message "Hello World, from express" will be returned (and rendered in the browser or displayed on the console).

We'd like to set it to be on the home page, so the URL for the endpoint is /:

app.get('/', (req, res) => {
res.send('Hello World, from express');
});
At this point, let's start our clients:

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
Let's run the application and visit the only endpoint we have via our browser:

$ node hello-world.js
Hello world app listening on port 3000!
