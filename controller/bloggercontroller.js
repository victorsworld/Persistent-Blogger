const Blogger = require('../model/bloggermodel');

const getAllBloggs = async (req, res) => {
  try {
    const allBlogger = await Blogger.find({});
    res.status(200).json({ success: true, data: allBlogger });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const newBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const blog = {
      title: title,
      content: content,
      author: author,
    };
    const newBlog = await new Blogger(blog);
    const saveBlog = await newBlog.save();
    res.status(200).json({ success: true, data: saveBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const find = req.params.id;
    const findID = await Blogger.findOne({ _id: find });
    if (!findID) {
      return res
        .status(400)
        .json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, data: findID });
  } catch (error) {}
};

module.exports = { getAllBloggs, newBlog, getBlog };
