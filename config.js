let PORT = process.env.PORT || 8080;
let connectionString = "mongodb+srv://admin:admin@cluster0.tvnyqcm.mongodb.net/?retryWrites=true&w=majority";
let dbName = "Performance_Radio";
let fullUrl = "mongodb+srv://admin:admin@cluster0.tvnyqcm.mongodb.net/" + dbName + "?retryWrites=true&w=majority";
    

module.exports = {
    PORT,
    connectionString,
    dbName,
    fullUrl,
};