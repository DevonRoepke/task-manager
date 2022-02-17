const  { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         name: 'Devon',
//         age: 29
//     }, (error, result) => {
//         if(error) {
//             return console.log('Unable to connect to collection!')
//         }
//         console.log(result.ops)
//     })
// })

// db.collection('users').insertMany([
//         {
//             name: 'Bill',
//             age: 42
//         },
//         {
//             name: 'Jen',
//             age: 31
//         }
//     ], (error, result) => {
//         if(error) {
//             return console.log('Unable to connect to collection!')
//         }

//         console.log(result.ops)
//     })

// db.collection('users').findOne({ name: 'Jen', age: 3 }, (error, user) => {
//     if(error) {
//         return console.log('Unable to connect to database!')
//     }
//     if(user === null) {
//         return console.log('Unable to find user!')
//     }

//     console.log(user)
// })

// db.collection('users').find({ age: 29 }).toArray((error, users) => {
//     if(error) {
//         return console.log('Unable to connect!')
//     }

//     console.log(users)
// })

// db.collection('tasks').findOne({ _id: new ObjectID("61f93c9802b838583ce9ef4e") }, (error, task) => {
//     console.log(task)
// })

// db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
//     console.log(tasks)
// })

// db.collection('users').updateOne({
//     _id: new ObjectID("61f93b3cb98aed07c0e265be")
// }, {
//     $inc: {
//         age: 1
//     }
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// db.collection('tasks').updateMany({
//     completed: false
// }, {
//     $set: {
//         completed: true
//     }
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// db.collection('tasks').deleteOne({
//     descripti: 'Pay bills'
// }).then((result) => {
//     console.log(result.deletedCount)
// }).catch((error) => {
//     console.log(error)
// })

})