# Node Twitter Bot

##  This version now Unstable, You can use for fun.

## Contact Me

### If you have any questions, suggestions or ideas - chat with me at [gitter chat](https://gitter.im/nikolenkoanton92/node-twitter-bot)

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

###  addTweet(String, [callback])

#### Example:

```javascript

nodeTwitterBot.addTweet('My First Tweet', function(err, res){

  // doing something

});

```

###  getTweet(String, Object, [callback])

####  Example:

```javascript

nodeTwitterBot.getTweet('Node Twitter Bot',options, function(err,res){

  // doing something

});

```


### getFollowingList(Object, [callback])



