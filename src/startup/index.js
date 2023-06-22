const express= require('express');
let _express=null;
let _config=null;

class Server{
    
    constructor({config, router}){
        _config = config;
        _express = express().use(router);
    }

    start(){
        return new Promise(resolve => {
            _express.listen(_config.PORT, ()=>{
                console.log(_config.APPLICATION_NAME+" is running on PORT: "+_config.PORT);
            });
            //se ejecuta metodo resolve para que la promesa culmine
            resolve();
        });
    }

}

module.exports=Server;