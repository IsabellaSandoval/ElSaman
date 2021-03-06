const MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


// Conectarse a Base de Datos
MongoClient.connect('mongodb+srv://elsamandb-kszmw.mongodb.net/ElSaman', 
{
    auth: {
        user: 'Isabella',
        password: 'contraseña123'
    }
}, function (err, client) {
    if (err) throw err;

    db = client.db('ElSaman');

    // Iniciar servidor
    app.listen(process.env.PORT || 5000);
});


// Dirección del index
app.get('/', (req, res) => {
    res.render('index');
});


app.get('//SynjZ/LXbUZ/',(req,res)=>{
    res.render('index');
});

// Dirección de visualización de productos de Embriones
app.get('/genetica/embriones', (req, res) => {

    var embrionesCollection = db.collection('Embriones').find();

    //Filtro por precio
    if (req.query.min && req.query.max)
    embrionesCollection.filter({
            precio: {
                $gte: parseInt(req.query.min),
                $lte: parseInt(req.query.max)

            }
        });


    //Filtro por edad
    if (req.query.min_ed && req.query.max_ed)
    embrionesCollection.filter({
            edad: {
                $gte: parseInt(req.query.min_ed),
                $lte: parseInt(req.query.max_ed)

            }
        });

    //Filtro por sexo
    if (req.query.sexo)
    embrionesCollection.filter({
            sexo: req.query.sexo
        });

    if (req.query.sexo)
    embrionesCollection.filter({
            sexo: req.query.sexo
        });

        embrionesCollection.toArray((err, result) => {

        res.render('embriones', {
            Embriones: result
        });
    })
});

//Dirección de visualización de cada producto de novillas
app.get('/genetica/embriones/:id', (req, res) => {

    var embrionesCollection = db.collection('Embriones')
        .find({
            _id: new ObjectID(req.params.id)
        })
        .toArray((err, result) => {
            // console.log(result[0]);
            res.render('embrio_ver', {
                volver: "/genetica/embriones",
                Embrion: result[0]

            });
        });
});

// Dirección de visualización de productos de Terneras
app.get('/genetica/terneras', (req, res) => {

    var ternerasCollection = db.collection('Terneras').find();

    //Filtro por precio
    if (req.query.min && req.query.max)
        ternerasCollection.filter({
            precio: {
                $gte: parseInt(req.query.min),
                $lte: parseInt(req.query.max)

            }
        });


    //Filtro por edad
    if (req.query.min_ed && req.query.max_ed)
        ternerasCollection.filter({
            edad: {
                $gte: parseInt(req.query.min_ed),
                $lte: parseInt(req.query.max_ed)

            }
        });

    //Filtro por sexo
    if (req.query.sexo)
        ternerasCollection.filter({
            sexo: req.query.sexo
        });

    if (req.query.sexo)
        ternerasCollection.filter({
            sexo: req.query.sexo
        });

    ternerasCollection.toArray((err, result) => {

        res.render('terneras', {
            Terneras: result
        });
    })
});


//Dirección de visualización de cada producto de terneras
app.get('/genetica/terneras/:id', (req, res) => {

    var ternerasCollection = db.collection('Terneras')
        .find({
            _id: new ObjectID(req.params.id)
        })
        .toArray((err, result) => {
            // console.log(result[0]);
            res.render('ternera_ver', {
                volver: "/genetica/terneras",
                Ternera: result[0]

            });
        });

});

// Dirección de visualización de productos de Novillas
app.get('/genetica/novillas', (req, res) => {

    var novillasCollection = db.collection('Novillas').find();

    //Filtro por precio
    if (req.query.min && req.query.max)
    novillasCollection.filter({
            precio: {
                $gte: parseInt(req.query.min),
                $lte: parseInt(req.query.max)

            }
        });


    //Filtro por edad
    if (req.query.min_ed && req.query.max_ed)
    novillasCollection.filter({
            edad: {
                $gte: parseInt(req.query.min_ed),
                $lte: parseInt(req.query.max_ed)

            }
        });

    //Filtro por sexo
    if (req.query.sexo)
    novillasCollection.filter({
            sexo: req.query.sexo
        });

    if (req.query.sexo)
    novillasCollection.filter({
            sexo: req.query.sexo
        });

        novillasCollection.toArray((err, result) => {

        res.render('novillas', {
            Novillas: result
        });
    })
});

//Dirección de visualización de cada producto de novillas
app.get('/genetica/novillas/:id', (req, res) => {

    var novillasCollection = db.collection('Novillas')
        .find({
            _id: new ObjectID(req.params.id)
        })
        .toArray((err, result) => {
            // console.log(result[0]);
            res.render('novilla_ver', {
                volver: "/genetica/novillas",
                Novilla: result[0]

            });
        });
});


app.get('/nosotros',(req,res)=>{
    res.render('nosotros');
});

app.get('/servicios/ventadeganado',(req,res)=>{
    res.render('ventaGanado');
});

app.get('/servicios/asesoriatecnica',(req,res)=>{
    res.render('asesoriaTecnica');
});

app.get('/contacto',(req,res)=>{
    res.render('contacto');
});