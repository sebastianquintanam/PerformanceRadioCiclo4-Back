const express = require("express");
const router = express.Router();
const db = require("../baseDatos")

//leer oyente
router.get("/get/:idUsuario", function(req, res){
    let idUsuario = req.params.idUsuario;
    let usuario = db.getUsuario(idUsuario);
    res.json(usuario);
    res.status(200);
});

//crear oyente
router.post("/create", function(req, res){
    let newUsuario = req.body;
    let id = db.createUsuario(newUsuario);
    res.send(id);
});

//eliminar usuario
router.delete("/delete/:idUsuario", function(req, res){
    let idUsuario = req.params.idUsuario;
    db.deleteUsuario(idUsuario);
    res.send("El usuario se elimino correctamente");
    res.status(200);
});


module.exports = router;