var Twit = require('twit');

function TwitterApi(options) {

  this.twit = new Twit({
    consumer_key: options.consumerKey,
    consumer_secret: options.consumerSecret,
    access_token: options.accessToken,
    access_token_secret: options.accessTokenSecret
  });
}

TwitterApi.prototype = {
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

  getTweet: function(query, options, twit, setDep, next) {
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

    twit.twit.get('search/tweets', options, function(err, res) {
      if (err || err !== undefined) {
        return next(err);
      }

      setDep({
        'users_list': res.statuses
      });

      next();
      // cb(null, res);
    });
  },

  // Return the list of candidates for  following

  getListFollowingCandidates: function(query, options, cb) {

    if (typeof options === 'function') {

      cb = options;
      options = {};
    }

    if (!query) {
      throw new Error('query should be provide');
    }

    if (!options.page) {
      options.page = 1;
    }

    if (!options.count) {
      options.count = 1;
    }

    options.q = query;

    this.twit.get('users/search', options, function(err, res) {
      if (err) {
        return cb(err);
      }
      cb(null, res);
    });
  },

  followingByUsersList: function(list, twit, next) {

    list.forEach(function(element) {

      twit.twit.post('friendships/create', {
        id: element
      }, function(err, res) {});
    });

  },

  // Folliwing user

  followingUser: function(id, options, cb) {

    if (!id) {
      throw new Error('id should be provide');
    }

    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    options = options || {};

    if (typeof id === 'number') {
      options.user_id = id;
    }

    if (typeof id === 'string') {
      options.screen_name = id;
    }

    this.twit.post('friendships/create', options, function(err, res) {
      if (err) {
        return cb(err);
      }
      cb(null, res);
    });
  },

  // Get All Home Tweets
  getAllHomeTweets: function(cb) {
    var self = this;
    this.twit.get('statuses/user_timeline', {
        count: 3200,
        trim_user: 1
      },
      function(err, data, res) {});
  },

  destroyTweets: function(cb) {
    self.twit.post('statuses/destroy', {
      id: element.id_str
    }, function(err, response) {

    });
  }
};

module.exports = TwitterApi;
