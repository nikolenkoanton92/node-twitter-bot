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

* Add Tweet By boy
* Get List of Following People  (optionaly you can unfollow)


##  Usage

You will also need to create an app account on [https://dev.twitter.com/apps](https://dev.twitter.com/apps)

*  Sign in with your Twitter account
*  Create a new app account
*  Modify the settings for that app account to allow read & write
*  Generate a new OAuth token with those permissions

Following these steps will create 4 tokens that you will need to place in the configuration file discussed below.

``` consumerKey ``` , ```consumerSecret ``` , ``` accessToken ``` , ``` accessTokenSecret ``` are your API keys that you received from creating your app account.

```javascript
var  NodeTwitterBot = require('node-twitter-boy');

var nodeTwitterBot = new NodeTwitterBot({
  consumerKey : 'Your Consumer Key',
  consumerSecret : 'Your consumer Secret',
  accessToken : 'Your access Token',
  accessTokenSecret : 'Your access Token Secret'
});
```

## Documentation
