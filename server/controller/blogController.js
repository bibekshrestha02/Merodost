const BlogModel = require("./../model/blogModel");
// getting all blogs
exports.getBlogs = async (req, res, next) => {
  try {
    const data = await BlogModel.find({});
    res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    res.status(200).json({
      error,
    });
  }
};
// adding blogs
exports.addBlog = async (req, res, next) => {
  try {
    const data = {
      title: req.body.title,
      summery: req.body.summery,
      first: req.body.first,
      second: req.body.second,
      third: req.body.third,
      writtenBy: req.body.writtenBy,
      photo: "/images/blogImage/" + req.files[0].filename,
    };
    await BlogModel.create(data);
    res.json({
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: false,
      error,
    });
  }
};
// getting blogs by id
exports.getBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await BlogModel.findById({ _id: id });
    const relatedData = await BlogModel.find({ _id: { $ne: id } }).limit(4);
    res.status(200).json({
      status: true,
      data,
      relatedData,
    });
  } catch (error) {
    res.status(200).json({
      status: false,
      message: "Invalid id",
    });
  }
};
// updating blog by id
exports.updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = {
      title: req.body.title,
      summery: req.body.summery,
      first: req.body.first,
      second: req.body.second,
      third: req.body.third,
      writtenBy: req.body.writtenBy,
      photo: req.body.photo,
    };
    await BlogModel.update({ _id: id }, data);
    res.json({
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: false,
      message: "Invalid id",
    });
  }
};
// deleting blog by id
exports.deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    await BlogModel.findByIdAndDelete({ _id: id });
    res.json({
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: false,
      message: "Invalid id",
    });
  }
};
