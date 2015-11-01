# Node Twitter Bot

[![Join the chat at https://gitter.im/nikolenkoanton92/node-twitter-bot](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nikolenkoanton92/node-twitter-bot?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

##  This version is Unstable, You can use for fun.


##  Installation

The easiest way to install node-twitter-bot is with [`npm`](http://npmjs.org)

```sh
npm install node-twitter-bot
```

Alternately, download the source.

```sh
git clone https://github.com/nikolenkoanton92/node-twitter-bot.git
```

##  Features

* follow users by tweet
* follow user by specified user
* unfollow users


##  Usage

You will also need to create an app account on [https://dev.twitter.com/apps](https://dev.twitter.com/apps)

*  Sign in with your Twitter account
*  Create a new app account
*  Modify the settings for that app account to allow read & write
*  Generate a new OAuth token with those permissions

Following these steps will create 4 tokens that you will need to place in the configuration file discussed below.

``` consumerKey ``` , ```consumerSecret ``` , ``` accessToken ``` , ``` accessTokenSecret ``` are your API keys that you received from creating your app account.

```javascript
var  NodeTwitterBot = require('node-twitter-bot');

var nodeTwitterBot = new NodeTwitterBot({
  consumerKey : 'Your Consumer Key',
  consumerSecret : 'Your consumer Secret',
  accessToken : 'Your access Token',
  accessTokenSecret : 'Your access Token Secret'
});
```

## API

This API should work exactly the same in node. Open an issue if this is not the case.

#### `nodeTwitterBot.followByTweets(phrase,[options])`

Start following people by `phrase` in tweet.

If ```options``` is specified, then the default options(shown bellow) will be overridden.

```javascript
{
  result_type: String, // Specifies what type of search results you would prefer to receive. By default : popular. You can change to recent, popular, mixed.
  count: Number, // The number of tweets to return per page, up to a maximum of 100. Defaults to 15.
}
```
#### `nodeTwitterBot.followByUser(user,[options])`

Start following peoply by 'user name'(should be String) in tweet.

if ```options``` is specified, the the default options(show bellow) will be overridden.

```javascript
{
  count: Number, // Maximum of 5,000 per distinct request. Defaults to 15.
  file : {
    save : true, // if you would like save followers to file add true, by default it is false.
    fileName:  'file name of the file' // set filename of file
  }
}

```

#### `nodeTwitterBot.unfollowAll(user,[options])`

Start unfollowing people.

`user` can be any of the following:

* the ID of the user for whom to return results for.
* the screen name of the user for whom to return results for.

