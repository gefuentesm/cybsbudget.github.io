
 async function login(usrEl,pwdEl,container){
     console.log(usrEl,pwdEl)
    const usr=document.getElementById(usrEl)
    const pwd=document.getElementById(pwdEl)
    //const createms=createMS();
    const objLogin=await makeLogin({createMS,createSesionToken});
    //console.log(usr.value,pwd.value);
    token=await objLogin({usr:usr.value,pwd:pwd.value});
    //console.log("returning token",token)
    if(!token.isValid()){
        alert("token no valido")
    }else {
        document.getElementById(container).style.display="";
        document.getElementById("signin").style.display="none";
    }
}

async function budget(idEl,nameEl, fasesEl,container){
    try{
        const id = document.getElementById(idEl).value;
        const name = document.getElementById(nameEl).value;
        const fases = document.getElementById(fasesEl).value;
        console.log("setBudgetData",id,name,fases,token)
        const budgetFact = setBudgetData({createBudget})
        oBudget = budgetFact({id,name,fases})
        console.log("budget-fases",oBudget.getFases())
        let arr=[];
        for(let i=0;i<oBudget.getFases();i++){
            arr.push({fase:i+1})
        }
        makePhases(container,arr,render);
        const makeTeam = await loadTeamMember({createMS})
        console.log("token",token)
        const oTeam = await makeTeam(token.token,token.time);
        const teamArr = await oTeam.getTeam();
        console.log("teamArr",teamArr.data);
        showTeam("sidebar","team",teamArr.data,render);
    }catch(err){
        console.log(err);
    }
}
async function loadBudgetByid(idEL){
    let id=document.getElementById(idEL);
    alert(token.getToken());
    const proj=await loadProjFromMonday({createMS})

    const oProj=proj();
    const omondayProj=await oProj.getProj(token.getToken(),token.getTime(),id.value);
    console.log(omondayProj);
}