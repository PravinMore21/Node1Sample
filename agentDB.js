
const agentDetails = (agentID,callback) => {
//console.log('start')

const {Pool,Client} = require('pg') //npm i pg
const connectionString = 'postgresql://postgres:postgres@localhost:5432/SAMPLE' 

const client  = new Client({
    connectionString:connectionString
})

client.connect()
const query = 'SELECT "AGENT_CODE", "AGENT_NAME", "WORKING_AREA", "COMMISSION", "PHONE_NO", "COUNTRY" FROM "AGENTS"  WHERE UPPER("AGENT_CODE") = ' +"'"+ agentID+"'"
console.log(query)
client.query(query,(err,res)=> { 
           // console.log(err,res)           
            client.end()
            callback(err,res)  
    })
}

module.exports = agentDetails


agentDetails('A006', (error,data) => {
    if (error){
         console.log(error)
    }
    console.log(data.rows)
})
