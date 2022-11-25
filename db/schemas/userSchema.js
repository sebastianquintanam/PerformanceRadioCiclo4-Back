//Cargamos libreria
let mongoose = require("mongoose");

//Cargamos la clase de esquema
let Schema = mongoose.Schema;

//Definir la configuracion del esquema
let schemaConfig = {
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
};

//Creacion esquema
const userSchema = new Schema(schemaConfig);
//Creacion modelo
let UserModel = new mongoose.model("usuario", userSchema);
async function createUser(UsernewUser){
    try {
        //definicion de modelo
        let newUser = new UserModel();
        //llenado del modelo
        newUser.firstName = UsernewUser.firstName;
        newUser.email = UsernewUser.email;
        newUser.password = UsernewUser.password;
        newUser.username = UsernewUser.username;
        //guardado del modelo
        let result = await newUser.save();
        return result;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}
async function deleteUser(id){
    try{
        let result = await UserModel.findByAndRemove(id)
        return result;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}

async function findUserById(id) {
    try {
        let cursor = UserModel.findById(id).cursor();
        let user = await cursor.next();
        return user;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}
async function getAllUsers(){
    try {
        //definicion de modelo
        let filter = {};
        let cursor = UserModel.find(filter).cursor();
        let result = [];
        let currentUser = await cursor.next();
        while (currentUser != null) {
            result.push(currentUser);
            currentUser = await cursor.next();
        }
        return result;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}


module.exports = {
    userSchema,
    createUser,
    deleteUser,
    getAllUsers,
    findUserById,
}