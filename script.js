/*
function makeAccount(initialDeposit) {
  let deposit = initialDeposit;

  return {
    deposit: function(depositAmount) {
      deposit += depositAmount;
      return `Your actual balance is :  ${deposit}`;
    },
    withdraw: function(withdrawAmount) {
      if(withdrawAmount <= deposit) {
        deposit -= withdrawAmount;
        return `Here's your money : ${withdrawAmount}`;
      }else {
        return `You have insufficient funds. You can't withdraw ${withdrawAmount}, once you have only ${deposit}`;
      }
    }
  }
}

*/
/*
1. Modify the makeAccount function from the lecture so that the returned
object contains an additional key called checkBalance, 
the value of which is a function that takes no arguments 
and returns a string representing the current balance. 
You should be able to use it like this:

 var account = makeAccount(100);
account.checkBalance(); // => 'Your balance is: $100'
account.deposit(50);
account.checkBalance(); // => 'Your balance is: $150'

*/

function makeAccount(initialDeposit) {
  let deposit = initialDeposit;

  return {
    deposit: function(depositAmount) {
      deposit += depositAmount;
      return `Your actual balance is :  ${deposit}`;
    },
    withdraw: function(withdrawAmount) {
      if(withdrawAmount <= deposit) {
        deposit -= withdrawAmount;
        return `Here's your money : ${withdrawAmount}`;
      }else {
        return `You have insufficient funds. You can't withdraw ${withdrawAmount}, once you have only ${deposit}`;
      }
    },
    checkBalance: function() {

      return `Your balance is: $${deposit}`;
    }
  }
}
/**********************************************************************/
/*
2. Let's revisit the counter exercise. Currently, makeCounter only 
allows us to count up -- what if we want to count down too? 
Modify makeCounter so that it returns an object that contains two keys:
up and down, each of which have functions as values.
 up should make the count increase, and down should 
 make the count decrease
*/

function counter(initialCount) {
  let count = initialCount || 0;

  return {
          up: function() {

          return count++;
    },
          down: function() {

          return count--;
    }
  }
}
/******************************************/
/*
1. Remember the guessing game from the first week? 
When we wrote the first version of the game, we didn't know about
closures and stored all of our state (variables) in the global scope. 
Rewrite the guessing game to take advantage of closures so that you 
can create multiple games. Here is some starter code:

function randInt(n) {
     return Math.floor(Math.random() * (n + 1));
     }
     var upperBound = 5;
      function guessMyNumber(n) {
     if (n > upperBound) {
          return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
     } else if (n === randInt(upperBound)) {
          return 'You guessed my number!';
          }
     return 'Nope! That was nnt it!';
     }
     }

2. You will need to define a function makeGame, and at the minimum, 
you should be able to play the game like this

 var game = makeGame(10); // 10 is the upper bound
game(2); // => 'Nope! That was not it!'
game(7); // => 'Nope! That was not it!'
game(5); // => 'You guessed my number!'
Ways to improve the game include:
A way to 'give up' and have the game reset, e.g. game.giveUp().
Keep track of how many guesses have been made, and provide a way to access them, e.g. game.numGuesses().
See the original exercise for the rest of the improvements!
*/













