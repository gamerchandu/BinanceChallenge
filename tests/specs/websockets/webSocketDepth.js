const WebSocket = require('ws');
const schema = require('../../support/helpers/schemaDepth');
const Joi = require('@hapi/joi');
const globals = require('../../support/helpers/allGlobals');

let startTime = new Date().getTime();
console.log('start time ' + startTime);
const url = globals.streamDataDepth;
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
    //let stats = event.data;
    let data = JSON.parse(event.data);
    for( let i = 1; i<3 ; i ++ ) {
        if(i===2) {
            socket.close();
            break;
        }
        console.log('websocketData Received \n'
        +JSON.stringify(data)
        +'\n');

        // this step validates the data packet received as per defined schema
        const { error, value } = await schema.validate(data);
        console.log('Error in validating data \n '+error);
        console.log('Validated data \n '+JSON.stringify(value));
        
    }
};

socket.onclose = function (event) {
    if (event.wasClean) {
        console.log(`connection closed successfully, code=${event.code} reason=${event.reason}`);
    }
    else {
        console.log(`connection died abruptly,  code=${event.code}`);
    }
};

socket.onerror = function (error) {
    console.log(`error in connecting ${url} - ${error.message}`);
};