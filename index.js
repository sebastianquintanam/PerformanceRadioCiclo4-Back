console.log("Cargando config...");

//importar las dependencias
const express = require("express");
var bodyParser = require("body-parser")

//Cargar config app web
const PORT = process.env.PORT || 3500;

console.log("Inicializar la app web...");
//Inicializar una app web
const app = express();

// 1) Metodo HTTP (verbos HTTP)
// 2) Ruta virtual
// 3) El algoritmo que yo programo para responder esa peticion

console.log("Configurando routers...");
const oyenteRouter = require("./routes/routerOyente")

//Configuracion de routers
app.use(bodyParser.json());
app.use("/api/oyentes", oyenteRouter);

app.get(
    '/', 
    function (req, res) {
        
        res.send('Home Page!');
});

console.log("Inicializando servidor...")

let server = app.listen(
    PORT,
    function (){
        console.log(`La aplicacion web esta escuchando en el puerto: ` + PORT);
    }
);