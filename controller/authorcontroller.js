const Author = require('../model/authormodel');

const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.find({});
    res.status(200).json({ success: true, data: allAuthors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const newAuthor = async (req, res) => {
  try {
    const { name, email, } = req.body;
    const author = {
      name: name,
      email: email,
    };
    const newAuthor = await new Author(author);
    const saveAuthor= await newAuthor.save();
    res.status(200).json({ success: true, data: saveAuthor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAuthorid = async (req, res) => {
    try {
      const findID = await Author.findOne({ _id: req.params.id });
      if (!findID) {
        return res
          .status(400)
          .json({ success: false, message: 'Author not found' });
      }
      res.status(200).json({ success: true, data: findID });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

module.exports = {getAllAuthors, newAuthor, getAuthorid};
