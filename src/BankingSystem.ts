// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.

enum TransactionType {
  Deposit = "TransactionType.Deposit",
  Withdraw = "TransactionType.Withdraw"
}

type Transaction = {
  accountNo: number;
  amount: number;
  type: TransactionType;
};

type BankAccount = {
  accountNo: number;
  firstname: string;
  lastname: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[]
}

let accounts: BankAccount[] = [];

// adds a new account to the `accounts` array. It should return a `BankAccount` object.
function createAccount(accountNo: number, firstname: string, lastname: string, initialDeposit: number, isActive = true): BankAccount[] {
  accounts.push({
    accountNo,
    firstname,
    lastname,
    balance: initialDeposit,
    isActive,
    transactions: []
  })
  return accounts
}

// allows deposits and withdrawals and stores them in the transactions array. It should return a string.
function processTransaction(accountNo: number, amount: number, transactionType: TransactionType): string {
  const selectAccount: BankAccount = accounts.filter(account => account.accountNo === accountNo)[0]
  let message: string = "";

  if(selectAccount.balance < amount || !selectAccount.isActive) {
    message = "Insufficient funds for withdrawal"
  } else {
    if(selectAccount.accountNo === accountNo) {
      if(transactionType === "TransactionType.Deposit") {
        selectAccount.balance += amount;
        message = `${amount} deposited into account number ${accountNo}`;
      } else if(transactionType === "TransactionType.Withdraw") {
        selectAccount.balance -= amount
        message = `${amount} withdrawn from account number ${accountNo}`;
      }
    }
    selectAccount.transactions.push({
      accountNo,
      amount,
      type: transactionType
    })
  }

  

  return message
}

// returns the balance of a given account number.
function getBalance(accountNo: number): number {
  const selectAccount: BankAccount = accounts.filter(account => account.accountNo === accountNo)[0]

  return selectAccount.balance;
}

// returns the list of transactions for an account.
function getTransactionHistory(accountNo: number) {
  const selectAccount: BankAccount = accounts.filter(account => account.accountNo === accountNo)[0]

  return selectAccount.transactions
}

// returns the active status of an account number.
function checkActiveStatus(accountNo: number): boolean {
  const selectAccount: BankAccount = accounts.filter(account => account.accountNo === accountNo)[0]

  return selectAccount.isActive;
}

// removes an account from the array and returns a confirmation string.
function closeAccount(accountNo: number): string {
  accounts = accounts.filter(account => account.accountNo !== accountNo)

  return `Account number ${accountNo} is closed.`;
}

// Test cases (students should add more)
// console.log(createAccount(1, "John", "Smith", 100)) // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
// console.log(createAccount(2, "Jane", "Doe", 200, false))
createAccount(1, "John", "Smith", 100)
createAccount(2, "Jane", "Doe", 200, false)
createAccount(3, "Jay", "Kim", 500, true)
console.log(accounts);
console.log(processTransaction(1, 50, TransactionType.Deposit)) // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)) // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)) // "Insufficient funds for withdrawal"
console.log(processTransaction(2, 15, TransactionType.Withdraw))
console.log(processTransaction(3, 140, TransactionType.Withdraw))
console.log(getBalance(1)) // 130
console.log(getTransactionHistory(1)) // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(getTransactionHistory(3))
console.log(checkActiveStatus(1)) // true
console.log(closeAccount(1)) // "Account number 1 closed"