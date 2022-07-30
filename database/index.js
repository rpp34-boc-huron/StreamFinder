const mongoose = require('mongoose');
const username = process.env.MONGOUSER;
const password = process.env.MONGOPASS;

mongoose.connect(`mongodb+srv://${username}:${password}@streamfinder01.5jdg2kb.mongodb.net/?retryWrites=true&w=majority`, (err) => {
  if (err) {
    console.log('Could not connect to MongoDB');
  } else {
    console.log('Connected to MongoDB');
  }
});

// EVERYTHING IS ASYNC

// Getting Data
// <model>.find({<propName>: <propValue>})
// Has things like or and, less than, strict equal and so on...

// Removing Data
// <model>.findOneAndDelete({<propsName>: <propValue>})

// Update Data
// let doc = <model>.find({<propName>: <propValue>});
// doc.<propName> = <newPropValue>
// await doc.save()

// Creating Entries
// let doc = new <model>({<object with data>})
// await doc.save