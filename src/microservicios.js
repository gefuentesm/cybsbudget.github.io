 function createMS(){
    async function asynGetFromDB (url,ptoken,ptime) {         
        let obj={token:ptoken,time:ptime}
        const fetchData= await fetch(url, {
           method: 'POST',
           body:JSON.stringify(obj),
           headers: {
               //'Content-Type': 'application/x-www-form-urlencoded',
               'Content-Type': 'application/json',
           }
       }).then(r => r.json()).catch((error) => {
           console.log(error);
       });
       //console.log("asynGetFromDB",fetchData);
       return fetchData;
   }
    async function asynGetToken (usr,pwd){ 
        //console.log("en async get Token function",usr,pwd)
        let data={username:usr,password:pwd}
        //console.log("json",JSON.stringify(data));
        const fetchData= await fetch(`https://cybs-isauth.azurewebsites.net/api/cybs_login`, {
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json',
            }
        }).then(r => r.json())
        .catch(error=>{
            document.getElementById("loader").style.visibility = "none";
            console.log(error)
        })
    
        //console.log("fetchData",fetchData.data)
        return fetchData;
    };

   async function auth (usr,pwd){    

        console.log("auth",usr,pwd)

        let fetchData=await asynGetToken(usr,pwd);
        //console.log("return myToken,myTime loaded",fetchData.data)
        return {token:fetchData.data,time:fetchData.time}
    }
    return Object.freeze({
        auth,
        asynGetFromDB
    })
}
