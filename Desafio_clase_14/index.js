const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const apiRoutes =require('./routers')
app.use('/api', apiRoutes);

app.use(express.static(__dirname + 'public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

const connectedServer = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
connectedServer.on('error', (err) => {
    console.log(err);
})

module.exports = app;