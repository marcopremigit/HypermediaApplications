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
        table.increments("id").primary();
        table.text("image").notNullable();
        table.text("title").notNullable();
        table.text("short_description");
        table.text("long_descrition");
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
/*
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
}*/


/**
 * Returns all the news in the database
 *
 * limit Integer the limit of objects to return (optional)
 * offset Integer the offset of the objects to retur (optional)
 * returns List
 **/
exports.newsGET = function(limit,offset) {
  if(!limit) limit = 10;
  if(!offset) offset = 0;

  return db('news')
//  .limit(limit)
  .offset(offset)
  .then(data => data);
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

exports.newsNewsIdGET= function(newsId){
  re

}

