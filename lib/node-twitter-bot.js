var Twit = require('twit');

module.exports = NodeTwitterBot;

function NodeTwitterBot(options) {
  this.twit = new Twit({
    consumer_key: options.consumerKey,
    consumer_secret: options.consumerSecret,
    access_token: options.accessToken,
    access_token_secret: options.accessTokenSecret
  });

}
