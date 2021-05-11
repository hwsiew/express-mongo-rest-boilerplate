const Blog = require('../models/blogs');

/* Define your CRUD operation as follow */

const blogCreate = (req,res) => {
	const blog = new Blog(req.body);

	blog.save()
		.then((result) => {
			res.json(result);
		})
		.catch(err => {
			console.log(err);
		});

};

const blogGetMany = (req,res) => {
	Blog.find().sort({ createdAt: -1 })
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			console.log(err);
		});
};

const blogGet = (req,res) => {
	const id = req.params.id;
	Blog.findById(id)
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			console.log(err);
		});
}

const blogUpdate = (req,res) => {
	const id = req.params.id;
	Blog.findByIdAndUpdate(id, { $set: req.body })
		.then((result) => {
			res.json({success:true, result:result});
		})
		.catch((err) => {
			console.log(err);
		});
}

const blogDelete = (req,res) => {
	const id = req.params.id;
	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({success:true, result:result});
		})
		.catch((err) => {
			console.log(err);
		});
}

module.exports = {
	blogCreate,
	blogGet,
	blogGetMany,
	blogUpdate,
	blogDelete
}