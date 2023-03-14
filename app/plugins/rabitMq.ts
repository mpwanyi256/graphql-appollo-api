import * as rabitMQ from 'amqplib/callback_api';

let CONNECTION: null | rabitMQ.Connection = null,
    CHANNEL: null | rabitMQ.Channel = null

const rMQ = {
    getChannel: () => CHANNEL,
    getConnection: () => CONNECTION,
    init: (url= <string>process.env.MQ_LOCAL, cb: any) => {
        rabitMQ.connect(url, (err, con) => {
            if (err) console.log('Failed to connect to RabitMQ via', url)
            CONNECTION = con
            
            // Create channel
            con.createChannel((chErr, channel) => {
                if (chErr) console.log('Error creating RabbitMQ channel', chErr)
                console.log('Successfully connected to rabbitMQ')
                CHANNEL = channel
            })

            cb()
        })
    },
    closeConnection: () => {
        CONNECTION?.close()
    },
    sendMessageToQue: (payload: any) => {
        if (CHANNEL) {
            CHANNEL.sendToQueue('graphqlAPI', Buffer.from(JSON.stringify(payload)))
        }
    }
}

export default rMQ
