//Cargar libreria
let mongoose = require("mongoose");
//Cargar configuracion
let appConfig =  require("../config");

let connectionPromise = mongoose.connect(appConfig.fullUrl);

connectionPromise.then(function(result){
    console.log("DB Connection successfully");
    console.log(result);
}).catch(function(err){
    console.log("Error connecting with DB");
    console.log(err);

});

