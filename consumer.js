const {Kafka} = require("kafkajs");
const msg = process.argv[2];
run();

async function run() {
    try {
        // Create an admin connection
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["pmventura:9092"]
        });

        const consumer = kafka.consumer();
        console.log("Connnectingg......");
        await consumer.connect();
        console.log("Connected!");

        // Read all the time

    }
    catch(ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        process.exit(0);
    }
}