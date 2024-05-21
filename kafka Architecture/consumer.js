const { kafka } = require("./client");
const group = process.argv[2];

if (!group) {
  console.error("Consumer group ID is missing. Please provide a valid group ID.");
  process.exit(1);
}

async function init() {
  const consumer = kafka.consumer({ groupId: group });

  try {
    await consumer.connect();
    console.log(`Consumer connected to group: ${group}`);

    await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`${group}: [${topic}]: PART:${partition}: ${message.value.toString()}`);
      },
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

init().catch(console.error);
