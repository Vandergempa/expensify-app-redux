// In this file express is serving up our public directory in production.

const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// For any get request, we want to serve up the index.html file in the public folder, otherwise 
// "cannot GET" error message.
// in app.get: first argument is the path 
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up and running, all good!')
});