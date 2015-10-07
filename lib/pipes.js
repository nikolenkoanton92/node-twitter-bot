var fs = require('fs');

module.exports = {
  normalizeUsersFollowingList: function(users_list, setDep) {
    this.list = [];
    var self = this;
    users_list.forEach(function(element, idx) {
      self.list[idx] = element.user.id;
    });

    setDep({
      'list': this.list
    });
  },
  isSaveToFile: function(fileOptions, list, next) {
    if (fileOptions.save) {
      fs.exists(fileOptions.fileName, function(exists) {
        if (exists) {
          fs.readFile(fileOptions.fileName, function(err, dataFile) {
            if (err) {
              next(err);
            }
            var data = JSON.parse(dataFile);
            var newData = list.concat(data);
            var newFileData = newData.filter(function(item, pos) {
              return newData.indexOf(item) == pos;
            });
            fs.writeFile(fileOptions.fileName, JSON.stringify(newFileData), 'utf-8', function(error) {
              if (error) {
                next(error);
              }
              next();
            });
          });

        } else {
          fs.writeFile(fileOptions.fileName, JSON.stringify(list), 'utf-8', function(err) {
            if (err) {
              next(err);
            } else {
              next();
            }
          });
        }
      });
    }
  }
};
