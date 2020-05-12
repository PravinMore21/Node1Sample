
DBtoObject('Agent_Vinod', (error,data) => {
    if (error){
         console.log(error)
    }
    console.log(data.rows)
})

module.exports = agentDetails
