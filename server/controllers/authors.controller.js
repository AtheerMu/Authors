const Authors = require("../models/authors.model");

module.exports.findAllauthors = (req, res) => {
  Authors.find()
    .then(allAuthors=> res.json({ author: allAuthors }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.findOneSingleAuthor = (req, res) => {
	Authors.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
		.catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.createNewAuthor = (req, res) => {
  Authors.create(req.body)
    .then(newlyCreatedAuthor => res.json({ author: newlyCreatedAuthor }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.updateExistingAuthor = (req, res) => {
  Authors.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
    .then(updatedAuthor => res.json({ author: updatedAuthor }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
  Authors.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};
