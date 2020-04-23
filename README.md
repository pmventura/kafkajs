# KafkaJS

## A small program that will able to run a kafka, zookeeper using Docker. While producer and consumer can be run through javascript

### Here are the steps to run:
1. Spin up the zookeeper and kafka servers
- `docker-compose up`

2. Initialize the topics
- `node topic.js` 

3. Run the consumer
- `node consumer.js` 

4. Create a producer (The 2nd argument will be the value for message which is **paul**)
- `node producer.js paul`
