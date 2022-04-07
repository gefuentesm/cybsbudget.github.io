async function makeLogin({createMS,createSesionToken}){
    return async function objLogin(info){
        console.log(info,info.usr);
        const factToken=createSesionToken();
        const ms=createMS();
        let fetchData= await ms.auth(info.usr,info.pwd)
        //console.log(fetchData);
        return factToken(fetchData)
    }

}
function setBudgetData({createBudget}){
    console.log("setBudgetData")
    return function fact(info){
        const budgetFact=createBudget();
        console.log("budget en setBudgetData1",info.name);
        const budget=budgetFact({id:info.id,nombre:info.name,fases:info.fases});
        console.log("budget en setBudgetData2",info,budget);
        const dbcon=createMS({})
        return budget;
    }

}
async function loadTeamMember({createMS}){
    async function getTeam(myToken,myTime){
        const dbcon=createMS({})
        return await dbcon.asynGetFromDB(`https://getconsultant.azurewebsites.net/api/getconsultant`,myToken,myTime)
    }
    return function makeTeam(myToken,myTime){
        
        return Object.freeze(
            {
                getTeam
            }
        )
    }
    
}

async function loadProjFromMonday({createMS}){
    async function getProj(myToken,myTime,id){
        const dbcon=createMS({})
        return await dbcon.asynGetFromDB(`https://getmondayprojbyid.azurewebsites.net/api/getmondayprojbyid`,myToken,myTime,id)
    }
    return function loadProj(){
        
        return Object.freeze(
            {
                getProj
            }
        )
    }
    
}