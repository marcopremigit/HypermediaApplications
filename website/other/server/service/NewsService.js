'use strict';

let db;

exports.newsDbSetup = function(s) {
  db = s;
  console.log("[News Service] - Checking if table exists...");
  return db.schema.hasTable("news")
  .then(exists => {
    if(!exists){
      console.log("[News Service] - Table does not exist, I'm going to create one for you!");
      return db.schema.createTable("news", table => {
        table.increments();
        //TODO: create news table!
      })
    } else {
      console.log("[News Service] - Table exists, nothing to report.");
    }
  });
}

/**
 * Returns all the news in the database
 *
 * limit Integer the limit of objects to return (optional)
 * offset Integer the offset of the objects to retur (optional)
 * returns List
 **/
exports.newsGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "short_description" : "short_description",
  "image" : "image",
  "id" : 0,
  "long_description" : "long_description",
  "title" : "title"
}, {
  "short_description" : "short_description",
  "image" : "image",
  "id" : 0,
  "long_description" : "long_description",
  "title" : "title"
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
 * newsId String The news ID to query for
 * returns News
 **/
exports.newsNewsIdGET = function(newsId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "short_description" : "short_description",
  "image" : "image",
  "id" : 0,
  "long_description" : "long_description",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

