exports.success = function (res, message, body, status) {
  res.status(status || 200).send({
    success: true,
    message,
    data: body,
  });
};

exports.error = function (res, message, status) {
  res.status(status || 500).send({
    success: false,
    message,
  });
};
