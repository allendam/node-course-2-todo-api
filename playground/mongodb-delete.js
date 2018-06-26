const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Need to workout badly'}).then((result) => {
    //    console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b316a98962b8b03049d1112')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // client.close();
});