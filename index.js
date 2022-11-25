console.log("Cargando config...");

//importar las dependencias
const express = require("express");
var bodyParser = require("body-parser")
let cors = require("cors")
let session = require("express-session");

//Cargar config app web
const appConfig = require("./config")

console.log("Inicializar la app web...");
//Inicializar una app web
require("./db/dbInitializer");
const app = express();

// 1) Metodo HTTP (verbos HTTP)
// 2) Ruta virtual
// 3) El algoritmo que yo programo para responder esa peticion

console.log("Configurando routers...");
const userDummyRouter = require("./routes/routerDummyUser")
const userRouter = require("./routes/routerUsers");


app.use(bodyParser.json());
app.use(cors());

//middleware para las variables de sesion
app.use(session({
    secret: "mipalabrasecreta",
    cookie: { maxAge: 60000, secure: false},
}));

//middleware para loguear cada peticion
app.use(function(req, res, next){
    if(req.session.MI_VAR > -1){
        req.session.MI_VAR = req.session.MI_VAR + 1; 
    }else{
        req.session.MI_VAR = 0;
    }
    
    console.log(req.session);
    next();
});

//Configuracion de routers
app.use("/api/usuariosDummy", userDummyRouter);
app.use("/api/usuarios", userRouter);

app.get(
    '/', 
    function (req, res) {
        
        res.send('Home Page!');
});

console.log("Inicializando servidor...")

let server = app.listen(
    appConfig.PORT,
    function (){
        console.log(`La aplicacion web esta escuchando en el puerto: ` + appConfig.PORT);
    }
);