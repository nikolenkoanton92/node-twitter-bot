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

  follow: function(phrase, options) {
    var pipeline = this.plumber.pipefy()
      .listenTo('follow')
      .pipe(this.twitter_api.getTweet, null, null, 'twit', 'setDep', 'next')
      .pipe(pipes.normalizeUsersFollowingList, 'users_list', 'setDep')
      .pipe(this.twitter_api.followingByUsersList, 'list', 'twit', 'next');

    pipeline.trigger('follow', phrase, options);
  },

  unfollow: function(id) {

    var pipeline = this.plumber.pipefy()
      .listenTo('unfollow')
      .pipe(this.twitter_api.getFollowingList, null, 'twit', 'setDep', 'next')
      .pipe(this.twitter_api.unFollowList, 'list', 'twit', 'next');

    var options = {
      screen_name: id
    };
    pipeline.trigger('unfollow', options);
  }


};
