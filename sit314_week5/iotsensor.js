const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Shenal:0000@sit314.2upzz.mongodb.net/');

const Sensor = require('./models/sensor');

const sensordata = {
    id: 0,
    name: "temperaturesensor",
    address: "221 Burwood Hwy, Burwood VIC 3125",
    time: Date.now(),
    temperature: 20
}

const low = 10;
const high = 40;
reading = Math.floor(Math.random() * (high - low) + low);
sensordata.temperature = reading;

const jsonString = JSON.stringify(sensordata);
console.log(jsonString);

const newSensor = new Sensor({
    id: sensordata.id,
    name: sensordata.name,
    address: sensordata.address,
    time: sensordata.time,
    temperature: sensordata.temperature
});

newSensor.save().then(doc => {
console.log(doc);
}).then(() => {
mongoose.connection.close();
});