var fs=require("fs");
var events= require("events")
;

//listener 1
 var listener1=function
 listener1(){
     console.log("listener numero 1 ejecutado");
 }

//listener 2
var listener2=function
listener2(){
    console.log("listener numero 2 ejecutado");
}

//leer el fichero
fs.readFile('datosfile.txt',function(err,data){
    if(err)return
console.log(err);

     console.log(data.toString());
});
console.log("Fin del Programa");



// crear eventEmitter
var eventEmitter=new events.EventEmitter();

listener1 
 eventEmitter.addListener('connection',listener1);
 listener2 
 eventEmitter.addListener('connection',listener2);
 var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
 console.log(" Hay   :"+eventListeners+ "  "+ "listeners  escuchando  a la conexion event ")
 eventEmitter.emit('connection');
