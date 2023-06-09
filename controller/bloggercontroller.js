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
    const findID = await Blogger.findOne({ _id: req.params.id });
    if (!findID) {
      return res
        .status(400)
        .json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, data: findID });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const update = await Blogger.updateOne({ _id: req.params.id }, req.body);
    if (!update)
      return res
        .status(400)
        .json({ success: false, message: 'Blog not found' });
    res.status(200).json({ success: true, data: update });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const deleteBlog = await Blogger.deleteOne({ _id: req.params.id });
    if (!deleteBlog)
      return res
        .status(400)
        .json({ success: false, message: 'Blog not found' });
    res.status(200).json({ success: true, data: deleteBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = { getAllBloggs, newBlog, getBlog, updateBlog, deleteBlog };
