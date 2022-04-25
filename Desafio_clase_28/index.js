const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const config = require ('./config');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const minimist = require('minimist');
const {fork} = require('child_process');
const {emit} = require('process');

app.use(cookieParser(['secret123abc']));
app.use(session({
    name: 'mySession',
    secret: 'mysecret123abc',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://gcoria1989:${config.DB_PASSWORD}@cluster0.c5lzx.mongodb.net/desafio_clase_26?retryWrites=true&w=majority`,
    })
}))

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const user = req.session.user;
    const username = user.split('@')[0];
    res.render('index.ejs', { username });
})

app.get('/register', (req, res) => {
    const username = req.session.user;
    res.render('register.ejs');
})

app.post('/register', (req, res) => {
    const {username, password} = req.body;
    const user = req.session.user;
    if(user == username) return res.redirect('/error-register');
    req.session.save(() => {
        console.log('usuario guardado');
    });
    res.redirect('/login');
})

app.get('/error-register', (req, res) => {
    res.render('error-register.ejs');
})

app.get('/login', (req, res) => {
    res.render('login');
})

function isValidPassword(user, password) {
    return bcrypt.compareSync(password, user.password);
}   

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    passport.use('login', new LocalStrategy(async(username, password, done) => {
      user.findOne({username}, (err, user) => {
          if(err){
              return done(err);
          }
            if(!user){
                return done(null, false);
            }
            if(!isValidPassword(user, password)){
                return done(null, false);
            }
            return done(null, user);
        })
    }))
    const user = req.session.user;
    if (user === username) return res.redirect('/');
    res.redirect('/error-login');
})

app.get('/error-login', (req, res) => {
    res.render('error-login');
})

app.get('/logout', (req, res) => {
    const user = req.session.user;
    const username = user.split('@')[0];
    req.session.destroy(() => {
        console.log('sesion destruida');
    });
    res.clearCookie('username');
    res.render('logout', {username});
})

//INFORMACION DEL PROCESO
app.get('/info', (req, res) => {
    const info = {
        arg: process.argv[2],
        ejec: process.argv[1],
        sop: process.platform,
        procId: process.pid,
        nodeVers: process.version,
        memoRss: process.memoryUsage().rss,
    }
    res.render('info.ejs', {info});
});

//NUMEROS ALEATORIOS-FORK
app.get('/random', (req, res) => {
    const numQuery = req.query.cant;
    let numero;
    if(numQuery == undefined){
        numero = 10;
    }
    else{
        numero = parseInt(numQuery);
    }
    const computo = fork('./calculo.js');
    computo.send(numero);
    computo.on('message', (data) => {
        res.send({data});
    })
})

//CONFIGURACION DEL PUERT0
const args = minimist(process.argv.slice(2),{
    alias:{p: 'port'},
});
app.listen(args.p, () => {
    console.log(`Server running on port ${args.p}`);
});