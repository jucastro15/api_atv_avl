import{ datahora} from './datahora.js';


 global.criarErro = function criarErro(err){

    let obj = {
       erro : err.messagem
    }   
    
    return obj;
}


.global.logError = function logError(err){     
     console.log(datahora() + ' ---> Error -> ' + err.message);
 }