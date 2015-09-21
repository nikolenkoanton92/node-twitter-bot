var NodeBot = require('./lib/node-twitter-bot');
var fs = require('fs');

var options = {
  consumerKey: 'mPndRux6t7RiS7gRz0KbOSmkl',
  consumerSecret: 'dJnPq69EbJGSOAqrTBQrbEp2JL8IJXvxFs4AiCpxZzi8LOOasN',
  accessToken: '290923608-DCEM72BleKpDS0AwyVik15RZHEeHyfQvd9isd6by',
  accessTokenSecret: 'fTt1eBPD5TgUqzwDUA3iQvgR3dY1Re6zVTHMomobX0kjp'
};

var nodeBot = new NodeBot(options);

// nodeBot.addTweet('Hello Twitter How Are you?My name is Bad', function(err, res) {
// console.log('Node Bot Twet cb')
// console.log(err)
//   console.log(res)
// });

// nodeBot.getAllHomeTweets(function(err, data) {
//   console.log(data.length)
//   fs.writeFile(__dirname + '/test.json', JSON.stringify(data),
//     'utf8',
//     function(err) {
//       if (err) throw err
//       console.log('It is saved')
//     })
// })

// var opt = {
//   screen_name: 'Anton_Sith',
//   unfollowing: true,
//   count: 992
// }

// nodeBot.getFollowingList(opt, function(err, res) {
//   console.log(err)
//   console.log(res)
// })
// nodeBot.getUsersBySlug('html', function(err, data, response) {
//   console.log('----------------')
//   console.log(err)
//   console.log(data)
//     // console.log(response)
// });


var opt = {
  // q: 'css',
  // page: 42,
  // count: 20,
};

nodeBot.getListFollowingCandidates('css', function(err, res) {
  console.log(err)
  console.log(res)
  if (res !== undefined) {
    res.forEach(function(element) {
      nodeBot.followingUser({
        user_id: element.id
      }, function(err, res) {

      });
    });
  }
});

nodeBot.schelude('addTweet', 'getTweet');
// var opts = {
//   // q: 'node.js',
//   // result_type: 'popular',
//   count: 1
// };
// nodeBot.getTweet('javascript', opts, function(err, res) {
//   var self = this;
//   res.statuses.forEach(function(element) {
//     setTimeout(function() {
//       nodeBot.addTweet(element.text, function(err, data) {

//       });
//     }, 0);
//   });
// });
