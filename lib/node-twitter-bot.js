var SuperPipe = require('superpipe');

var TwitterApi = require('./twitter_api');


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



}

NodeTwitterBot.prototype = {


};
