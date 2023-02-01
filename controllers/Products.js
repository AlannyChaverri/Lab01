const { response } = require("express");

const getMethod = (req, res = response) => {
  res.json({
    name: "Alanny",
    msg: "respuesta del controller method products GET",
  });
};

const postMethod = (req, res = response) => {
  res.json({
    name: "Alanny",
    msg: "respuesta del controller method products POST",
  });
};

const deleteMethod = (req, res = response) => {
  res.json({
    name: "Alanny",
    msg: "respuesta del controller method products POST",
  });
};

module.exports = {
  getMethod,
  postMethod,
  deleteMethod,
};
