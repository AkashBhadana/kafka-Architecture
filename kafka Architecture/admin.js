const { Kafka } = require("kafkajs");

const { kafka } = require('./client'); // Import the kafka instance from client file

async function init() {
    const admin = kafka.admin();
    console.log('Admin connecting...');
    await admin.connect(); // Added await to ensure proper connection
    console.log('Admin connection success...');

    console.log('creating Topic [rider-updates]');
    await admin.createTopics({
        topics: [
            {
                topic: 'rider-updates',
                numPartitions: 2,
            }
        ]
    });
    console.log('Topic Created Success [rider-updates]');

    console.log('Disconnecting Admin...');
    await admin.disconnect(); // Corrected typo in admin.disconnect()
}

// Call the init function to execute the code
init().catch(console.error); // Handle any errors that may occur
