# Node Twitter Bot

##  This version is Unstable, You can use for fun.

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

  var options = {
    result_type : 'recent',
    count 5
  };

```

```javascript

nodeTwitterBot.getTweet('Node Twitter Bot',options, function(err,res){

  // doing something

});

```

###  getListFollowingCandidates(String, Object,[callback])

####  Example

```javascript

  var options = {
    page : 33,
    count : 15
  };

```

```javascript

nodeTwitterBot.getListFollowingCandidates('fashion',options, function(err,res){

  // doing something

});

```

###  followingList(id,options,[callback])

####  Example

```javascript

// id - can be screen_name or user_id

var id = 'SomethingUsername';

var options = {
  follow : true
  };

nodeTwitterBot.followingList(id,options, function(err,res){

  // doing something

});

```

### getFollowingList(Object, [callback])



