const express = require("express");
const router = express.Router();
const db = require("../baseDatos")

//leer oyente
router.get("/get/:idOyente", function(req, res){
    let idOyente = req.params.idOyente;
    let oyente = db.getOyente(idOyente);
    res.json(oyente);
    res.status(200);
});

//crear oyente
router.post("/create", function(req, res){
    let newOyente = req.body;
    let id = db.createOyente(newOyente);
    res.send(id);
});

//eliminar usuario
router.delete("/delete/:idOyente", function(req, res){
    let idOyente = req.params.idOyente;
    db.deleteOyente(idOyente);
    res.send("El usuario se elimino correctamente");
    res.status(200);
});


module.exports = router;