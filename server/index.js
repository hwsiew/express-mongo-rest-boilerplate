const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {

	res.send('hello world');

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`[express] listening on port ${port}`));