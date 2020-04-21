# KafkaJS

## A small program that will able to run a kafka, zooker using Docker. While producer and consumer can be run through javascript

### Here the steps to run:
1. Spin up the zookeeper server
`docker run --name zookeeper  -p 2181:2181 -d zookeeper`

2. Spin up the kafka server
 ``` docker run -p 9092:9092 --name kafka  -e                      KAFKA_ZOOKEEPER_CONNECT=husseinmac:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://husseinmac:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka```

3. Initialize the topics
- `node topic.js` 

4. Run the consumer
- `node consumer.js` 

5. Create a producer (The 2nd argument will be the value for message)
- `node producer.js paul`