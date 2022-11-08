if("serviceWorker" in navigator){
navigator.serviceWorker.register("sw.js").then(registration =>{
    console.log("Registrado");
    console.log(registration);
}).catch (error =>{
    console.log("Fail");
    console.log(error);
})
} else{

}