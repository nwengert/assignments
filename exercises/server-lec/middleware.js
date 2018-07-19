// how we can attach something to the rec or res objects
//we are going to make middleware that will console.log the date, time that a req comes to server

const logger = (req, res, next) => {
    console.log( req.method + " " + new Date().toLocaleString());
    next();  //because we're done at this station, and it has to move on
}

module.exports = logger;

