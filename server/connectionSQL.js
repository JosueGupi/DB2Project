const sql = require('mssql')

const sqlConfig = {
  user: 'sa',
  password: '(#Pi9Vare1Xu!#)',
  server: 'localhost',
  database: 'Test',
  port:1433,
  
  
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

async function conexion ()  {
    
 try {
  // make sure that any items are correctly URL encoded in the connection string
  console.log('pre')
  await sql.connect(sqlConfig)
  const result = await sql.query`select * from personas`
  console.dir(result)
  console.log('post')
  return result
 } catch (err) {
    console.log('error: ' + err)
}
}
console.log('conexion antes')
console.log(conexion().recordset[0].nombre)