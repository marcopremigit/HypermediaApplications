let { eventDbSetup }        = require('./EventsService');
let { jobsDbSetup }         = require('./JobsService');
let { newsDbSetup }         = require('./NewsService');
let { serviceDbSetup }      = require('./ServicesService');
let { volunteersDbSetup }   = require('./VolunteersService');

const dbFactory             = require('knex');

let db = dbFactory({
    debug: true,
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: true
})

function setupDataLayer(){
    console.log("[Data Layer] - Setting data layer up...\n\n");
            eventDbSetup(db);
            jobsDbSetup(db);
            newsDbSetup(db);
            serviceDbSetup(db);
    return  volunteersDbSetup(db);
}

module.exports = { database: db, setupDataLayer};