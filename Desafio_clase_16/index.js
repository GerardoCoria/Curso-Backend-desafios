//SERVIDOR WEB
//DECLARACION DE VARIABLES
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
const mysql = require('mysql');
const connectMysql = require('express-myconnection');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//CONEXION A MYSQL
app.use(connectMysql(mysql, {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'desafio_clase_16'
}, 'single'));

//CONEXION A SQLITE
const dbName = path.resolve(__dirname, 'db', 'ecommerce.sqlite');
const db = new sqlite.Database(dbName, err => {
    if (err) {
        console.log(err.message);
    }
    else{
        console.log('Conectado a SQLite');
    }
});

//CREACION DE LA TABLA EN SQLITE
const sqlCreate = 'CREATE TABLE IF NOT EXISTS messages(message TEXT, user TEXT, time INTEGER)';
db.run(sqlCreate, err => {
    if (err) {
        console.log(err.message);
    }
    else{
        console.log('Tabla sqlite creada');
    }
});

//traer los datos de sqlite y mysql
// ver la logica a desarrollar aca:
//RENDERIZADO DE LAS TABLAS SQLITE Y MYSQL


app.get('/', (req, res) => {
    const products = [];
    const messages =  [];

    const sql = 'SELECT * FROM messages';
    db.all(sql, [], (err, rows) => {
        if(err){
            console.log(err.message);
        }
        else{
            console.log('rows msj!:', rows);
        }
    })
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM products', (err, rows) => {
            if (error) {
                console.log(err.message);
            }
            else{
                console.log('Conectado a MySQL');
                console.log(rows);
                console.log('producto 1!: ' + rows[0].name);
            }
        });
    });
    
    res.render('index', {messages, products});
});

//INSERTAR DATOS EN SQLITE
app.post('/',(req, res) => {
    const sqliteNew = 'INSERT INTO messages(user, message, time) VALUES(?,?,?)';
    const newSqlite = [req.body.user, req.body.message, moment()];
    db.run(sqliteNew, newSqlite, err => {
        if (err) {
            console.log(err.message);
        }
        else{
            res.redirect('/');
        }
    })
})

//INSERTAR DATOS EN MYSQL
app.post('/products', (req, res) => {
    const data = req.body;
    req.getConnection((error, conn) => {
        conn.query('INSERT INTO products set ?', [data], (err, rows) => {
            console.log(rows);  
        })
    })
    res.redirect('/');
})

//BORRAR MENSAJES DE SQLITE
app.post('/del', (req, res) => {
    const sqliteDel = 'DELETE FROM messages';
    db.run(sqliteDel, err => {
        if (err) {
            console.log(err.message);
        }
        else{
            res.redirect('/');
        }
    })
})

//PLANTILLAS EJS
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

io.on('connection', socket=>{
    console.log(`Nueva conexión, nuevo cliente N° ${socket.id} (soy el server)`);
});

app.get('/*', (req, res) => {
    res.send('<h1>Error 404: página no encontrada</h1>');
});