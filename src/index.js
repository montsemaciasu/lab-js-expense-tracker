// Entry
class Entry {
  constructor(date, amount, description) {
    (this.date = date),
      (this.amount = amount),
      (this.description = description);
  }
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry);
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    const totalIncome = this.entries
      .filter((entry) => entry.type === "income")
      .reduce((acc, entry) => acc + entry.amount, 0);

    const totalExpenses = this.entries
      .filter((entry) => entry.type === "expense")
      .reduce((acc, entry) => acc + entry.amount, 0);

    const balance = totalIncome - totalExpenses;
    return balance;
  }
  getFormattedEntries() {
    const arrayFormatedEntries = [];
    this.entries.forEach((entry) => {
      arrayFormatedEntries.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
      );
    });
    return arrayFormatedEntries;
  }
}
