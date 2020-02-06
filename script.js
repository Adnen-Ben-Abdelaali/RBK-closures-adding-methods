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
Advanced

1. Most banks keep records of the transactions that take place in 
an account. Implement a transaction log that keeps track of all 
transactions that occur in a given account. 
A single transaction should probably be represented by an object, 
for instance:

 {type: 'deposit', amount: 100, before: 110, after: 210, status: 'approved'}
{type: 'withdrawal', amount: 5000, before: 210, after: 210, status: 'denied'}
Modify the return value of your makeAccount function to include the capability to view the last n transactions with a function called transactionHistory:
var account = makeAccount(100);
// ...
account.transactionHistory(2); // => [{...}, {...}]
Other ideas to try include:
Implement a way to get the last n withdrawals or deposits
Implement a function that determines the average withdrawal and 
deposit amounts.
Learn about the JavaScript Date object (try typing new Date() into a console) and incorporate time into the transactions.
*/
function makeAccountAdvanced(initialDeposit) {
  let deposit = initialDeposit;
  let transactionsRecordArray = new Array();
  let currentTransaction = {
    type: "transactionType",
    amount: 0,
    before: initialDeposit,
    after: initialDeposit,
    status: 'approvedOrDenied'
  };
  
  return {
    deposit: function(depositAmount) {
      currentTransaction["before"] = deposit;
      deposit += depositAmount;
      currentTransaction["type"] = "deposit";
      currentTransaction["amount"] = depositAmount;
      currentTransaction["after"] = deposit;
      currentTransaction["status"] = "approved";
      transactionsRecordArray.push(currentTransaction);
      return `Your actual balance is :  ${deposit}`;
    },
    withdraw: function(withdrawAmount) {
      currentTransaction["before"] = deposit;
      currentTransaction["amount"] = withdrawAmount;
      if(withdrawAmount <= deposit) {
        deposit -= withdrawAmount;
        currentTransaction["after"] = deposit;
        currentTransaction["status"] = "approved";
        transactionsRecordArray.push(currentTransaction);
        return `Here's your money : ${withdrawAmount}`;
      }else {
        currentTransaction["after"] = deposit;
        currentTransaction["status"] = "denied";
        transactionsRecordArray.push(currentTransaction);
        return `You have insufficient funds. You can't withdraw ${withdrawAmount}, once you have only ${deposit}`;
      }
    },
    checkBalance: function() {

      return `Your balance is: $${deposit}`;
    },
    transactionHistory: function(numberOfTransactionsToView) {
      let lastTransactions = new Array();

      for(let i = transactionsRecordArray.length; i >=transactionsRecordArray.length - numberOfTransactionsToView; i--) {
        lastTransactions.push(transactionsRecordArray[i]);
      }
      return lastTransactions;
    }
  }
}
/***********************************************************************************/












