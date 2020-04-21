const {Kafka} = require("kafkajs");

run();

async function run() {
    try {
        // Create an admin connection
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["pmventura:9092"]
        });

        const admin = kafka.admin();
        console.log("Connnectingg......");
        await admin.connect();
        console.log("Connected!");

        // A-M, N-Z
        await admin.createTopics({
            "topics": [{
                "topic": "Users",
                "numPartitions": 2
            }]
        });

        console.log("Successfully created!")
        await admin.disconnect();

    }
    catch(ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        process.exit(0);
    }
}