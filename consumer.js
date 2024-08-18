const { Kafka } = require('kafkajs');

// Tạo Kafka client
const kafka = new Kafka({
   brokers: ['localhost:9092', 'localhost:9094'], // Địa chỉ broker Kafka
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const runConsumer = async () => {
  await consumer.connect();
  console.log('Consumer connected');

  // Đăng ký topic để nhận tin nhắn
  await consumer.subscribe({ topic: 'testtopic', fromBeginning: true });

  // Xử lý tin nhắn nhận được
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("nhan tu consumer 1");
      console.log(`Received message: ${message.value.toString()}`);
    },
  });
};

runConsumer().catch(console.error);
