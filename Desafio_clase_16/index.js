//SERVIDOR WEB
const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const port = process.env.PORT || 3000;
const httpServer = http.createServer(app);
const io = socketIo(httpServer);
const moment = require('moment');
const sqlite = require('sqlite3');
const path = require('path');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const dbName = path.resolve(__dirname, 'db', 'ecommerce.sqlite');
const db = new sqlite.Database(dbName, err => {
    if (err) {
        console.log(err.message);
    }
    else{
        console.log('Conectado a SQLite');
    }
});

const sqlCreate = 'CREATE TABLE IF NOT EXISTS messages(message TEXT, user TEXT, time INTEGER)';
db.run(sqlCreate, err => {
    if (err) {
        console.log(err.message);
    }
    else{
        console.log('Tabla sqlite creada');
    }
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM messages';
    db.all(sql, [], (err, rows) => {
        if(err){
            console.log(err.message);
        }
        else{
            res.render('index', {messages: rows});
            console.log(rows);
        }
    })
})


app.post('/',(req, res) => {
    const sqliteNew = 'INSERT INTO messages(user, message, time) VALUES(?,?,?)';
    const newSqlite = [req.body.user, req.body.message, moment()];
    db.run(sqliteNew, newSqlite, err => {
        if (err) {
            console.log(err.message);
        }
        else{
            res.redirect('/');
            console.log('Mensaje insertado');
        }
    })
})

app.post('/del', (req, res) => {
    const sqliteDel = 'DELETE FROM messages';
    db.run(sqliteDel, err => {
        if (err) {
            console.log(err.message);
        }
        else{
            res.redirect('/');
            console.log('Mensaje eliminado');
        }
    })
})


app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// const products= []
// const msj = []


io.on('connection', socket=>{
    console.log(`Nueva conexión, nuevo cliente N° ${socket.id} (soy el server)`);

//     socket.emit('products', [...products]);
//     socket.emit('messages', [...msj]);

//     socket.on('new-product', product => {
//         products.push({
//             nameP: product.nameP,
//             price: product.price
//         });


//         io.emit('products', [...products]);
//     })

//     socket.on('new-message', (data) => {
//         msj.push(
//             {
//                 user: data.user,
//                 message: data.message,
//                 time: moment().format('DD/MM/YYYY HH:mm:ss')
//             }
//         );
//         io.emit('messages', [...msj]);
//     })
}
);

app.get('/*', (req, res) => {
    res.send('<h1>Error 404: página no encontrada</h1>');
})