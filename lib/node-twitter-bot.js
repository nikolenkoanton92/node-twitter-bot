var Twit = require('twit');

module.exports = NodeTwitterBot;

function NodeTwitterBot(options) {
  if (!options.consumerKey) {
    throw new Error('You missed consumerKey');
  }

  if (!options.consumerSecret) {
    throw new Error('You missed consumerSecret');
  }

  if (!options.accessToken) {
    throw new Error('You missed accessToken');
  }

  if (!options.accessTokenSecret) {
    throw new Error('You missed accessTokenSecret');
  }
  this.twit = new Twit({
    consumer_key: options.consumerKey,
    consumer_secret: options.consumerSecret,
    access_token: options.accessToken,
    access_token_secret: options.accessTokenSecret
  });

}

NodeTwitterBot.prototype = {

  // Tweet a new Post
  addTweet: function(text, cb) {
    if (typeof text === 'string') {
      this.twit.post('statuses/update', {
        status: text
      }, function(err, response) {
        if (err) {
          return cb(err);
        }
        cb(null, response);
      });
    } else {
      return cb('Text should be String type');
    }
  }

};
