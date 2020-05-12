'use strict';

var utils = require('../utils/writer.js');
var News = require('../service/NewsService');

module.exports.newsGET = function newsGET (req, res, next) {
  News.newsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newsNewsIdGET = function newsNewsIdGET (req, res, next) {
  var newsId = req.swagger.params['newsId'].value;
  News.newsNewsIdGET(newsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
