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

  // Get All List of All following people
  // If unfollowing true you can unfollows

  getFollowingList: function(options, twit, setDep, next) {

    if (!options.screen_name && !options.user_id) {
      throw new Error('screen_name or user_id should be provide');
    }

    var self = this;
    twit.twit.get('friends/ids', options, function(err, res) {

      if (err) {
        return next(err);
      }

      setDep({
        list: res.ids
      });
      next();

    });
  },

  unFollowList: function(list, twit, next) {
    list.forEach(function(element) {

      twit.twit.post('friendships/destroy', {
        user_id: element
      }, function(err, body, resp) {
        if (err) {
          console.log(err);
        }
        next();
      });
    });
  },

  // get Tweets by options

  getTweet: function(query, options, twit, setDep, next) {
    if (!query) {
      throw new Error('query should be provide');
    }

    if (!options.result_type) {
      options.result_type = 'recent';
    }

    if (!options.count) {
      options.count = 15;
    }

    options.q = query;

    twit.twit.get('search/tweets', options, function(err, res) {
      if (err) {
        return next(err);
      }

      setDep({
        'users_list': res.statuses
      });

      next();
    });
  },

  // get User followers

  getUserFollowers: function(screen_name, options, twit, setDep, next) {
    options = options || {};
    if (!screen_name) {
      throw new Error('screen_name should be provide');
    }

    if (!options.count) {
      options.count = 15;
    }

    if (!options.file.save) {
      options.file.save = false;
    }

    if (options.file.save && !options.file.fileName) {

      options.file.fileName = 'followers.json';
    }

    if (typeof screen_name === 'string') {
      options.screen_name = screen_name;
    } else {
      throw new Error('screen_name should be string');
    }

    twit.twit.get('followers/ids', options, function(err, res) {
      if (err) {
        next(err);
      }
      setDep({
        'users_list': res.ids,
        'fileOptions': options.file
      });

      next();
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
      }, next);
    });

  }

};

module.exports = TwitterApi;
