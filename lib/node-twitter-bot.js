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
  },

  // Get All List of All following people
  // If unfollowing true you can unfollows

  getFollowingList: function(options, cb) {

    if (!options.screen_name && !options.user_id) {
      throw new Error('screen_name or user_id should be provide');
    }

    var self = this;
    this.twit.get('friends/ids', options, function(err, res) {
      if (err) {
        return cb(err);
      }

      if (options.unfollowing) {
        res.ids.forEach(function(element) {
          self.twit.post('friendships/destroy', {
            user_id: element
          });
        });
        cb(null);
      } else {
        cb(null, res);
      }
    });
  },

  // get Tweets by options

  getTweet: function(query, options, cb) {

    if (!query) {
      throw new Error('query should be provide');
    }

    if (!options.result_type) {
      options.result_type = 'popular';
    }

    if (!options.count) {
      options.count = 1;
    }

    options.q = query;

    this.twit.get('search/tweets', options, function(err, res) {
      if (err || err !== undefined) {
        return cb(err);
      }
      cb(null, res);
    });
  },
  }

};
