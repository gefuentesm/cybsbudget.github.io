function createBudget(){
    return function objBudget({
        id,
        nombre,
        fases
    }){
        console.log("objBudget",id,nombre,fases);
        if(!nombre)
         throw new Error("El nombre del proyecto es requerido");
        if(isNaN(fases))
            throw new Error("La fase debe ser un número");
        else if(fases<=0 || fases>10)
            throw new Error("La fase debe ser un número entre 1 y 10");
        return Object.freeze({
            getName:() => nombre,
            getId:()=> id,
            getFases:()=> fases
        })

    }
}
function createEmployee(){
    return function newEmployee({
        id,
        name,
        dedication
    }){
        console.log("newEmployee",id,name,dedication);
        if(!name)
         throw new Error("El nombre del proyecto es requerido");
        return Object.freeze({
            getName:() => name,
            getId:()=> id,
            getDedication:()=> dedication
        })

    }
}
function createSesionToken(){
    return function objToken({
        token,
        time
    }){
        console.log("objToken",token);
        if(!token)
            throw new Error("El token es nulo")
        return Object.freeze({
            isValid:()=>!!token,
            getToken:()=>token,
            getTime:()=> time
        })
    }
}
