const myswl = require('mysql2');
const db=mysqt.createConnection({host:'localhost', user:'adminka',password:'password', datebase:'traffic-system',});
db.connect(err=>{if (err) throw err,console.log('Connected to MySQL');});
module.exports=db;