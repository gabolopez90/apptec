const sqlite = require("better-sqlite3")
const direccion = "A:/Consumo/Simuladores/CREDITO_DB.db"

exports.canal = (data)=>{
    const db = new sqlite(direccion);
    
    const sql = 'INSERT INTO CANAL VALUES (?)';
    let query = db.prepare(sql).run(data);
        
    return query;
}

exports.sector = (data)=>{
    const db = new sqlite(direccion);
    
    const sql = 'INSERT INTO SECTOR VALUES (?)';
    let query = db.prepare(sql).run(data);
        
    return query;
}