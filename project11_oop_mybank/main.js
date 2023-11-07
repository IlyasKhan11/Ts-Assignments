var Customer = /** @class */ (function () {
    function Customer(FirstName, lastName, Gender, Age, AccountNumber) {
        this.FirstName = FirstName;
        this.lastName = lastName;
        this.Gender = Gender;
        this.Age = Age;
        this.AccountNumber = AccountNumber;
    }
    Customer.prototype.CustomerInfo = function () {
        console.log("The Customer info: ".concat(this.FirstName, " ").concat(this.lastName, " gender ").concat(this.Gender, " of age ").concat(this.Age, " of Account No ").concat(this.AccountNumber));
    };
    return Customer;
}());
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.depositMoney = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited $".concat(amount, ". New balance: $").concat(this.balance));
        }
        else {
            console.log("Invalid deposit amount. Amount must be greater than 0.");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
// Example usage:
var customer = new Customer("John", "Doe", "Male", 30, "12345");
customer.CustomerInfo();
var bankAccount = new BankAccount(1000); // Initial balance of $1000
console.log("Initial balance: $".concat(bankAccount.getBalance()));
bankAccount.depositMoney(500); // Deposit $500
console.log("Current balance: $".concat(bankAccount.getBalance()));
