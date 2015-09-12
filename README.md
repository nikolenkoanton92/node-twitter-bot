# Node Twitter Bot

[![Join the chat at https://gitter.im/nikolenkoanton92/node-twitter-bot](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nikolenkoanton92/node-twitter-bot?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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

```javascript
var  NodeTwitterBot = require('node-twitter-boy');

var nodeTwitterBot = new NodeTwitterBot({
  consumerKey : 'Your Consumer Key',
  consumerSecret : 'Your consumer Secret',
  accessToken : 'Your access Token',
  accessTokenSecret : 'Your access Token Secret'
});
```

## API

###  addTweet(String, callback)

#### Example:

```javascript

nodeTwitterBot.addTweet('My First Tweet', function(err, res){

  // doing something

});

```


