

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import amplify from 'amplify';
import awsExports from './aws-exports'
import { Amplify } from 'aws-amplify';
Amplify.configure(awsExports)
const accountSid = 'ACd0cd5cf0c35391b4f2c68358145b01cf';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    client.messages
    .create({
        body: 'Tu orden ha sido recibida. Esperemos que lo disfrutes Andy. Detalles: http://www.yummycupcakes.com/',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5215551670769'
    })
    .then(message => console.log(message.sid))
    .done();
};
