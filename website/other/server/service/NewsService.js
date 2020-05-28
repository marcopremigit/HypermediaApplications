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
 * returns List
 **/
exports.newsGET = () => db('news').select('id', 'name', 'image').then(data => data);



/**
 * Returns all the info bound to a news by ID
 *
 * newsId String The news ID to query for
 * returns News
 **/
exports.newsNewsIdGET = newsId => db('news').where({ id: newsId }).then(d => d);