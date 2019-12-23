const WebSocket = require('ws');
const schema = require('../../support/helpers/schemaLLine');
const Joi = require('@hapi/joi');
const globals = require('../../support/helpers/allGlobals');

let startTime = new Date().getTime();
console.log('start time ' + startTime);
const url = globals.streamDataLLine;
let socket = new WebSocket(url);

socket.onopen = function () {
    let endTime = new Date().getTime();
    console.log('end time ' + endTime);
    let difference = endTime - startTime;
    console.log('connecting time ' + difference);

    if (difference < 1000) { 
        console.log(`websocket ${url} loaded under 1 sec`);
    }
    else {
        console.log(`websocket ${url} took more than 1 sec`);
    }
    console.log('Websocket connection established successfully ');
};

socket.onmessage = async function (event) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });

    // console.log(`data received from server: ${event.data}`);
    let stats = event.data;
    let data = JSON.parse(stats);
    for( let i = 1; i<3 ; i ++ ) {
        if(i===2) {
            socket.close();
            break;
        }
        console.log(data);
        // let result=  await schema.validateAsync( data );
        // console.log('result---'+await JSON.stringify(result));
        // console.log('total result---'+ JSON.stringify(schema.validate( data )));


        const { error, value } = schema.validate(data);
        console.log(error);
        console.log(JSON.stringify(value));
        
    }
    // this step validates the data packet received as per defined schema
    //let result=  await schema.validate( data );
    // console.log('result------------------------------------------------------------ '+ await schema.validateAsync( data ));
    // console.log('result------------------------------------------------------------ '+ schema.validate( data ));
};

socket.onclose = function (event) {
    if (event.wasClean) {
        console.log(`connection closed successfully, code=${event.code} reason=${event.reason}`);
    }
    else {
        console.log(`connection died abruptly,  code=${event.code} reason=${event.reason}`);
    }
};

socket.onerror = function (error) {
    console.log(`error in connecting ${url} - ${error.message}`);
};