class Customer {
    public FirstName: string;
    public lastName: string;
    public Gender: string;
    public Age: number;
    public AccountNumber: string;

    constructor(FirstName: string, lastName: string, Gender: string, Age: number, AccountNumber: string) {
        this.FirstName = FirstName;
        this.lastName = lastName;
        this.Gender = Gender;
        this.Age = Age;
        this.AccountNumber = AccountNumber;
    }

    CustomerInfo() {
        console.log(`The Customer info: ${this.FirstName} ${this.lastName} gender ${this.Gender} of age ${this.Age} of Account No ${this.AccountNumber}`);
    }
}

class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    depositMoney(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount. Amount must be greater than 0.");
        }
    }

    getBalance() {
        return this.balance;
    }
}

// Example usage:
const customer = new Customer("John", "Doe", "Male", 30, "12345");
customer.CustomerInfo();

const bankAccount = new BankAccount(1000); // Initial balance of $1000
console.log(`Initial balance: $${bankAccount.getBalance()}`);
bankAccount.depositMoney(500); // Deposit $500
console.log(`Current balance: $${bankAccount.getBalance()}`);
