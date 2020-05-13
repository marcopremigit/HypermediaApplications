'use strict';

var utils = require('../utils/writer.js');
var News = require('../service/NewsService');

module.exports.newsGET = function newsGET (req, res, next, limit, offset) {
  News.newsGET(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newsNewsIdGET = function newsNewsIdGET (req, res, next, newsId) {
  News.newsNewsIdGET(newsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
