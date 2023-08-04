function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 30,
    skills: ['js', 'css', 'html'],
    showSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(this.name + ' knows ' + skill);
      }.bind(this));
    }
  };

  member.showSkills();
}