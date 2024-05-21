const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();

  try {
    console.log("Connecting Producer");
    await producer.connect();
    console.log("Producer Connected Successfully");

    rl.setPrompt("> ");
    rl.prompt();

    rl.on("line", async function (line) {
      const [riderName, location] = line.split(" ");
      if (riderName && location) {
        await producer.send({
          topic: "rider-updates",
          messages: [
            {
              partition: location.toLowerCase() === "north" ? 0 : 1,
              key: "location-update",
              value: JSON.stringify({ name: riderName, location }),
            },
          ],
        });
      } else {
        console.log("Invalid input format. Please enter rider name and location separated by a space.");
      }
      rl.prompt();
    }).on("close", async () => {
      console.log("Closing Producer");
      await producer.disconnect();
      process.exit(0);
    });
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1);
  }
}

init();
