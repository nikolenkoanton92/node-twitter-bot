var pipes = require('./pipes');

module.exports = function buildPipeline(superpipe, options) {

  var twit = options.twit;

  superpipe
    .listenTo(superpipe, 'followByUser')
    .pipe(twit.getUserFollowers, null, null, 'twit', 'setDep', 'next')
    .pipe(pipes.isSaveToFile, 'fileOptions', 'users_list', 'next')
    .pipe(twit.followingByUsersList, 'users_list', 'twit', 'next');

  superpipe
    .listenTo(superpipe, 'followByTweets')
    .pipe(twit.getTweet, null, null, 'twit', 'setDep', 'next')
    .pipe(pipes.normalizeUsersFollowingList, 'users_list', 'setDep')
    .pipe(twit.followingByUsersList, 'list', 'twit', 'next');

  superpipe
    .listenTo(superpipe, 'unfollowAll')
    .pipe(function(options, setDep) {
        setDep('unfollowOptions', options);
      },
      null, 'setDep')
    .pipe(twit.getFollowingList, 'unfollowOptions', 'twit', 'setDep', 'next')
    .pipe(function(list) {
      if (list.length > 0) {
        return true;
      } else {
        return false;
      }
    }, 'list')
    .pipe(twit.unFollowList, 'list', 'twit', 'next');

};
