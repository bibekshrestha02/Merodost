const ContactModel = require("./../model/contactModel");
// getting all message
exports.getMessage = async (req, res, next) => {
  try {
    const data = await ContactModel.find({}).sort({ date: -1 });
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
// posting message
exports.postMessage = async (req, res, next) => {
  try {
    const data = {
      email: req.body.email,
      name: req.body.name,
      message: req.body.message,
    };
    await ContactModel.create(data);
    res.status(200).json({
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.deleteMessage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const status = await ContactModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      status: true,
    });
  } catch (error) {
    res.json(error);
  }
};
