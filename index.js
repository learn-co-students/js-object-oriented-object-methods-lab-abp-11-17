function BoardMember(name, homeState, training){//Note the use of uppercase. Helps to id this is a constructor function
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = function (){return "No, I must disagree";}
  this.approve = function (){return "You can do that!";}
  this.doCharity = function (){return "I like to help people.";}
  this.releasePressStatement = function (){return "You will see great things from Scuber.";}
  this.sayHi = function (){return "Hi, my name is Mr. Polished. I am from New York, and I was trained in law."}

}

let polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
polishedBoardMember.veto();
polishedBoardMember.approve();
polishedBoardMember.doCharity();
polishedBoardMember.releasePressStatement();
polishedBoardMember.releasePressStatement();
polishedBoardMember.sayHi();
