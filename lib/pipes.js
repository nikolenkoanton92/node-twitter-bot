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
  }
};
