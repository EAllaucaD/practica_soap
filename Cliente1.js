import { createClient } from "soap";


//endpoint references
const url = "http://www.dneonline.com/calculator.asmx?wsdl";

    createClient(url, function (err, client){
        if (err){
            console.error(err);
        }else {
            
            //Make soap request using client object
            const args = { intA: 20, intB: 3};
            client.Multiply(args, function(err, result){
                if (err) {
                    console.error(err);
                }else {
                    console.log(result);
                }
            });
        }
    });