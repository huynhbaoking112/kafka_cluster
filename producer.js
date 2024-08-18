const { Kafka } = require('kafkajs');

// Tạo Kafka client
const kafka = new Kafka({
  brokers: ['localhost:9092', 'localhost:9094'], // Địa chỉ broker Kafka

});

const producer = kafka.producer();

const runProducer = async () => {
  await producer.connect();
  console.log('Producer connected');

  // Gửi tin nhắn vào topic 'my-topic'
  await producer.send({
    topic: 'testtopic',
    messages: [
      // { value: 'Hello KafkaJS user with key kiem tra!', key:"kiemtra" },
      // { value: 'Hello KafkaJS user with key kiem tra!',partition:0},
      { value: 'Hello KafkaJS user with key kiem tra!',partition:1},
      // { value: 'Hello KafkaJS user with key kiem tra!',partition:2},
      // { value: 'Hello KafkaJS user with key kiem tra!',partition:3},
    ],
  });

  console.log('Message sent');
  await producer.disconnect();
};

runProducer().catch(console.error);
