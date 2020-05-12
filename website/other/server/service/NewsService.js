'use strict';


/**
 * Returns all the news in the database
 *
 * returns List
 **/
exports.newsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 50,
  "name" : "Covid-19!"
}, {
  "id" : 60,
  "name" : "Covid-20!"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all the info bound to a news by ID
 *
 * newsId Integer The news ID to query for
 * returns News
 **/
exports.newsNewsIdGET = function(newsId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "short_description" : "short_description",
  "image" : "image",
  "name" : "name",
  "id" : 0,
  "long_description" : "long_description"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

