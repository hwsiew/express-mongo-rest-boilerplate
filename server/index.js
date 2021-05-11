const express = require('express');
const path = require('path');
const cors = require('cors')
const mongoose = require('mongoose');

const MONGO_USER = process.env.MONGO_USER || 'root';
const MONGO_PSWD = process.env.MONGO_PASSWORD || 'root';
const MONGO_HOST = process.env.MONGO_HOST || 'mongodb';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const mongoDb	 = 'test';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
	res.send('hello world');
})

// connect MongoDB with retry
var connectMongoDB = function(){
	const mongooseUri = `mongodb://${MONGO_USER}:${MONGO_PSWD}@${MONGO_HOST}:${MONGO_PORT}/${mongoDb}?authSource=admin`
	mongoose
		.connect(mongooseUri, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => {
			console.log('[mongodb] is ready!')
			app.emit('ready'); 
		})
		.catch((err) => {
			console.log(err);
			setTimeout(connectMongoDB, 5000);
		});
}
connectMongoDB();

const port = process.env.PORT || 3000;
// app is ready when MongoDB is connected successfully
app.on('ready', () => {
	app.listen(port, () => console.info(`[express] listening on port ${port}`));
})
