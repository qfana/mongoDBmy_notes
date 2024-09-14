const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://qfana2123:TWiTwlbrrp8qgwZ3@cluster0.9eyu7.mongodb.net/mongo?retryWrites=true&w=majority&appName=Cluster0');

const start = async () => {
  try {
    await client.connect();
    console.log('connected');
    await client.db().createCollection('users');
    const users = client.db().collection('users');
    await users.insertOne({ name: 'qfana', age: 18 });
    const user = await users.findOne({ name: 'qfana' });
    console.log(user);


  } catch (e) {
    console.log(e);

  }
};

start();