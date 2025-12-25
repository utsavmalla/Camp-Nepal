const mongoose = require('mongoose');
const cities = require('./cities');
const Campground = require('../models/campground');
const {places, descriptors} = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/camp-nepal', {
    useNewurlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connnection error"));
db.once("open", () => {
    console.log("Database connected")
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 10; i++){
        const random20 = Math.floor(Math.random() * 20);
        const price = Math.floor(Math.random() * 20)+10;
        const camp = new Campground({
            location: `${cities[random20].city}, ${cities[random20].admin_name}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'http://source.unsplash.com/collection/1730934',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro omnis doloribus et, excepturi ut voluptatibus, culpa inventore tenetur soluta autem vitae praesentium? Pariatur, voluptatum accusamus quia libero eligendi quibusdam!',
            price
        })
        await camp.save();
    }
}

seedDB().then(()=> {
    mongoose.connection.close();
})