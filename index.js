function BoardMember (name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = function () {
    console.log("No, I must disagree");
  }
}
this.approve = function approve() {
  console.log("No, I must disagree")
}
}
