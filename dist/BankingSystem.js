"use strict";
// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "TransactionType.Deposit";
    TransactionType["Withdraw"] = "TransactionType.Withdraw";
})(TransactionType || (TransactionType = {}));
var accounts = [];
// adds a new account to the `accounts` array. It should return a `BankAccount` object.
function createAccount(accountNo, firstname, lastname, initialDeposit, isActive) {
    if (isActive === void 0) { isActive = true; }
    accounts.push({
        accountNo: accountNo,
        firstname: firstname,
        lastname: lastname,
        balance: initialDeposit,
        isActive: isActive,
        transactions: []
    });
    return accounts;
}
// allows deposits and withdrawals and stores them in the transactions array. It should return a string.
function processTransaction(accountNo, amount, transactionType) {
    var selectAccount = accounts.filter(function (account) { return account.accountNo === accountNo; })[0];
    var message = "";
    if (selectAccount.balance < amount || !selectAccount.isActive) {
        message = "Insufficient funds for withdrawal";
    }
    else {
        if (selectAccount.accountNo === accountNo) {
            if (transactionType === "TransactionType.Deposit") {
                selectAccount.balance += amount;
                message = "".concat(amount, " deposited into account number ").concat(accountNo);
            }
            else if (transactionType === "TransactionType.Withdraw") {
                selectAccount.balance -= amount;
                message = "".concat(amount, " withdrawn from account number ").concat(accountNo);
            }
        }
        selectAccount.transactions.push({
            accountNo: accountNo,
            amount: amount,
            type: transactionType
        });
    }
    return message;
}
// returns the balance of a given account number.
function getBalance(accountNo) {
    var selectAccount = accounts.filter(function (account) { return account.accountNo === accountNo; })[0];
    return selectAccount.balance;
}
// returns the list of transactions for an account.
function getTransactionHistory(accountNo) {
    var selectAccount = accounts.filter(function (account) { return account.accountNo === accountNo; })[0];
    return selectAccount.transactions;
}
// returns the active status of an account number.
function checkActiveStatus(accountNo) {
    var selectAccount = accounts.filter(function (account) { return account.accountNo === accountNo; })[0];
    return selectAccount.isActive;
}
// removes an account from the array and returns a confirmation string.
function closeAccount(accountNo) {
    accounts = accounts.filter(function (account) { return account.accountNo !== accountNo; });
    return "Account number ".concat(accountNo, " is closed.");
}
// Test cases (students should add more)
// console.log(createAccount(1, "John", "Smith", 100)) // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
// console.log(createAccount(2, "Jane", "Doe", 200, false))
createAccount(1, "John", "Smith", 100);
createAccount(2, "Jane", "Doe", 200, false);
createAccount(3, "Jay", "Kim", 500, true);
console.log(accounts);
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(processTransaction(2, 15, TransactionType.Withdraw));
console.log(processTransaction(3, 140, TransactionType.Withdraw));
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(getTransactionHistory(3));
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"
