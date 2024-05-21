# Kafka Consumer Application

## Description
  This Kafka consumer application is a trial project designed to consume messages from the "rider-updates" topic in a Kafka cluster. It processes location updates for riders and logs the information to the console.

## Features
- Connects to a Kafka cluster and subscribes to the "rider-updates" topic.
- Consumes messages from Kafka and processes location updates for riders.
- Logs rider information to the console.

## Installation
1. Clone the repository:
   
    git clone https://github.com/AkashBhadana/kafka-Architecture.git

3. Install dependencies:

    npm install

## Usage
1. Run the Kafka consumer application:
  node consumer.js <consumer-group-id>

    Replace `<consumer-group-id>` with the ID of the consumer group you want to use.

## Configuration
- Ensure that the Kafka broker address and topic configuration are correctly set in the `client.js` file.
- Update the consumer group ID when running the consumer application.

## Dependencies
- Node.js
- KafkaJS

## Contributing
  This is a trial project, and contributions are not actively sought. However, if you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License
  This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
  For any questions or feedback, feel free to contact Akash at akashbhadana3yx@yahoo.com.

