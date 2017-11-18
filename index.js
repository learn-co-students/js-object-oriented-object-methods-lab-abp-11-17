function BoardMember (name, homeState,training){
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function(){
    return `No, I must disagree`
  }
  this.approve = function(){
    return `You can do that!`
  }
  this.doCharity = function(){
      return `I like to help people.`
  }
  this.releasePressStatement = function(){
    return `You will see great things from Scuber.`
  }
  this.sayHi = function(){
    return `Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`
  }
}
  //this.veto = function(){   annonomous function - used for every Object and it is not reccomended


// BoardMember.prototype.veto = function{
//   console.log(`No, I must disagree`)
// }
//
// BoardMember.prototype.doCharity = function(){
//   returns ``
// }
//
// BoardMember.prototype.releasePressStatement = function(){
//   returns ``
// }
