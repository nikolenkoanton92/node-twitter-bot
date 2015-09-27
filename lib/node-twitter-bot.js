var SuperPipe = require('superpipe');

var TwitterApi = require('./twitter_api');
var pipes = require('./pipes');


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

  this.twitter_api = new TwitterApi(options);

  this.plumber = new SuperPipe();

  this.plumber
    .setDep('twit', this.twitter_api);
}

NodeTwitterBot.prototype = {

  followByTweets: function(phrase, options) {
    var pipeline = this.plumber.pipefy()
      .listenTo('followByTweets')
      .pipe(this.twitter_api.getTweet, null, null, 'twit', 'setDep', 'next')
      .pipe(pipes.normalizeUsersFollowingList, 'users_list', 'setDep')
      .pipe(this.twitter_api.followingByUsersList, 'list', 'twit', 'next');

    pipeline.trigger('followByTweets', phrase, options);
  },

  unfollowAll: function(user, options) {

    if (!user) {
      throw new Error('User must be specified');
    }
    options = options || {};

    if (typeof(user) === 'string') {
      options.screen_name = user;
    }

    if (typeof(user) === 'number') {
      options.user_id = user;
    }

    var pipeline = this.plumber.pipefy()
      .listenTo('unfollowAll')
      .pipe(this.twitter_api.getFollowingList, null, 'twit', 'setDep', 'next')
      .pipe(this.twitter_api.unFollowList, 'list', 'twit', 'next');

    pipeline.trigger('unfollowAll', options);
  }
};
